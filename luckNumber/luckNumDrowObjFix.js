


drowAllTable();
var numObj=getLuckNumObj();
function drowAllTable(){
    let mark="-";
    var numTable = document.getElementById("numTable");
    var numObj=getLuckNumObj();
    let numid=21026;
    //2669
    let maxnum=1;
    let rowIndex=1;
    var mrkObj={red:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],blue:0}
    var returnMarkObj=[];
    

    for (const key in numObj) {
        if(maxnum<2400){
            maxnum++;
            continue;
        }
        var rowMark={red:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],blue:[]};
        let tr = document.createElement("tr");
        drowCell(tr,rowIndex);
        rowIndex++;
        drowCell(tr,key);
        let redNum=0;
        var rowObj=numObj[key];
        for (let j = 0; j < 34; j++) {
            let value=j;
            if(redNum!=7 && rowObj.r[redNum]==j){
                value = rowObj.r[redNum];
                redNum++;
                rowMark.red[j]=mrkObj.red[j];
                mrkObj.red[j]=0;
                drowCell(tr,value,"cell-red-select");
            }else{
                mrkObj.red[j]++;
                tt=mrkObj.red[j];
                if(mrkObj.red[j]<10){
                    tt="0"+(mrkObj.red[j]).toString();
                }
                if(mrkObj.red[j]>16){
                    drowCell(tr,tt,"cell-red-tick-max");
                }
                else{
                    drowCell(tr,tt,"cell-red-tick"+mrkObj.red[j]);
                }
                
   
            }
           
        }
        returnMarkObj.push(rowMark);
        for (let j = 0; j < 17; j++) {
            let value="";
            if(j<10){
                value+="0";
            }
            value+=j;
            if(rowObj.b==j){
                value=rowObj.b;
                drowCell(tr,value,"cell-blue-select");
                continue;
            }
            drowCell(tr,value,"cell-blue");
        }
        numTable.appendChild(tr);
    }
    for (let i = 0; i < 20; i++) {
        let tr = document.createElement("tr");
        let cellid=0;
        drowCell(tr,rowIndex);
        drowCell(tr,numid);
        rowIndex++;
        numid++;
        for (let j = 2; j < 53; j++) {
            let value="";
            let className="";
            if(j==36){
                cellid=0;
            }
            if(j>=2&&j<36){
                if(j<10){
                    value+="0";
                }
                value+=cellid;
                className="cell-red";
                cellid++;
            }else if( j>=36){
                className="cell-blue";
                if(j<46){
                    value+="0";
                }
                value+=cellid;
                cellid++;
            }
            drowCell(tr,value,className);
        }
        numTable.appendChild(tr);
    }
  
}
let buun;
function drowCell(tr,value,classname){
    let td= document.createElement("td");
    if(classname){
        td.className =classname; 
    }
    td.innerHTML =value;
    td.onclick=cellClick;
    td.onmouseover=cellmouseover;
    td.onmouseleave=cellmousleave;
    tr.appendChild(td);
}
function cellClick(){
    buun=this;
    if(this.cellIndex>2&&this.cellIndex<36){
        this.className=this.className=="cell-red-select"?"cell-red":"cell-red-select";
        overClass=null;
    }else{
        this.className=this.className=="cell-blue-select"?"cell-blue":"cell-blue-select";
        overClass=null;
    }
}
var overClass;
function cellmouseover(){
    overClass= this.className;
    if(this.cellIndex>2&&this.cellIndex<36){
        this.className="cell-red-over";
    }else{
        this.className="cell-blue-over";
    }
}
function cellmousleave(){
    if(overClass==null){
        return;
    }
    this.className=overClass;
}

