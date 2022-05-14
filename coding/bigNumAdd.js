function bigNumAdd(a, b){
    let maxLen = Math.max(a.length, b.length);
    a = padStart(maxLen, "0");
    b = padStart(maxLen, "0");

    let t = 0;
    let f = 0;
    let sum = '';
    for (let index = maxLen-1; index >=0; index--) {
        t = parseInt(a[index]) + parseInt(b[index]) + f;
        f = Math.floor(t / 10);
        sum = (t % 10) + sum;
    }
    if(f === 1){
        sum = "1" + sum;
    }
    return sum;
}