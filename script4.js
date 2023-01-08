/***********************Exercice 4 : Ma Liste De Livres************************/

//Dans le corps de la page HTML, créez une div vide :
let div = document.createElement('div');
let body = document.querySelector('body')
body.appendChild(div)

div.classList.add("listBooks")
//In the js file, create an array called.This is an array of objects.Each 
//object is a book that has 4 keys (ie. 4 properties) : allBooks

let table = document.createElement('table');

body.appendChild(table)
//document.querySelector('body').appendChild(table)

//creation de la premiere lign du tableau
let row_1 = document.createElement('tr');
let th_1 = document.createElement('th');
th_1.innerHTML = "Titre";
let th_2 = document.createElement('th');
th_2.innerHTML = "Auteur";
let th_3 = document.createElement('th');
th_3.innerHTML = "image";
let th_4 = document.createElement('th');
th_4.innerHTML = "alreadyRead";
row_1.appendChild(th_1);
row_1.appendChild(th_2);
row_1.appendChild(th_3);
row_1.appendChild(th_4);
table.appendChild(row_1)

//creation de la deuxieme ligne du tableau
let row_2 = document.createElement('tr');
let td1 = document.createElement('td');
td1.innerHTML = "soleil des independances";
let td2 = document.createElement('td');
td2.innerHTML = "Amadou Kourouma";
let td3 = document.createElement('td');
td3.innerHTML = "https://www.babelio.com/";
td4 = document.createElement('td');
td4.innerHTML = "true";
row_2.appendChild(td1);
row_2.appendChild(td2);
row_2.appendChild(td3);
row_2.appendChild(td4);
table.appendChild(row_2)

let row_3 = document.createElement('tr');
let line1 = document.createElement('td');
line1.innerHTML = "Sous l'orage";
let line2 = document.createElement('td');
line2.innerHTML = "Seydou Badian";
let line3 = document.createElement('td');
line3.innerHTML = "http://aide-afrique.com";
let line4 = document.createElement('td');
line4.innerHTML = "false";
row_3.appendChild(line1);
row_3.appendChild(line2);
row_3.appendChild(line3);
row_3.appendChild(line4);
table.appendChild(row_3)
table.style.border = "1px solid black"
//bordure des entetes du tableau
th_1.style.border = "1px solid black"
th_2.style.border = "1px solid black"
th_3.style.border = "1px solid black"
th_4.style.border = "1px solid black"
//bordure de la premiere ligne du tableau
td1.style.border = "1px solid black"
td2.style.border = "1px solid black"
td3.style.border = "1px solid black"
td4.style.border = "1px solid black"
//bordure de la deuxieme ligne du tableau
line1.style.border = "1px solid black"
line2.style.border = "1px solid black"
line3.style.border = "1px solid black"
line4.style.border = "1px solid black"
//À l’aide du DOM, effectuez le rendu des livres dans un tableau HTML
let row1 = document.querySelectorAll('td')
   
console.log(row1[0].textContent + " écrit par " + row1[1].textContent);
console.log(row1[4].textContent + " écrit par " + row1[5].textContent);

//Si le livre est déjà lu. Définissez la couleur des détails du livre sur rouge
if(row1[3].textContent == "true"){
    let  alreadyRead1 = row1[3]
    console.log(alreadyRead1);
    alreadyRead1.style.color = "red"
}
else{
    alreadyRead1 = row1[3]
    console.log(alreadyRead1);
    alreadyRead1.style.color = "black"

}

    if( row1[7].textContent == "true"){
        let  alreadyRead2 = row1[7]
        console.log(alreadyRead2);
        alreadyRead2.style.color = "red"

    }
    else{
       
         alreadyRead2 = row1[7]
        console.log(alreadyRead2);
        alreadyRead2.style.color = "black"
    
    }
    

   











