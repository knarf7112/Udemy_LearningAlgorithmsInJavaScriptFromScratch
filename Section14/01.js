/**
 * 未排序的陣列用合併排序演算法
 * 分解流程:
 * 1.先將陣列不斷的對半拆分,直到每個陣列只剩一個元素
 * 2.再兩兩合併元素(比較大小後合併)
 * 
 * ref: https://hellolynn.hpd.io/2017/08/10/%E5%90%88%E4%BD%B5%E6%8E%92%E5%BA%8F-merge-sort/
 * 
 * 有兩個已排序過的陣列,將兩個已排序的陣列合併成一個已排序的陣列
 * think by my self:
 * [先寫一個用來將兩個排序的陣列作比較並合併成一個]
 *   1. 從教學說明終了解到兩個陣列都從位置0開始比較,
 *      如果左邊陣列的值比較大就移除左邊的值並將值放入到結果陣列,
 *      若右邊陣列的值比較大,則同理之
 *   2. while迴圈判斷兩個陣列內是不是還有東西,兩個陣列都沒東西就表示都放入結果陣列了
 *   3. 如果有一個陣列空了,那就只剩將另一個陣列清空了
 *   4. 如果兩個陣列都有數據,那就比較兩個陣列位置0的值,誰比較小就從誰身上取值放到結果陣列
 * [再寫一個拆分的方法將陣列不斷的兩兩拆分]
 *   1. 終止條件(base case)看起來就是陣列只剩一個元素,就表示拆分到底了,而且還可以當作已排序的,因為自己跟自己排序當然沒問題
 *   2. 將原本陣列對半拆分成左右陣列並用變數儲存
 *   3. 然後用merge方法合併將這兩個拆分的陣列作並回傳
 */

// 此merge方法用來將兩個已排序的陣列作合併成一個,合併後仍為已排序的陣列
function merge (array1, array2) {
    // takes in two sorted arrays as parameter
    // merges those sorted arrays into one sorted array
    // return one sorted array
    let sortedArray = [];

    // loop條件: 只要array1或array2內還有東西
    while (array1.length > 0 || array2.length > 0){
        let val;
        //如果arrray1空了,從array2拿資料
        if(array1.length === 0){
            val = array2.shift();
        }
        //如果arrray2空了,從array1拿資料
        else if(array2.length === 0){
            val = array1.shift();
        }
        else {
            //如果arrray1位置0的值小於array2位置0的值,從array1拿資料
            if(array1[0] <= array2[0]){
                val = array1.shift();
            }
            else {
                val = array2.shift();
            }
        }

        //console.log(val);//
        sortedArray.push(val);
    }

    return sortedArray
}

//console.log(merge([3, 5, 8, 20], [1, 2, 12, 17]));// [1, 2, 3, 5, 8, 12, 17, 20]
//console.log(merge([0], [1, 2, 12, 17]));// [0, 1, 2, 12, 17]
//console.log(merge([3, 5, 8, 20], [0])); // [0, 3, 5, 8, 20]
var count = 0;
function mergeSort (arr) {
    // take in a single,  unsorted array as a parameter
    // split the array into two halves

    // base case : 當陣列被拆分到最小單位就返回(1 element)
    if(arr.length < 2){
        return arr;
    }
    //從中間取半,兩兩拆分左右的陣列(左右不一致也沒關係)
    let middleIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middleIndex);// 拆分左邊的陣列
    let rightArr = arr.slice(middleIndex, arr.length);// 拆分右邊的陣列
    count++;
    console.log(`第${count}次遞迴 左半陣列: [${ leftArr }] 右半陣列: [${ rightArr }]`);
    /*
    第1次遞迴 左半陣列: [10,7,9] 右半陣列: [3,5,8,20] 
    第2次遞迴 左半陣列: [10] 右半陣列: [7,9] 
    第3次遞迴 左半陣列: [7] 右半陣列: [9] 
    第4次遞迴 左半陣列: [3,5] 右半陣列: [8,20] 
    第5次遞迴 左半陣列: [3] 右半陣列: [5] 
    第6次遞迴 左半陣列: [8] 右半陣列: [20]
     */

    //開始遞迴到左邊最小的元素,然後與隔壁右邊的陣列合併(兼排序),
    //然後回傳左邊合併且排序的陣列到上一層的theLastLeftArr變數
    //繼續處理右邊的
    let theLastLeftArr = mergeSort(leftArr);   
    let theLastRightArr = mergeSort(rightArr);
    console.log(`第${count}次遞迴, 左半陣列: [${ theLastLeftArr }] 右半陣列: [${ theLastRightArr }]`);
    /*
    第3次遞迴, 左半陣列: [7] 右半陣列: [9] 
    第3次遞迴, 左半陣列: [10] 右半陣列: [7,9] 
    第5次遞迴, 左半陣列: [3] 右半陣列: [5] 
    第6次遞迴, 左半陣列: [8] 右半陣列: [20] 
    第6次遞迴, 左半陣列: [3,5] 右半陣列: [8,20] 
    第6次遞迴, 左半陣列: [7,9,10] 右半陣列: [3,5,8,20]
    */
    let mergedArr =  merge(theLastLeftArr, theLastRightArr);

    console.log(`第${count}次 排序並且合併的陣列`, mergedArr);//
    /*
    第3次 排序並且合併的陣列 [ 7, 9 ] 
    第3次 排序並且合併的陣列 [ 7, 9, 10 ] 
    第5次 排序並且合併的陣列 [ 3, 5 ] 
    第6次 排序並且合併的陣列 [ 8, 20 ] 
    第6次 排序並且合併的陣列 [ 3, 5, 8, 20 ] 
    第6次 排序並且合併的陣列 [ 3, 5, 7, 8, 9, 10, 20 ]
     */
    return mergedArr;
}

function mergeSort_forloop(arr){

    let seperateArr = arr.map( num => [num] );
    console.log(seperateArr); // [ [ 10 ], [ 9 ], [ 7 ], [ 3 ], [ 5 ], [ 8 ], [ 20 ] ]​​​​​
    let count = 0;
    do{
        count++;
        console.log(seperateArr.length);// 7->6->5->4->3->2->1 
        if(seperateArr.length === 1) return seperateArr[0];
        let arr1 = seperateArr.shift();
        let arr2 = seperateArr.shift();
        console.log(count, arr1,arr2);
        /*
        1 : [ 10 ] [ 9 ] 
        2 : [ 7 ] [ 3 ] 
        3 : [ 5 ] [ 8 ] 
        4 : [ 20 ] [ 9, 10 ] 
        5 : [ 3, 7 ] [ 5, 8 ] 
        6 : [ 9, 10, 20 ] [ 3, 5, 7, 8 ]
        */
        seperateArr.push(merge(arr1, arr2));

    }
    while(true);
}

console.log(mergeSort_forloop([10, 9, 7, 3, 5, 8, 20])); // [3, 5, 7, 8, 9, 10, 20]
console.log(mergeSort([10, 9, 7, 3, 5, 8, 20])); // [3, 5, 7, 8, 9, 10, 20]
console.log(mergeSort2([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])); // [1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000]

/**
 * tutorial
 */
function mergeSort2 (array) {
    if(array.length < 2) return array;
    // 1. split array into two halves
    var middleIndex = Math.floor(array.length / 2);
    var firstHalf = array.slice(0, middleIndex);
    var secondHalf = array.slice(middleIndex, array.length);
    // 目前擁有兩個對半的陣列,能處理的僅能有0個或1個陣列元素,因為我們知道如果陣列內的元素只有0個或1個那就可以當作已經排序過的
    
    return merge2(mergeSort2(firstHalf), mergeSort2(secondHalf));
}

function merge2 (array1, array2) {
    var result = [];
    //當陣列1和陣列2都存在內容時,比較內容(result陣列會裝滿大部份的陣列內容,剩餘的部分交給後面再去填塞)
    while(array1.length && array2.length){
        var minEle;
        if(array1[0] < array2[0]){
            minEle = array1.shift();
        }
        else {
            minEle = array2.shift();
        }
        result.push(minEle);
    }

    if(array1.length){
        result = result.concat(array1);
    }
    if(array2.length){
        result = result.concat(array2);
    }

    return result;
}

console.log(mergeSort2([4, 3, 2, 1]));
console.log(mergeSort2([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1])); // [1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000]