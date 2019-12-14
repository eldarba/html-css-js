let cbEnabled = document.getElementById('cb-enabled')
let formAddUser = document.getElementById('form-add-user');
let listUsers = document.getElementById('list-users');
let usersFilter = document.getElementById('in-users-filter');

cbEnabled.addEventListener('change', formOnOff);
formAddUser.addEventListener('submit', addUser);
listUsers.addEventListener('click', removeUser);
usersFilter.addEventListener('input', filterUsers);

function filterUsers(e) {
    let q = usersFilter.value.toLowerCase();
    for (const li of listUsers.children) {
        let userName = li.firstChild.textContent.toLowerCase();
        if (userName.includes(q)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";

        }
    }
}

function removeUser(e) {
    let btDel = e.target;
    if (btDel.classList.contains("bt-del")) {
        let li = btDel.parentElement;
        let userName = li.firstChild.textContent;
        if (confirm('Sure u wana delete [' + userName + "] ?")) {
            listUsers.removeChild(li);
        }
    }
}

function addUser(e) {
    e.preventDefault();
    let userName = document.getElementById('in-user').value;
    let textNodeUser = document.createTextNode(userName);
    let textNodeX = document.createTextNode('x');
    let button = document.createElement('button');
    button.className = "bt-del";
    button.appendChild(textNodeX);
    let li = document.createElement('li');
    li.append(textNodeUser, button);
    listUsers.appendChild(li);
}

function formOnOff(e) {
    let fsAddUser = document.getElementById('fs-add-user');
    let fsUsersList = document.getElementById('fs-users-list');
    if (cbEnabled.checked) {
        fsAddUser.disabled = false;
        fsUsersList.disabled = false;
    } else {
        fsAddUser.disabled = true;
        fsUsersList.disabled = true;
    }
}