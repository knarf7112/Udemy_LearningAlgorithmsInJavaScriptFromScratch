/**
 * Run Time Complexity: O (log n)
 * Rule:
 * 1. 從一個已排序的列表中找出指定的值,不存在則回傳-1
 * 2. 使用Recursion方式
 * 
 * think by my self:
 * 1. 結束條件: 
 *             1.陣列只剩一個元素且不等於key值 
 *             2.找到key值了
 * 2. 每次傳入陣列的另一半到recursion,判斷依據key是大於或小於middle的值
 */
let count = 0;
function binarySearch (numArray, key) {
    console.log(`第${++count}次遞迴`);
    if(numArray.length === 1 && numArray[0] !== key){
        return -1;
    }
    //base case
    let midlde = Math.floor(numArray.length / 2);
    let halfArr; 
    
    if(key === numArray[midlde]){
        return numArray[midlde];
    }
    //key比中間值大,所以取陣列後半段
    else if(key > numArray[midlde]){
        halfArr = numArray.slice(midlde + 1, numArray.length);
    }
    //key比中間值小,取陣列前半段
    else{
        halfArr = numArray.slice(0, midlde);
    }
    console.log(`第${count}次遞迴 剩餘的陣列`, halfArr);
    return binarySearch(halfArr, key);
}


console.log(binarySearch([1,2,3,5,6,8,9,11,12,15], 3));// 3 第2次遞迴就找到
count = 0;
console.log(binarySearch([1,2,3,5,6,8,9,11,12,15], 1));// 1 第4次遞迴就找到
count = 0;
console.log(binarySearch([1,2,3,5,6,8,9,11,12,15], 4));// -1 第4次遞迴還是找不到


/**
 * Tutorial
 */
function binarySearch2 (numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    // base case
    if(middleElem === key){
        return true;
    }
    // recursion case
    else if(middleElem < key && numArray.length > 1){
        return binarySearch2(numArray.splice(middleIdx, numArray.length), key);
    }
    else if(middleElem > key && numArray.length > 1){
        return binarySearch2(numArray.splice(0, middleIdx), key);
    }
    else{
        return false;
    }
}

console.log(binarySearch2([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));// true
console.log(binarySearch2([5, 7, 12, 16, 36, 39, 42, 56, 71], 5)); // true
console.log(binarySearch2([5, 7, 12, 16, 36, 39, 42, 56, 71], 15));// false