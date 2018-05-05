/**
 * 規則:
 * 1. 僅反轉各別的單字,整個單字順序不變
 * 2. 不允許使用array.reverse方法
 * think by my self:
 * 1. 先切割出各別單字轉成陣列
 */
function reverseWords (str) {
    // reverse every word in the string, but not whole string
    // return the new string

    let words = str.split(' ');
    let reverseString = '';
    words.forEach( word =>{
        //迴圈跑單字並串到結果字串上
        for(let i = word.length - 1; i >= 0; i-- ){
            reverseString +=  word[i];
        }
        //串上空格
        reverseString += ' ';
    });
    reverseString.length = reverseString.length - 1; //消除最後一個空白
    return reverseString;
}

console.log(reverseWords('Coding JavaScript'));// gnidoC tpircSavaJ
console.log(reverseWords('this is a string of words'));// siht si a gnirts fo sdrow



/**
 * Tutorial
 */
function reverseWords2 (str) {
    // 1. 從傳入字串產生一個存放所有單字的陣列
    var wordsArr = str.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach( word => {
        var reversedWord = '';
        for(var i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];
        }
        reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join(' ');
}

console.log(reverseWords2('Coding JavaScript'));// gnidoC tpircSavaJ
console.log(reverseWords2('this is a string of words'));// siht si a gnirts fo sdrow