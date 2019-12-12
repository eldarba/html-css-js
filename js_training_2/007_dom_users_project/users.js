let form = document.getElementById("addForm");
let userList = document.getElementById("users");

// form submit event
form.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();
    // get the input vlaue
    let newUser = document.getElementById('newUser').value;
    //create a new list item element
    let li = document.createElement('li');
    // add text node with the input value
    li.appendChild(document.createTextNode(newUser));
    // create a delete button element
    let btDel = document.createElement('button');
    btDel.className = "btDelete";
    btDel.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(btDel);
    // append li to list
    userList.appendChild(li);
}
// delete event
userList.addEventListener('click', removeUser);

function removeUser(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('btDelete')) { // see if it is a button
        if (confirm('Are you sure?')) {
            console.log("You chose to delete");
            let li = e.target.parentElement; // get tje list item where the button is
            userList.removeChild(li);

        }
    }

}

// filter
let filter = document.getElementById("filter");
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    let txtInFilter = e.target.value.toLowerCase();
    // get all the list items (users)
    let listItems = userList.getElementsByTagName('li');
    // iterate the li collection
    for (const item of listItems) {
        let userName = item.firstChild.textContent;
        // console.log(userName); // will print all users on each keyup
        if(userName.toLowerCase().indexOf(txtInFilter) != -1){
           item.style.display = "block"; // show it
        }else{
            item.style.display = "none"; // hide it
        }
    }
    
}