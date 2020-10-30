/* 
    File: /domenic_ruocco_hw5/js/script.js
    Assignment: HW5
    Domenic Ruocco, UML Comp Sci, druocco@cs.uml.edu
    Course: 91.61 GUI Programming I
    Copyright (c) 2020 by Domenic Ruocco. All rights reserved.
*/

function genTable(MinCol, MaxCol, MinRow, MaxRow, ErrorFlag){
    
    //Clear old table
    var tab = document.getElementById("MultTable");
    while(tab.hasChildNodes()){
        tab.removeChild(tab.firstChild);
    }

    //Clear old error logs
    var Logs = document.getElementById("ErrorLogs");
    while(Logs.hasChildNodes()){
        Logs.removeChild(Logs.firstChild);
    }

    console.log("-----");
    console.log("MinCol: " + MinCol);
    console.log("MaxCol: " + MaxCol);
    console.log("MinRow: " + MinRow);
    console.log("MaxRow: " + MaxRow);
    console.log("-----");

    //Error checking
    if(MinCol > MaxCol){
        var a = MinCol;
        MinCol = MaxCol;
        MaxCol = a;
        var p = document.createElement("p");
        var Error = document.createTextNode("Error: Minimum Column Value bigger than Maximum");
        p.appendChild(Error);
        Logs.appendChild(p);
    }
    if(MinRow > MaxRow){
        var a = MinRow;
        MinRow = MaxRow;
        MaxRow = a;
        var p = document.createElement("p");
        var Error = document.createTextNode("Error: Minimum Row Value bigger than Maximum");
        p.appendChild(Error);
        Logs.appendChild(p);
    }
    if(MinCol%1!==0 || MaxCol%1!==0 || MinRow%1!==0 || MaxRow%1!==0){
        MinCol = Math.round(MinCol);
        MaxCol = Math.round(MaxCol);
        MinRow = Math.round(MinRow);
        MaxRow = Math.round(MaxRow);
        var p = document.createElement("p");
        var Error = document.createTextNode("Error: Numbers have been rounded");
        p.appendChild(Error);
        Logs.appendChild(p);
    }
    if(ErrorFlag){
        var p = document.createElement("p");
        var Error = document.createTextNode("Error: number 'e' technically means 0*10^0, making it 0");
        p.appendChild(Error);
        Logs.appendChild(p);
    }

    //Create Rows Header
    var rowHeader = document.createElement("tr");
    rowHeader.appendChild(document.createElement("td"));
    rowHeader.firstChild.id = "test";
    for(var i = MinCol; i <= MaxCol; i++){
        var HeaderBox = document.createElement("td");
        HeaderBox.id = "Header";
        var HeaderNum = document.createTextNode(i);
        HeaderBox.appendChild(HeaderNum);
        rowHeader.appendChild(HeaderBox);
    }
    tab.appendChild(rowHeader);

    //Make Table
    for(var i = MinRow ; i <= MaxRow; i++ ){
        var row = document.createElement("tr");
        var HeaderBox = document.createElement("td");
        HeaderBox.id = "Header";
        var HeaderNum = document.createTextNode(i);
        HeaderBox.appendChild(HeaderNum);
        row.appendChild(HeaderBox);
        //Make Columns
        for( var j = MinCol; j <= MaxCol; j++ ){
            var box = document.createElement("td");
            var num = document.createTextNode(i*j);
            box.appendChild(num);
            row.appendChild(box);
        }
        tab.appendChild(row);
    }
}

genTable(1,10,1,10);

var input = document.getElementById("Submit");

input.addEventListener("click", function(event){

    var MinCol = document.getElementById("MinCol").value;
    var MaxCol = document.getElementById("MaxCol").value;
    var MinRow = document.getElementById("MinRow").value;
    var MaxRow = document.getElementById("MaxRow").value;

    var ErrorFlag = false;
    if(Number(MinCol) == 0 && MinCol != '0' || Number(MaxCol) == 0 && MaxCol != '0' || Number(MinRow) == 0 && MinRow != '0' || Number(MaxRow) == 0 && MaxRow != '0'){
        ErrorFlag = true;
    }

    genTable(Number(MinCol), Number(MaxCol), Number(MinRow), Number(MaxRow), ErrorFlag);

});
