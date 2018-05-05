/**
 * 找質數
 * 
 * think by my self:
 * 1. 兩層迴圈,第一圈迴圈用來跑每個數字,第二圈迴圈則是從2到此數字內的數字,若能被整除就表示非質數
 */
function sieveOfEratosthenes (num) {
    // return all prime numbers up
    // to 'num' in an array
    var primes = [];
    // base case:
    for(let i = 2; i <= num; i++){
        
        //如果能被質數列表整除表示非質數
        if(primes.some(prime => i % prime === 0 )){
            continue;
        }

        // set prime flag
        let isPrime = true;
        //範圍: 2 ~ (num - 1) 
        //     若能被整除表示非質數
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            primes.push(i);
        }
    }
 
    console.log(primes);
    return primes;
}

console.log(sieveOfEratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

/**
 * tutorial
 * Optimization: Stop looping through at the square root of 'num'
 * 利用索引值的true/false來判斷質數(質數:索引值)
 */
function sieveOfEratosthenes2 (num) {
    let primes = [];
    //一開始將所有索引值都設為true
    for(let i = 0; i <= num;i++){
        primes[i] = true;
    }

    primes[0] = primes [1] = false;

    // 將2n,3n,4n...的倍數的索引值設為false
    for(let i = 2; i < Math.sqrt(num); i++){
        for(var j = 2; j * i <= num; j++){
            primes[j * i] = false;
        }
    }

    var result = [];
    // 如果索引值為true就表示為質數
    for( var i = 0; i < primes.length;i++){
        if(primes[i]) result.push(i);
    }

    return result;
}

console.log(sieveOfEratosthenes2(20)); // [2, 3, 5, 7, 11, 13, 17, 19]