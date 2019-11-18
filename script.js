                        //Fonction premiere et bis

let footer1 = document.querySelector("footer");
let count = 0;

footer1.addEventListener("click", function() {
  console.log(`Yeaaaah, ta cliquer genre ${count} fois`);
  count += 1
});

                        //Fonction secondaire

function lapyro() {
  let element = document.getElementsByClassName("navbar-toggle");
  element[0].classList.toggle("collapse");
}

function flambino() {
let navbarHeader = document.getElementById("navbarHeader");

let navbarToggle = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button > span")

navbarToggle.addEventListener("click", function() {
navbarHeader.classList.toggle("collapse");
});
}

flambino();
// let navbar1 = document.querySelector("navbarHeader");

// function myFunction() {
//   var element = document.getElementsByClassName("navbar-toggler");
//   element[0].classList.toggle("collapse");
// }

// function navbarHeader() {
//   var navbarHeader = document.getElementById('navbarHeader');
//   return navbarHeader
// }

// function navbarToggler() {
//   var navbarToggler = document.getElementsByClassName('navbar-toggler');
//   return navbarToggler[0]
// }

// navbarToggler().addEventListener("click", function() {
// navbarHeader().classList.toggle("collapse");
// });

                        //Fonction 3

let edit1 = document.getElementsByClassName("btn-outline-secondary");

edit1[0].addEventListener("click", function() {
  document.getElementsByClassName("card-text")[0].style.color = "red";
});

                        //Fonction 4

let edit2 = document.getElementsByClassName("btn-outline-secondary")
let secondCard = document.getElementsByClassName('card-text')[1]

function colorGreen(){
  edit2[1].addEventListener("click", function() {
    secondCard.style.color === "green" ? secondCard.style.color = "" : secondCard.style.color = "green";
  })
}
colorGreen()
                        //Fonction 5

let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div')
let cdn  = document.querySelector('head > link')

function nucelarStyle() {
  nav.addEventListener("dblclick", function(){
    document.querySelector("link").disabled == true ? document.querySelector("link").disabled = false : document.querySelector("link").disabled = true;
    });

}
nucelarStyle()