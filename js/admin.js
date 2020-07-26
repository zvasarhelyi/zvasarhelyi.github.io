let users = [
    { surname: "Vásárhelyi", firstname: "Zoltán", email: "z.vasarhelyi89@gmail.com", address: "1158 Budapest, Drégelyvár utca 35." },
    { surname: "Vásárhelyi", firstname: "Miklós", email: "miklosvasy@gmail.com", address: "1131 Budapest, Futár utca 7." },
    { surname: "Hegyaljai", nafirstnameme: "Virág", email: "hegyaljaivirag.66@gmail.com", address: "1158 Budapest, Drégelyvár utca 35." }
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-pencil-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
};













// function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//         let th = document.createElement("th");
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//     }
// }

// function generateTable(table, data) {
//     for (let element of data) {
//         let row = table.insertRow();
//         for (key in element) {
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }

// let table = document.querySelector("table");
// let data = Object.keys(users[0]);
// generateTable(table, users);
// generateTableHead(table, data);
