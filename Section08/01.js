/**
 * 規則:
 * 有三個方法會調用同一個方法
 * 
 * think by my self:
 * 
 */

/**
 * mean(算數平均值): n個數據相加後除以n
 * @param {Array} arr
 */
function getMean (arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

/**
 * median(中位數): 對於有限的數集，可以通過把所有觀察值高低排序後找出正中間的一個作爲中位數
 * @param {Array} arr 
 */
function getMedian (arr) {
    let median = 0;
    let middle = Math.floor(arr.length / 2);
    arr.sort(function(a, b){ return a - b; });//依序排列, 沒帶入function會變成轉成文字做排序
    if(arr.length > 1){
        if(arr.length % 2 == 1){
            median = arr[middle];
        }
        else{
            median = (arr[middle - 1] + arr[middle]) / 2;
        }
    }
    console.log(arr.length)
    return median;
}

/**
 * mode(眾數): 指一組數據中出現次數最多的數據值, ex: {2,3,3,3,4,4,4} => 出現最多的是3和4,所以眾數是3和4
 * @param {Array} arr 
 */
function getMode (arr) {
    let temp = {};
    let mode = '';
    for(let i = 0; i < arr.length; i++){
        if(!temp[arr[i]]) temp[arr[i]] = 0;
        temp[arr[i]]++;
    }

    // mode
    let maxCount = 0;
    let modes = [];
    for(let num in temp){
        if(temp[num] > maxCount){
            maxCount = temp[num];
            modes = [num];
        }
        else if( temp[num] === maxCount ){
            modes.push(num);
        }
    }
    //若所有數字出現頻率都一樣就回傳空陣列
    if(modes.length === Object.keys(temp).length){
        modes = [];
    }
    return modes;
}

function meanMedianMode (arr) {
    // call other 3 function
    // return obj which has mean(平均值), median(中位數), mode(眾數)

    return {
        "mean": getMean(arr),     // the mean value
        "median": getMedian(arr), // the median value
        "mode": getMode(arr)       // the mode value 
    };
}

console.log(meanMedianMode([3, 1, 2, 1, 3, 3, 11, 4]));// mean: 3.5, median: 3,  mode: [ '3' ]
console.log(meanMedianMode([3, 1, 2, 1, 3]));          // mean: 2,   median: 2,  mode: [ '1', '3' ]
console.log(meanMedianMode([9, 10, 23]));              // mean: 14,  median: 10, mode: []
/**
 * Tutorial
 */
function meanMedianMode2 (arr) {
    return {
        mean: getMean2(arr),
        median: getMedian2(arr),
        mode: getMode2(arr)
    };
}

function getMean2 (arr) {
    var sum = 0;
    arr.forEach( num =>{
        sum += num;
    });
    return sum / arr.length;
}

function getMedian2 (arr) {
    arr.sort(function (a, b){ return  a - b; });
    var median;

    if(arr.length % 2 !== 0){
        median = arr[Math.floor(arr.length / 2)];
    }
    else {
        var middle1 = arr[Math.floor(arr.length / 2) - 1];
        var middle2 = arr[Math.floor(arr.length / 2)];
        median = (middle1 + middle2) / 2;
    }
    return median;
}

function getMode2 (arr) {
    var modeObj = {};
    arr.forEach(num =>{
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    var maxFrequency = 0;
    var modes = [];
    for(var num in modeObj){
        // 比目前的次數還高就換掉
        if(modeObj[num] > maxFrequency){
            modes = [ num ];
            maxFrequency = modeObj[num];
        }
        //若次數有一樣的就塞入Modes陣列
        else if( modeObj[num] === maxFrequency ){
            modes.push(num);
        }
    }

    // 若所有數字出現的次數都一樣
    if(modes.length === Object.keys(modeObj).length){
        modes = [];
    }
    console.log(modes);
    return modes;
}

console.log(meanMedianMode2([1,2,3,4,5,4,6,1])); // mean: 3.25, median: 3.5, mode: [ '1', '4' ]
console.log(meanMedianMode2([9, 10, 23]));       // mean: 14,   median: 10,  mode: []
