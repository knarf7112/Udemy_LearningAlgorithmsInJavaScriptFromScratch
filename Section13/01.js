/**
 * bubble up the max number to last
 * 
 * think by my self:
 * 0. 從陣列的位置0開始,每次比較當前與下一個位置的值,
 *    若左邊值大於右邊值就交換兩個元素,
 *    最後會將比較大的數字都提升到右邊[頂端]
 * 1. 兩層forloop,第一層迴圈跑所有元素一次,第二層迴圈跑0~第一層迴圈的目前變數值的範圍(每次跑完第一層迴圈就會將陣列內的一個較大值提升到右邊) 
 */
function bubbleSort (array) {
    // return array, sorted with bubble sort
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i;j++){
            // 左邊值大於右邊值就交換(提升比較大的值到右邊)
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            //console.log(`第1層的i值:${i},第2層的j值:${j}`);
        }
    }
    return array;
}

console.log(bubbleSort([20, 20, 31, 56, 1, 12, 12]));// [1, 12, 12, 20, 20, 31, 56]
console.log(bubbleSort([5, 3, 8, 2, 1, 4]));// [1, 2, 3, 4, 5, 8 ]
console.log(bubbleSort([3, -9, -12, -1, 8]));// [-12, -9, -1, 3, 8]

/**
 * tutorial
 */
function bubbleSort2 (array) {

    //first loop dictate that how many times we want to loop through our array 
    for(var i = array.length; i > 0; i--){
         // inner loop is where we will handle the comparing of each number to its neighbor
         for(var j = 0; j < i; j++){
             if(array[j] > array[j + 1]){
                 var temp = array[j];
                 array[j] = array[ j + 1 ];
                 array[ j + 1 ] = temp;
             }
         }
    }

    return array;
}

console.log(bubbleSort2([20, 20, 31, 56, 1, 12, 12]));// [1, 12, 12, 20, 20, 31, 56]
console.log(bubbleSort2([5, 3, 8, 2, 1, 4]));// [1, 2, 3, 4, 5, 8 ]
console.log(bubbleSort2([3, -9, -12, -1, 8]));// [-12, -9, -1, 3, 8]