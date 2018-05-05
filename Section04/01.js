/**
 * think by my self:
 * 1. 不包含標點符號,所以要先過濾掉
 * 2. 要將文字對半分後頭尾相比
 * 3. 文字頭和尾相互比較,不一樣就結束了,
 * 4. 每次頭的位置+1跟尾的位置-1往中間靠攏,若遇到標點符號就再+-1並變更中間的位置
 */
function isPalindrome (str) {
    let strArr = str.split('');
    let head = 0; // 從文字頭開始的指標
    let tail = str.length - 1; // 從文字尾開始的指標
    let isAlphabet = /^[a-zA-Z]{1}$/; //用來過濾掉非字母的條件

    while(head < tail){
        // 過濾純字母: 檢查是否為標點符號,是的話就跳過此文字,換下一個文字
        while(!isAlphabet.test(strArr[head])){
            head++;
        }
        while(!isAlphabet.test(strArr[tail])){
            tail--;
        }
        
        console.log(`${head}:${strArr[head]}, ${tail}:${strArr[tail]}`);
        // 頭尾字母同相同
        if(strArr[head].toLowerCase() === strArr[tail].toLowerCase()){
            head++;
            tail--;
            // 已經判斷到最中間的字元
            if((tail - head) <= 0){
                return true;
            }
        }
        else{
            console.log(`[false]${head}:${strArr[head]}, ${tail}:${strArr[tail]}`);
            return false;
        }
    };

    return false;
};

console.log(isPalindrome("")); // false
console.log(isPalindrome("qa1q")); // true 數字和標點符號都都當作沒有
console.log(isPalindrome("qaaq")); // true
console.log(isPalindrome("qo''o'q")); // true
console.log(isPalindrome("Madam, I'm Adam")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("Coding JavaScript")); // false


/**
 * Tutorials
 * 
 */
function isPalindrome2 (str) {
    // 轉換為小寫並且分離每個字母成陣列
    str = str.toLowerCase();
    var charactersArr = str.split('');
    //檢查傳入char正確性用的陣列
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char =>{
        //取得純字母的部分
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    //若順相文字與反轉後的逆向文字相同就是迴文了
    if(lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}


console.log(isPalindrome2("")); // true
console.log(isPalindrome2("qa1q")); // true 數字和標點符號都都當作沒有
console.log(isPalindrome2("qaaq")); // true
console.log(isPalindrome2("qo''o'q")); // true
console.log(isPalindrome2("Madam, I'm Adam")); // true
console.log(isPalindrome2("race car")); // true
console.log(isPalindrome2("Coding JavaScript")); // false