let users = [
    { id: 1, name: "Vásárhelyi Zoltán", email: "z.vasarhelyi89@gmail.com", address: "1158 Budapest, Drégelyvár utca 35." },
    { id: 2, name: "Vásárhelyi Miklós", email: "miklosvasy@gmail.com", address: "1131 Budapest, Futár utca 7." },
    { id: 3, name: "Hegyaljai Virág", email: "hegyaljaivirag.66@gmail.com", address: "1158 Budapest, Drégelyvár utca 35."}
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(users[0]);
generateTable(table, users);
generateTableHead(table, data);
