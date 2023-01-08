//Add a “light blue” background color and some padding to the .<div>
let div = document.querySelector('div');
//div.setAttribute('style', 'background-color: lightblue;  padding:50px')
div.style.backgroundColor = "lightblue";
div.style.padding = " 50px";
//Do not display the that contains the text node “John”.<li>
let li = document.querySelectorAll('li');
//li[0].setAttribute('style', 'display: none');
li[0].style.display = "none";
//Add a border to the that contains the text node “Pete”.<li>
//li[1].setAttribute('style', 'border:2px solid black');
li[1].style.border = "2px solid black";
//Change the font size of the whole body.
let body = document.querySelector('body');
body.setAttribute('style', 'font-size: 25px');
//
if(div.style.backgroundColor == "lightblue" ){
    alert("Hello " + li[0].innerHTML + " and "+ li[1].innerHTML);
}

