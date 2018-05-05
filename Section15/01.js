/**
 * Purpose:
 * 股票的各個時段股價用一個陣列表示
 * 如何找到買進賣出的最高利潤值?
 * 
 * ex:
 * prices array => [32, 46, 26, 38, 40, 48, 42]
 * 1. 找出在哪個時間點買進、哪個時間點賣出可以獲得最高的收益。以剛剛的陣列為例，應該在價格為 26 元時買入、48 元時賣出，這時會獲得 22 元的最高收益
 * 2. 如果該天沒有獲利的可能則回傳 -1
 * 3. 也要考慮最大利潤 (max profit) 為0的情況 
 * 4. 解決方法的時間複雜度必須為 O(n)
 * 
 * think by my self: (本來想用陣列元素相鄰的值來計算,但須要考慮跌價後又回漲的值比跌價多的情況,所以無法用跌價來當作區隔,會有漏洞,所以改用教學的想法 ex:  +2->+3->-1->+5  = +9)
 * 1. 陣列排序就是時間順序,所以要先買進才能賣出,也就是買進的索引值不會超前賣出的索引值
 * 2. 每次迴圈都會有買價(目前元素)與賣價(下一個元素),如果下次的買價(即本次的賣價)比記錄的買價低就設定flag=true,在下次迴圈更新掉最低買價
 * 3. 如果目前記錄的買價比賣價低就試算一下目前的利潤,並比較一下剛試算的利潤是否有比上次記錄的高,有就更新
 */
function maxStockProfit (pricesArr) {
    // takes in array of prices as parameter
    // returns the max possible profit of the day
    let maxProfit = -1;
    let buyPrice = 0; // 目前的買價
    let sellPrice = 0;// 目前的賣價 
    let changeBuyPrice = true; // 用來記錄是否有變更過買價
    /*
    //worst case : O(n^2)
    for(let i = 0; i < pricesArr.length; i++){
        let buyedPrice = pricesArr[i];
        for(let j = i + 1; j < pricesArr.length; j++){
            console.log(pricesArr[j] - buyedPrice);
            if((pricesArr[j] - buyedPrice) > maxProfit){
                maxProfit = pricesArr[j] - buyedPrice;
            }
        }
    }
    */
    for(let i = 0; i < pricesArr.length - 1; i++){
        console.log('上次買價', buyPrice);
        // 若須要變更買價 就將上次暫存的買價換成本次的
        if(changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];
        console.log(`本次買價:${ buyPrice } 賣價:${ sellPrice }`);
        
        //若本次賣價比暫存的最低買價低,就設定flag來讓下次更新暫存的最低買價
        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }
        else {
            //不用更新暫存的最低買價
            changeBuyPrice = false;
            //若賣價比買價高,就取得本次的利潤
            var tempProfit = sellPrice - buyPrice;
            // 如果目前累計的利潤比上次記錄的利潤還高就更新
            if(tempProfit > maxProfit){
                maxProfit = tempProfit;
            }
        }

    }
    /*
    // 1. 先取得陣列內值之間的間距值
    // 2. 間距值連續累計最大的就是最大利潤了(表示股票連續漲價,有這麼爽就好了),有負值就表示中斷了
    // 當目前間距值>=0表示累計是正向的,那就繼續累計,若為負值就中斷
    for(let i = 0; i < pricesArr.length - 1; i++){
        let currentRagne = pricesArr[i + 1] - pricesArr[i]
        if(currentRagne >= 0){
            start = true;// 開始累計
            lastStatus = '正值';
        }
        else{
            //若上次狀態為正值,但本次為負值表示利潤累計中斷了,所以下次有正值的利潤就是另一筆累計
            if(lastStatus === '正值'){
                index++;
            }
            lastStatus = '負值';
            start = false;//中斷累計
        }
        console.log(lastStatus + ':' + currentRagne);
        if(start) {
            //將連續的正值累計
            currRange[index] =  currRange[index] || 0;
            currRange[index] += currentRagne;
        }
        
    }
    console.log('累計的利潤集合', currRange);
    if(!currRange.length) return -1;
    else{
        //從集合中找大最大的累計利潤
        currRange.forEach( range => {
           if(range > maxProfit){
               maxProfit = range;
           } 
        });
    }
    */
    return maxProfit;
}

//console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42])); // 26->48 = 22
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])); //  4->16 = 12
//console.log(maxStockProfit([92, 86, 76, 68, 50, 48, 32])); // -1
//console.log(maxStockProfit([92, 86, 76, 68, 68, 48, 32])); // 68->68 = 0

/**
 * tutorial 
 */
function maxStockProfit2 (pricesArr) {
    var maxProfit = -1; // -1 or 0 or 123
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for(var i = 0; i < pricesArr.length; i++){
        //若有變更買價
        if(changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];

        //當目前的賣價高於買價就取得利潤
        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }
        else {
            //
            var tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit){
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }

    return maxProfit;
}


console.log(maxStockProfit2([32, 46, 26, 38, 40, 48, 42])); // 26->48 = 22
console.log(maxStockProfit2([10, 18, 4, 5, 9, 6, 16, 12])); // 4->16 = 12
console.log(maxStockProfit2([92, 86, 76, 68, 50, 48, 32])); // -1
console.log(maxStockProfit2([92, 86, 76, 68, 68, 48, 32])); // 0