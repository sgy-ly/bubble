"use strict"

function calculation(inputNum, xNum) {
    var inputList = inputNum.toString();
    var outPutList = [];
    var jinwei = 0;
    for (let i = inputList.length - 1; i >= 0; i--) {

        let num = inputList[i] * xNum + jinwei;
        jinwei = parseInt(num / 10);
        let ttt = num % 10;
        outPutList.push(ttt);
    }
    if (jinwei != 0) {
        outPutList.push(jinwei);
    }

    let outstring = "";
    for (let i = outPutList.length - 1; i >= 0; i--) {
        outstring += outPutList[i].toString();
    }

    return outstring;
}
function power(num, power) {
    var content = "";
    var returnnum = "1";
    for (let i = 1; i < power; i++) {
        returnnum = calculation(returnnum, num);
    }
    return returnnum;
}



