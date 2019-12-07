// console.dir(document); // examin an object - can see all properties
// console.log("domain", document.domain);
// console.log("URL", document.URL);
// console.log("title", document.title);
// console.log("doctype", document.doctype);
// console.log("head", document.head);
// console.log("body", document.body);

// console.log("=== all ===");
// console.log(document.all);
// console.log("=== 14 ===");
// console.log(document.all[14]);

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// document.title = "wow";

// GET ELEMENT BY ID
// let headerTitle = document.getElementById('head1');
// console.log(headerTitle);
// console.log(headerTitle.innerText); // just the displayed text (according to style)
// console.log(headerTitle.textContent); // text regardless of style
// console.log(headerTitle.innerHTML); // the html inside
// 
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodby";
// 
// headerTitle.innerHTML = '<h3>Hello</>';
// 
// headerTitle.style.borderBottom = 'solid 3px black'

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
// let listItems2 = document.getElementsByTagName('li');
// console.log(listItems2);
// console.log(listItems2[1]);
// listItems2[3].textContent = "Hello there"
// listItems2[3].style.fontWeight = 'bold';
// listItems2[3].style.backgroundColor = 'yellow';

// console.log("==========");
// for (const item of listItems2) {
//     item.style.backgroundColor = "lightBlue";
// }

// QUERY SELECTOR - use any css selector - gives first instance
let element = document.querySelector('li'); // tag name
console.log(element);
element = document.querySelector('#header1') // id
console.log(element);
element.style.borderBottom = 'solid 5px red';

element = document.querySelector('input'); // tag name
element.value = 'hello input';
// tag + property value - like we do in css
element = document.querySelector('input[type="submit"]');
element.value = 'SEND';

element = document.querySelector('.list-item'); // class
element.style.color = 'red';
// last child in class
element = document.querySelector('.list-item:last-child'); // class
element.style.color = 'green';
// nth child in class
element = document.querySelector('.list-item:nth-child(2)'); // class
element.style.color = 'blue';

// QUERY SELECTOR ALL - use any css selector - gives collection of all instances
let elements = document.querySelectorAll('h1, h2');
console.log(elements);

for (const e of elements) {
    e.textContent = "XXXXXXX";
}

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (const e of odd) {
    e.style.backgroundColor = 'lightBlue';
}
for (const e of even) {
    e.style.backgroundColor = 'coral';
}