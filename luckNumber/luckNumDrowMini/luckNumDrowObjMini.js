


drowAllTable();
// var numObj=getLuckNumObj();
var drowColorClassName = "cell-red-select";
var ddd;
function drowAllTable() {
    var jianGe={};
    for (let i = 1; i < 34; i++) {
        jianGe[i]=[];
    }
    ddd=jianGe;
    var numTable = document.getElementById("numTable");
    let numid;
    var numObj = getLuckNumObj();
    //2669
    let maxnum = 1;
    let rowIndex = 1;
    var mrkObj = { red: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], blue: 0 }
    var returnMarkObj = [];
    var searchArr = [];
    var searchArrObj = {};
    var searchObj = initSerchObj();
    var searchlength = 0;
    function initSerchObj() {
        var ttt = {}
        for (let i = 1; i < 34; i++) {
            ttt[i] = 0;
        }
        return ttt;
    }
    for (const key in numObj) {
        searchlength++;
        for (let i = 0; i < 6; i++) {
            if (!searchArr.includes(numObj[key].r[i])) {
                searchArr.push(numObj[key].r[i]);

            }
            if (searchArr.includes(numObj[key].r[i])) {
                searchObj[parseInt(numObj[key].r[i])]++;
            }
            if (searchArr.length == 33) {
                // return;
                searchArr = [];
                searchObj.endNo = key;
                searchObj.leng = searchlength;
                searchArrObj[key] = searchObj;
                searchObj = initSerchObj();
                searchlength = 0;
            }
        }
    }
    for (const key in numObj) {
        numid = key;
        var rowMark = { red: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], blue: [] };
        let tr = document.createElement("tr");
        drowCell(tr, rowIndex);
        rowIndex++;
        drowCell(tr, key);
        let redNum = 0;
        var rowObj = numObj[key];
        for (let j = 0; j < 34; j++) {
            let value = j;
            if (redNum != 7 && rowObj.r[redNum] == j) {
                value = rowObj.r[redNum];
                redNum++;
                rowMark.red[j] = mrkObj.red[j];
                let jianObj={};
                jianObj.end=key;
                jianObj.arr=mrkObj.red[j];
                jianGe[j].push(jianObj);
    
                mrkObj.red[j] = 0;
                drowCell(tr, value, "cell-red-select");
            } else {
                mrkObj.red[j]++;
                tt = mrkObj.red[j];
                if (mrkObj.red[j] < 10) {
                    tt = "0" + (mrkObj.red[j]).toString();
                }
                if (mrkObj.red[j] > 16) {
                    drowCell(tr, tt, "cell-red-tick-max");
                }
                else {
                    drowCell(tr, tt, "cell-red-tick" + mrkObj.red[j]);
                }


            }

        }

        returnMarkObj.push(rowMark);
        for (let j = 0; j < 17; j++) {
            let value = "";
            if (j < 10) {
                value += "0";
            }
            value += j;
            if (rowObj.b == j) {
                value = rowObj.b;
                drowCell(tr, value, "cell-blue-select");
                continue;
            }
            drowCell(tr, value, "cell-blue");
        }
        numTable.appendChild(tr);

        //***********
        if (searchArrObj[key] != undefined) {
            let tr = document.createElement("tr");
            drowCell(tr, "", "miniLine");
            drowCell(tr, searchArrObj[key].leng, "miniLine");
            drowCell(tr, "", "miniLine");
            for (let i = 1; i < 34; i++) {
                drowCell(tr, searchArrObj[key][i], "miniLine");

            }
           
            numTable.appendChild(tr);
        }
        //-----------
    }
    numid++;
    for (let i = 0; i < 20; i++) {
        let tr = document.createElement("tr");
        let cellid = 0;
        drowCell(tr, rowIndex);
        drowCell(tr, numid);
        rowIndex++;
        numid++;
        for (let j = 2; j < 53; j++) {
            let value = "";
            let className = "";
            if (j == 36) {
                cellid = 0;
            }
            if (j >= 2 && j < 36) {
                if (j < 12) {
                    value += "0";
                }
                value += cellid;
                className = "cell-red";
                cellid++;
            } else if (j >= 36) {
                className = "cell-blue";
                if (j < 46) {
                    value += "0";
                }
                value += cellid;
                cellid++;
            }
            drowCell(tr, value, className);
        }
        numTable.appendChild(tr);
    }

}
function drowCell(tr, value, classname) {
    let td = document.createElement("td");
    if (classname) {
        td.className = classname;
    }
    td.innerHTML = value;
    td.onclick = cellClick;
    td.onmouseover = cellmouseover;
    td.onmouseleave = cellmousleave;
    tr.appendChild(td);
}
function cellClick() {
    if (this.cellIndex > 2 && this.cellIndex < 36) {
        if (!overClass.hoverStyle) {
            console.log(this.className);
            this.className = this.className == "cell-red" ? drowColorClassName : "cell-red";
            return;
        }
        if (overClass.oldClassName == "cell-red") {
            this.className = overClass.className;
        } else {
            this.className = "cell-red";
        }
        overClass.hoverStyle = false;
    } else {
        this.className = this.className == "cell-blue-select" ? "cell-blue" : "cell-blue-select";
        overClass.hoverStyle = false;
    }
}
var overClass = {
    oldClassName: "",
    className: "",
    hoverStyle: true
};
function cellmouseover() {
    overClass.oldClassName = this.className;
    overClass.className = drowColorClassName;
    overClass.hoverStyle = true;
    if (!(this.className == "cell-red" || this.className == "cell-blue")) {
        return;
    }
    if (this.cellIndex > 2 && this.cellIndex < 36) {
        this.className = drowColorClassName;
    } else {
        this.className = "cell-blue-over";
    }
}
function cellmousleave() {
    if (overClass.hoverStyle != true) {
        return;
    }
    this.className = overClass.oldClassName;
    overClass.hoverStyle = false;
}
function inputClick(className) {
    drowColorClassName = className;
}
