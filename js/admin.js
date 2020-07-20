let users = [
    [1, 2],
    ["Vásárhelyi Zoltán", "Vásárhelyi Miklós"],
    ["z.vasarhelyi89@gmail.com", "miklosvasy@gmail.com"],
    ["1158 Budapest, Drégelyvár utca 35.", "1131 Budapest, Futár utca 7."]
]

function userTable() {
    let userId = document.querySelector('#user-id');
    for (let i = 0; i < users.length; i++)
        userId.innerHTML = users[i];
}
window.onload = userTable();