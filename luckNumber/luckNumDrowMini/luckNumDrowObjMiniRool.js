


drowAllTable();
// var numObj=getLuckNumObj();
var drowColorClassName = "cell-red-select";
var ddd;
function drowAllTable() {
    var jianGe=getLuckEveryContObj();
    ddd=jianGe;
    var rowIndex=0;
    {
        let tr = document.createElement("tr");
        drowCell(tr,"");
        drowCell(tr,rowIndex);
        for (let j = 0; j < 34; j++) {
            drowCell(tr,j,"cell-red-select");
        }
        drowCell(tr,"");
        for (let j = 1; j < 17; j++) {
            drowCell(tr,j,"cell-blue-select");
        }
        numTable.appendChild(tr);
    }

    for (let i = 0; i < 100; i++) {
        let tr = document.createElement("tr");
        drowCell(tr,"");
        drowCell(tr,rowIndex);
        rowIndex++;
        for (let j = 0; j < 34; j++) {
            if(j==0){
                drowCell(tr,"","cell-red");
                continue;
            }
            if(jianGe.r[j][i]==undefined){
                drowCell(tr,"","cell-red");
                continue;
            }
            drowCell(tr,jianGe.r[j][i],"cell-red-select");
        }
        drowCell(tr,"");
        for (let j = 1; j < 17; j++) {
            if(jianGe.b[j]==undefined||jianGe.b[j][i]==undefined){
                drowCell(tr,"","cell-blue");
                continue;
            }
            drowCell(tr,jianGe.b[j][i],"cell-blue-select");
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
