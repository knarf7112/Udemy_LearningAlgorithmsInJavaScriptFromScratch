/**
 * Rule:
 * 指定一個特定的數字，在以陣列的方式傳入許多數字（numArray），看看能否在這些數字中透過加法組合(固定為A+B)出這個特定的數字
 * 1.結果必須是一個陣列中的陣列且每個陣列內容都固定有兩個數字 => ex: numArray=[1, 6, 3, 4, 2, 5], sum=7  result=[ [1,6], [3,4], [2,5] ]
 * 2. numArray內的任何數字均可被多次用來匹配 ex: numArray=[3,4,3], sum=7 result=[[3,4], [3,4]]
 * 提示: 演算的時間複雜度可以在 O(n^2)或 O(n) 完成,可能須要hash table和取mode值的演算
 * 
 * think by my self:
 * 1. [O(n^2)] 跑雙迴圈跟九九乘法表差不多,第一個數字+第二個數字等於傳入的sum就可以把這兩個數字用陣列包起來丟到結果陣列去
 * 2. [O(n)]   跑一次迴圈並利用hash table來記錄第一次扣除sum所缺的數字
 */
function twoSum (numArray, sum) {
    // returns every pair of numbers from 'numArray'
    // that adds up to the 'sum'
    //-------------------------------------------
    // *****  O(n) version  *****
    let numbers = [];
    let map = {};// 記路扣除第一個數字後所欠缺的數字
    //---------------------------------------------
    
    for(let i = 0; i < numArray.length;i++){
        // 欠缺的部分 = sum - 目前的值 (把目前欠缺的直拿來當hash key)
        let needNum = sum - numArray[i];
        if(!map[needNum]){
            map[needNum] = i;//記錄索引值
        }
        // 若存在與總合匹配的記錄
        if(map[numArray[i]] >= 0){
            //console.log(map);
            numbers.push([numArray[map[numArray[i]]], numArray[i]]);
        }
    }
    
    //-------------------------------------------
    /*
    let unique = {};
    //濾掉重複的版本
    for(let i = 0; i < numArray.length;i++){
        if(!unique[numArray[i]]) {
            unique[numArray[i]] = numArray[i];
        }
    }
    console.log(unique);// { '0': 1, '1': 6, '2': 4, '3': 5, '4': 3, '5': 3 }
    for(let currentValue in unique){
        if(map[sum - Number(currentValue)] >= 0){
            numbers.push([Number(map[sum - currentValue]),  Number(currentValue)]);
        }
        else{
            map[currentValue] = Number(currentValue);
        }
    }
    */
    //-------------------------------------------
    // *****  O(n^2) version *****
    /*
    let numbers = [];
    for(let i = 0; i < numArray.length; i++){
        let number1 = numArray[i];
        for(let j = i + 1; j < numArray.length; j++){
            let number2 = numArray[j];
            if(number1 + number2 === sum){
                numbers.push([number1, number2]);
            }
        }
    }
    */
    return numbers;
}

//console.assert(JSON.stringify(twoSum([1, 6, 4, 5, 3, 3], 7)) === JSON.stringify([[1,6],[4,3],[4,3]]), '幹  非預期結果喔'); // [[1,6],[4,3],[4,3]]
console.log(twoSum([1, 6, 4, 5, 3, 3], 9));// [[ 6, 3 ], [ 6, 3 ], [ 4, 5 ]]
console.log(twoSum([40, 11, 19, 17, -12], 28));// [[ 11, 17 ], [ 40, -12 ]]

/**
 * Tutorial
 */
function twoSum2 (numArray, sum) {
    var pairs = [];
    var hashTable = [];

    for(var i = 0; i < numArray.length; i++){
        var currNum = numArray[i];
        var counterPart = sum - currNum;//欠缺的數字 = 總合 - 目前的數字
        if(hashTable.indexOf(counterPart) !== -1){
            pairs.push([ currNum, counterPart]);
        }
        //[利用時間差]每次推入目前的值後,下一次迴圈就會去另一個陣列檢查是否存在匹配的值
        hashTable.push(currNum);
    }
    console.log(hashTable)
    return pairs;
}

console.log(twoSum2([1, 6, 4, 5, 3, 3], 7));// [[ 6, 1 ], [ 3, 4 ], [ 3, 4 ]]
console.log(twoSum2([1, 6, 4, 5, 3, 3], 9));// [[ 6, 3 ], [ 6, 3 ], [ 4, 5 ]]
console.log(twoSum2([40, 11, 19, 17, -12], 28));// [[ 17, 11 ], [ -12, 40 ]]