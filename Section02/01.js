// myself
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        let result = '';
        if( (i % 3) === 0){
            result += 'Fizz';
        }
        if( (i % 5) === 0){
            result += 'Buzz';
        }
        if(result.length > 0){
            console.log(result);
        }
        else{
            console.log(i);
        }
    }
}

// Tutorials
function fizzBuzz1(num){
    for(let i = 1; i <= num; i++){
        if( i % 15 === 0) console.log('FizzBuzz');
        else if( (i % 3) === 0) console.log('Fizz');
        else if( (i % 5) === 0) console.log('Buzz');
        //else if( (i % 3 === 0) && (i % 5 === 0)) console.log('FizzBuzz'); // 因為上面判斷過了,這行永遠不會被執行,所以把他往上移到第一行就好了,並合併成整除15,因為要符合整除3和整除5的最大公因數是15
        else console.log(i);
    }
}

fizzBuzz(20);

fizzBuzz1(20);
