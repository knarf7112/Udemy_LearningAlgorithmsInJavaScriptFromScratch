/**
 * 規則:
 * 1. reverse array
 * 2. return reversed array
 * 3. 確保是操作傳入的陣列
 * 4. 不允許建立新陣列來存放元素且不能回傳新陣列
 * 5. 也不允許使用array的reverse方法
 * 
 * think by me self:
 * 1. 因為陣列要頭尾交換,所以取陣列的一半當要跑的迴圈數
 * 2. 使用一個暫存變數來協助陣列內的值做交換
 * @param {Array} arr 
 */
function reverseArrayInPlace (arr) {
    let middle = Math.floor(arr.length / 2);
    for(let i = 0, j = arr.length - 1; i <= middle; i++, j-- ){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

var arr0 = [1, 2, 3, 4, 5];
var reversedArr0 = reverseArrayInPlace(arr0);
console.log('是否仍為同一個記憶體位置', arr0 === reversedArr0); // true
console.log(reversedArr0); // [5, 4, 3, 2, 1]

var arr1 = [1, 2, 3, 4];
var reversedArr1 = reverseArrayInPlace(arr1);
console.log('是否仍為同一個記憶體位置', arr1 === reversedArr1); // true
console.log(reversedArr1); // [4, 3, 2, 1]


/**
 * Tutorial
 */
function reverseArrayInPlace2 (arr) {
    // 不能跑整個陣列長度,否則又會還原回去,所以交換陣列的一半就好
    for(var i = 0; i < arr.length / 2; i++){
        var tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i]; //設定要交換的尾部元素到頭部
        arr[arr.length - 1 - i] = tempVar; //設定要交換的頭部元素到尾部
    }
    return arr;
}

var arr2 = [1, 2, 3, 4, 5];
var reversedArr2 = reverseArrayInPlace2(arr2);
console.log('是否仍為同一個記憶體位置', arr2 === reversedArr2); // true
console.log(reversedArr2); // [5, 4, 3, 2, 1]

var arr3 = [1, 2, 3, 4, 5, 6];
var reversedArr3 = reverseArrayInPlace2(arr3);
console.log('是否仍為同一個記憶體位置', arr3 === reversedArr3); // true
console.log(reversedArr3); // [6, 5, 4, 3, 2, 1]
