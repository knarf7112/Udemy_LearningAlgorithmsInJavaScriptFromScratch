/**
 * Hits:
 * 1. does not require a lot of code - don't over complicate it!
 * 2. base case deals with the fact that the first two numbers are always 1 and 1.
 * 
 * think by my self:
 * 1. 取前一次+前二次的值加總
 * 2. use cache to save the computed number
 * 3. 最初點為回傳1,也就是總是從頭開始累計,很多次的 1 + 1 的累計
 */
let cache = {}; // 存放計算過的加總値,key表示上一次的値
function fibonacci (position) {
    console.log(position);
    // Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    // position = 1 or 2 , back 1 
    if(position <= 2){
        return 1;
    }
    console.log(position);
    /*
    // use cache save the compute result
    if(!cache[position]){
        cache[position] = fibonacci( position -1 ) + fibonacci( position - 2 );
    }
    return cache[position];
    
    */
    return fibonacci( position -1 ) + fibonacci( position - 2 );
}

// Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 3
//console.log(cache);// { '3': 2, '4': 3 }

console.log(fibonacci(9)); // 34

//看看會不會crash => 沒用memoization方式作cache真的會讓NodeJS crash ><
//console.log(fibonacci(50)); // 12586269025
//console.log(cache);// { '3': 2, '4': 3, '5': 5, '6': 8, '7': 13, '8': 21, '9': 34 }

/**
 * tutorial - 1
 * 總是為上一次和上兩次的總和
 * 但我們並不知到上一次和上上次的値, ex: position = 10, 所以須要position為8和9的値,但我們不知道position為8和9値為多少
 * 
 * 若每一次從新計算値,時間複雜度為 O(2^n)
 * 會讓系統算到崩潰,可以使用Memoization來減少時間複雜度
 */
function fibonacci2 (position) {
    if(position < 3) return 1;
    else return fibonacci2(position - 1) + fibonacci2( position - 2);
}

console.log(fibonacci2(4)); // 3
console.log(fibonacci2(9)); // 34
console.log(fibonacci2(12)); // 144
//看看會不會crash? => 真的會crash -.- 
//console.log(fibonacci2(50)); // 12586269025

// use Memoization decrement time complex : Runtimes => O(n)
// 1. check to see if number already exists in cache
// 2. if number 'is in cache', use that number
// 3. if number ' is not in cache', calculate it and put it in cache so it can be used multiple times in future.
function fibMemo ( index, cache) {
    // index: index of number in fibonacci sequence
    // cache: an array used of memory
    cache = cache || [ 0 ];
    //base case : 若存在index的cache値就回傳,不存在則遞迴到有為止,else區段來將計算直寫入cache
    if(!cache[index]) {
        //若cache小於2就設定最初的値 => 所以cache[0]和cache[1]會被設定為1,然後用這個來計算下一次的累計值並存入cache陣列
        if(index < 3) {
            cache[index] = 1;
        }
        else {
            //從第3個以上的索引就開始累計上一次的計算值
            cache[index] = fibMemo( index - 1, cache) + fibMemo( index - 2, cache)
            //console.log(cache); // [  0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
        }
    }

    return cache[index];
}



console.log(fibMemo(9)); // 34
console.log(fibMemo(12)); // 144
//看看會不會crash
console.log(fibMemo(50)); // 12586269025
console.log(fibMemo(1000)); // 4.346655768693743e+208