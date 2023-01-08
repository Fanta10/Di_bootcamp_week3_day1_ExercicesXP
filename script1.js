/***************************** Exercice 1 : Utilisateurs***************** */
let div = document.querySelector('#container');
console.log(div);
//Changez le nom « Pete » en Richard
let changeName = document.getElementsByTagName('li');
console.log(changeName);
changeName[1].innerHTML = "Richard";

//Change each first name of the two to your name.<ul>'s
changeName[0].innerHTML = "Fanta";
changeName[2].innerHTML = "Fanta";

//Delete the that contains the text node “Sarah”.<li>
changeName[3].remove();
//Add a class called to both of the .student_list<ul>'s
let l = document.querySelectorAll('ul');
console.log(l);
for(let i of l){
    i.classList.add("student_list");

}
//Add the classes and to the first .universityattendance<ul>
l[0].classList.add("university", "attendance");




