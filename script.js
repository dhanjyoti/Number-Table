let generateButton = document.getElementById("generateTableBtn");
let output = document.getElementById("output");
let number = document.getElementById("number");
generateButton.addEventListener("click", ()=>{
    output.innerHTML = " ";
    let table = document.createElement("table");
    let tHead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    let tableHeaderM = document.createElement("th");
    tableHeaderM.innerText = "Multiplier";
    let tableHeaderR = document.createElement("th");
    tableHeaderR.innerText = "Reault";
    tableRow.appendChild(tableHeaderM);
    tableRow.appendChild(tableHeaderR);
    tHead.appendChild(tableRow);
    table.appendChild(tHead);

    let tBody = document.createElement("tbody");
    for(let i=1; i<=10; i++){
        let mRow = document.createElement("tr");
        let mM = document.createElement("th");
        mM.innerText = i;
        let mR = document.createElement("td");
        mR.innerText = i * number.value;
        mRow.appendChild(mM);
        mRow.appendChild(mR);

        tBody.appendChild(mRow);
    }
    table.appendChild(tBody);
    output.appendChild(table);
})