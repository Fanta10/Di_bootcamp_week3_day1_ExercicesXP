//Exercise 3 : Change The Navbar
//In the , change the value of the id attribute from navBar to socialNetworkNavigation, using the method.<div>setAttribute
let div = document.querySelector('div');
div.setAttribute('id', 'socialNetworkNavigation');
//First, create a new tag (use the method).<li>createElement
let newLi = document.createElement('li');

//Create a new text node with “Logout” as its specified text.
 newTextNode = document.createTextNode('Logout');
 
 //Finally, append this updated list node to the unordered list (), using the method.<ul>appendChild
 
 newLi.appendChild(newTextNode);
document.body.appendChild(newLi);

//Finally, append this updated list node to the unordered list (), using the method.<ul>appendChild
let li = document.querySelector('li');
li.appendChild(newLi);

//Use the and the properties to retrieve the first and last
// elements from their parent element (). Display the text of each link. (Hint: 
//use the property).firstElementChildlastElementChild<li><ul
let first = li.firstElementChild;

console.log(first);

let last = li.lastElementChild;

console.log(last);

//afficher le texte de chaque lien
let a = document.querySelectorAll('a');
for(let i in a){
    console.log(a[i].textContent)
}




