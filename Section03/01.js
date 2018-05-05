/**
 * 這是一個類似單字剪報功能的演算法，告訴它我們希望得到哪些單字（noteText），然後在一篇文章（magazineText）中去尋找看看能不能找到這些單字，而且數量要足夠。
 * 因此要寫一個 harmlessRansomNote function，並且代入兩個參數 noteText 和 magazineText，如果 noteText 中的單字和數量都能在 magazineText 中被找到，則回傳 true，否則回傳 false。
 * @param {String} noteText : 
 * @param {String} magazineText : 
 * @returns {Boolean}
 */
function harmlessRansomNote (noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    // 將 magazineText 的所有單字記錄出現次數
    magazineArr.forEach( word =>{
        // 若此單字沒出現在 magazineObj , 則建立它
        if(!magazineObj[word]) magazineObj[word] = 0;
        // 讓這個字的出現次數多 1
        magazineObj[word]++;
    });

    console.log(magazineObj); // { this: 1, is: 1, all: 1, the: 2, magazine: 2, text: 1, in: 1 }

    // 記錄是否有足夠note
    var noteIsPossible = true;
    // 檢查magazineObj所記錄的單字是否足夠讓noteArr減掉
    noteArr.forEach( word =>{
        if(magazineObj[word]){
            magazineObj[word]--;
            //如果次數小於0表示此單字不夠扣了
            if(magazineObj[word] < 0) noteIsPossible = false;
        }
        else{
            // 表示主要內文根本不存在條件內文指定的單字
            noteIsPossible = false;
        }
    });
    return noteIsPossible;
}


console.log(harmlessRansomNote('', 'this is all the magazine text in the magazine'));// false

let noteText0 = 'this is a secret note for you from a secret admirer';
let magazineText0 = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited';

console.log(harmlessRansomNote(noteText0, magazineText0));// true ,如果拿掉magazineText0內的secret單字就會false了


/**
 * by my selft (不太好,時間複雜度因為多判斷另一個陣列會變成 O(n^2) + O(m))
 * Think: 
 * 1. 檢查maganizeText內的單字是否包含在條件文字陣列內(noteArr),是的話就記錄單字出現次數的物件.單字屬性值+1
 * 2. 假設條件單字可能有複數個,利用已完成的記錄單字次數物件減掉條件單字出現複數的單字,
 *    如果有小於0的單字,表示maganizeText內的此單字比條件內的此單字還少(不足),那就返回false
 *    跑完就表示maganizeText內的所有單字均大於或等於條件內的所有單字,那就返回true
 */
function harmlessRansomNote2 (noteText, maganizeText) {
    var noteArr = noteText.split(' ');
    var maganizeTextArr = maganizeText.split(' ');

    // 放一個記錄單字出現次數的物件,key就是單字,value就是出現次數
    var magazineObj = {};
    // 如果maganizeText內的單字存在於noteText內, magazineObj內記錄的單字+1
    maganizeTextArr.forEach( word => {
        //這邊最好不要再跑回圈判斷,會造成時間複雜度變O(n^2)
        if(noteArr.includes(word)){
            magazineObj[word] = !magazineObj[word] ? 1 : magazineObj[word] + 1;
        }
    });

    // 檢查若條件單字為複數時, maganizeText內的單字是否足夠
    for(let word of noteArr){
        if(word in magazineObj){
            magazineObj[word]--;
        }
        //變負值表示maganizeText內的單字比條件單字少
        if(magazineObj[word] < 0){
            return false;
        }
    }
    console.log(magazineObj);
    return true;
}



let noteText1 = 'This magazine magazine';
let noteText2 = 'This magazine magazine magazine';
let magazineText = 'This is all the magazine text in the magazine';

console.log(harmlessRansomNote2('', 'this is all the magazine text in the magazine')); // true
console.log(harmlessRansomNote2 (noteText1, magazineText));  // true
console.log(harmlessRansomNote2 (noteText2, magazineText)); // false（"magazine" 數量不足）