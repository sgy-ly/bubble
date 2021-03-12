

var numTable = document.getElementById("numTable");
drowAllTable();

function drowAllTable(){
    var numArr=getLuckNumArry();;
    let mark=" ";
    for (let i =0; i <numArr.length; i++) {
        let tr = document.createElement("tr");
        let redNum=1;
        for (let j = 0; j < 34; j++) {
            let value=mark;
            let td= document.createElement("td");
            if(j==0){
                value=numArr[i][j]+"              |";
            }
            else if(redNum==7){

            }
            else if(numArr[i][redNum]==j){
                value = numArr[i][redNum];
                redNum++;
            }
            td.innerHTML =value;
            tr.appendChild(td);
        }
        let td= document.createElement("td");
        td.innerHTML ="|";
        tr.appendChild(td);
        for (let j = 0; j < 17; j++) {
            let value=mark;
            if(redNum==8){
                
            }
            else if(numArr[i][redNum]==j){
                value= numArr[i][redNum];
                redNum++;
            }
            let td= document.createElement("td");
            td.innerHTML = value;
            tr.appendChild(td);
        }
        numTable.appendChild(tr);
    }
    let id=21026;
    for (let i = 0; i < 20; i++) {
      
        let tr = document.createElement("tr");
        for (let j = 0; j < 52; j++) {
            let value=mark;
            if(j==0){
                value=id;
                id++;
            }
            let td= document.createElement("td");
            td.innerHTML = value;
            tr.appendChild(td);
        }
        numTable.appendChild(tr);
    }
  
}

