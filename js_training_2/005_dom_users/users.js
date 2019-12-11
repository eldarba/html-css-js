// console.dir(document); // examin an object - can see all properties
// console.log("domain", document.domain);
// console.log("URL", document.URL);
// console.log("title", document.title);
// console.log("doctype", document.doctype);
// console.log("head", document.head);
// console.log("body", document.body);

// console.log("=== all ===");
// console.log(document.all); // collection of all document elements
// console.log("=== 14 ===");
// console.log(document.all[14]);

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// document.title = "wow";

// GET ELEMENT BY ID
let headerTitle = document.getElementById('head1');
// console.log(headerTitle);
// console.log(headerTitle.innerText); // just the displayed text (according to style)
// console.log(headerTitle.textContent); // text regardless of style
// console.log(headerTitle.innerHTML); // the html inside
// 
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodby";
// 
// headerTitle.innerHTML = '<h3>Hello<h3/>';
// 
headerTitle.style.borderBottom = 'solid 3px black'

// GET ELEMENTS BY CLASS NAME

// let listItems = document.getElementsByClassName('list-item');
// console.log(listItems);
// console.log(listItems[1]);
// listItems[1].textContent = "Hello there"
// listItems[1].style.fontWeight = 'bold';
// listItems[1].style.backgroundColor = 'yellow';

// console.log("==========");
// for (const item of listItems) {
//     item.style.backgroundColor = "lightGray";
// }

// GET ELEMENTS BY TAG NAME
let listItems2 = document.getElementsByTagName('li');
// console.log(listItems2);
// console.log(listItems2[1]);
// listItems2[3].textContent = "Hello there"
// listItems2[3].style.fontWeight = 'bold';
// listItems2[3].style.backgroundColor = 'yellow';

// console.log("==========");
// for (const item of listItems2) {
//     item.style.backgroundColor = "lightBlue";
// }

// GET ELEMENTS BY NAME
// document.getElementsByName('x'); // get all elements where the name attr = x



// // QUERY SELECTOR - use any css selector - gives first instance
let element = document.querySelector('li'); // tag name
// console.log(element);
// element = document.querySelector('#header1') // id
// console.log(element);
// element.style.borderBottom = 'solid 5px red';

// element = document.querySelector('input'); // tag name
// element.value = 'hello input';
// // tag + property value - like we do in css
// element = document.querySelector('input[type="submit"]');
// element.value = 'SEND';

// element = document.querySelector('.list-item'); // class
// element.style.color = 'red';
// // last child in class
// element = document.querySelector('.list-item:last-child'); // class
// element.style.color = 'green';
// // nth child in class
// element = document.querySelector('.list-item:nth-child(2)'); // class
// element.style.color = 'blue';

// // QUERY SELECTOR ALL - use any css selector - gives collection of all instances
// let elements = document.querySelectorAll('h1, h2');
// console.log(elements);

// for (const e of elements) {
//     e.textContent = "XXXXXXX";
// }

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (const e of odd) {
//     e.style.backgroundColor = 'lightBlue';
// }
// for (const e of even) {
//     e.style.backgroundColor = 'coral';
// }

// TRAVERSING THE DOM //
let usersList = document.querySelector('#items');
// parentNode / (parentElement - mostly the same)
// console.log(usersList);
// console.log(usersList.parentNode);
// // console.log(usersList.parentElement); // ??? mostly the same
// usersList.parentNode.style.backgroundColor = "gray";
// console.log(usersList.parentNode.parentNode); // the body

// childNodes
// console.log(usersList.childNodes); // includes white spaces
// console.log(usersList.children); // without the white space - recomaneded
// console.log(usersList.children[1]);
// usersList.children[1].style.fontStyle = 'italic';

// //firstChild
// console.log(usersList.firstChild); // text node
// // firstElementChild
// console.log(usersList.firstElementChild); // the first user - recomanded
// usersList.firstElementChild.textContent = "Bye user 1";

// //lastChild
// console.log(usersList.lastChild); // last text node
// // lastElementChild
// console.log(usersList.lastElementChild); // the first user - recomanded
// usersList.lastElementChild.textContent = "Bye last user";

// // nextSibling
// console.log(usersList.nextSibling); // text node
// // nextElementSibling
// console.log(usersList.nextElementSibling);

// // previousSibling
// console.log(usersList.previousSibling); // text node
// // previousElementSibling
// console.log(usersList.previousElementSibling);
// usersList.previousElementSibling.style.color = 'green';

// // CREATING ELEMENTS AND INSERT THEM
// // create a div
// let newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'myDiv';
// // set an attribute
// newDiv.setAttribute('title', 'Hello Div'); // tooltip
// // create a text node and append to our div
// // newDiv.innerHTML = "aaa"; // ???
// let newDivText = document.createTextNode('This is the Text of the new div');
// newDiv.appendChild(newDivText);

// // insert to our DOM
let header = document.querySelector('#header1'); // the header
// let h1InHeader = document.querySelector('#header1 h1'); // in the header the h1 element
// header.insertBefore(newDiv, h1InHeader); // insert the div in the header before the h1 element
// // now we can treat it like any other element in the DOM
// newDiv.style.fontSize = '25px';
// console.log(newDiv);

// ============= EVENTS ============================
// ============= EVENTS ============================

// how to add event listener to button  fro js
// add 2  buttons to the html to work on

// option 1 - using unonymous function ====
let bt1 = document.getElementById('bt1');
bt1.addEventListener('click', function(e) {
    console.log("button 1 clicked");
    console.log(e); // the event object
    // when the button is clicked, this function is invoked with the event param passed to it.
});
//=========================================

// option 2 - using named function ========
let bt2 = document.getElementById('bt2');
bt2.addEventListener('click', f1);
// when the button is clicked, function f1 is invoked with the event param passed to it.

/**
 * this method runs when button 2 is clicked.
 * @param {Event} e the click event parameter.
 * @returns {number} the value 5.
 */
function f1(e) {
    console.log('button 2 clicked');

    // // log some data
    // console.log(e); // the event object
    // console.log(e.target); // the object to which event is dispatched (its target).
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // // change the DOM
    // // add a div before button 1
    // let outputDiv = document.createElement('div');
    // outputDiv.id = 'output';
    // let container = document.querySelector('div.container');
    // let element = document.getElementById('bt1');
    // // insert 'outputDiv' to 'container' before 'element'
    // container.insertBefore(outputDiv, element);
    // outputDiv.innerHTML = '<div>' + e.target.id + '</div>';

    // event info
    console.log("event type:", e.type);
    console.log("x relative to window:", e.clientX);
    console.log("y relative to window:", e.clientY);
    console.log("x relative to button:", e.offsetX);
    console.log("y relative to button:", e.offsetY);
    // event info alt-ctrl-shift
    console.log("alt held down:", e.altKey);
    console.log("ctl held down:", e.ctrlKey);
    console.log("shift held down:", e.shiftKey);
    console.log("================");


    return 5;
}
//=========================================

// add button 3 to the html
let bt3 = document.getElementById('bt3');

bt3.addEventListener('click', f2);
// bt3.addEventListener('dblclick', f2);
// bt3.addEventListener('mousedown', f2);
// bt3.addEventListener('mouseup', f2);

function f2(e) {
    console.log('EVENT TYPE:', e.type, ':' + e.target.tagName);


}

// add a light gray div with id="box" bellow the buttons in the html
let box = document.getElementById('box');
box.addEventListener('mouseenter', f2); // fires when entering the registered element area from outside
box.addEventListener('mouseleave', f2); // fires when leaving the registered element area to the outside

box.addEventListener('mouseover', f2); // fires when going over the registered element or when going over it's children
box.addEventListener('mouseout', f2); // fires when going out of the registered element or when going out of it's children even if still in the ara of the registered