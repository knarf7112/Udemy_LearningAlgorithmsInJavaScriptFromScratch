/**
 * think by self:
 * 1. 字母若為最後要從頭開始 z(122) ---(+1)---> a(97)
 * 2. 先都轉小寫,再切成陣列並把文字都轉成數字
 * @param {string} str 
 * @param {number} num 
 */
function caeserCipher (str, num) {
    let charArr = str.toLocaleLowerCase().split(''); // 轉小寫並轉陣列
    let charCodeArr =  charArr.map( char => char.charCodeAt(0) ); //字元轉換成字元代碼
    let newString = ''; // 放加密後的字元
    var num  = num % 26; // 超過26個字母大小就取餘數
    
    for( let i = 0; i < charCodeArr.length; i++ ){
        let charCode = charCodeArr[i];
        let newCharCode = charCode;

        //若非字母就直接塞入結果
        if(charCode < 97 || charCode > 122){
            newString += String.fromCharCode(charCode);//從數字轉回字母
            continue;
         }

        // 處理字母a ~ z的,若加cipher後會超過z就從a開始
        if( (charCode + num) > 122 ){
            newCharCode = 96 + ( 122 - charCode + num );
        }
        else if((charCode + num) < 97){
            newCharCode = 123 - ( 97 - (charCode + num));
        }
        else{
            newCharCode += num;
        }
        console.log(`before:${ charCode } , after:${ newCharCode }`);

        let newChar = String.fromCharCode(newCharCode);
        // 檢查原本的字元若類型為大寫就轉換成大寫
        if(str[i] === str[i].toUpperCase()){
            newChar = newChar.toUpperCase();
        }

        // cipher 前後比較
        newString += newChar;//累加回去
    };

    return newString;
}

console.log(caeserCipher('zoo qoo', 0)); // zoo qoo
console.log(caeserCipher('zoo Qoo', 15)); // ozz Xzz
console.log(caeserCipher('zoo Keeper', 27));// app Lffqfs
console.log(caeserCipher('zoo Keeper', 2)); // bqq Mggrgt
console.log(caeserCipher('Abc xyz', -2)); // Yza vwx
console.log(caeserCipher('Big Car', -16)); // Lsq Mkb
console.log(caeserCipher('Javascript', -900)); // Tkfkcmbszd

/**
 * Tutorial
*/
function caeserCipher2 (str, num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerCaseString.length; i++ ){
        var currentLetter = lowerCaseString[i];
        // 檢查是否為字母, 非字母就跳過
        if(currentLetter === ' '){
            newString += currentLetter;
            continue;
        }
        
        // 取得目前字母的索引值
        var currentIndex = alphabet.indexOf(currentLetter);
        // 索引向前移動 產生新的字母,若超過上限,就從頭開始
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;

        //若有大寫字母
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        }
        else{
            newString += alphabet[newIndex];
        }
    }

    return newString;
}

console.log(caeserCipher2('zoo Keeper', 2)); // 'bqq Mggrgt'
console.log(caeserCipher2('azoo Keeper', -2)); // 'yxmm Iccncp'
console.log(caeserCipher2('Big Car', -16)); // Lsq Mkb
console.log(caeserCipher2('Javascript', -900)); // Tkfkcmbszd 