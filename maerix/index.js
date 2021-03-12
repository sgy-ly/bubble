function drowMaerix(length) {
    var maerixArr = getMaerix(length);
    var numTable = document.getElementById("rootTable");
    console.log(numTable);
    for (let i = 0; i < length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < length; j++) {
            let td = document.createElement("td");
            td.innerHTML = maerixArr[i][j];
            tr.appendChild(td);
        }
        numTable.appendChild(tr);
    }
}
function btnSubmit(){
    console.log("submit");
    var leng=document.getElementById("input_leng").value;
    document.getElementById("rootTable").innerHTML="";
    drowMaerix(leng);
}
drowMaerix(12);
function getMaerix(length) {
    let x = 0;
    let y1, y2, y3, y4 = 0;
    let num = 1;
    let maerix = [];
    for (let i = 0; i < length; i++) {
        maerix[i] = []
    }
    let count = length;
    let mocount = length;
    console.log(length);
    console.log((length + 1) / 2);
    for (x = 0; x < (length + 1) / 2; x++) {
        console.log(x);
        for (y1 = y4; y1 < count; y1++) {
            maerix[y4][y1] = num;
            num++;
        }
        for (y2 = y4 + 1; y2 < count; y2++) {
            maerix[y2][y1 - 1] = num;
            num++;
        }
        for (y3 = y2 - 1; y3 > mocount - y2; y3--) {
            maerix[y2 - 1][y3 - 1] = num;
            num++;
        }
        count--;
        for (y4 = y2 - 1; y4 > mocount - y2 + 1; y4--) {
            maerix[y4 - 1][y3] = num;
            num++;
        }
    }
    return maerix;
}
