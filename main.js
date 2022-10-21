//Selectors

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function(){
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', window.scrollY>0); 
})

hamburgerMenu.addEventListener('click',function() {
    header.classList.toggle('menu-open');
    
})

function sendEmail(){
    Email.send({
         Host : "smtp.gmail.com",
         Username : "liralgazi@gmail.com",
         Password : "207883661La",
         To : "liralgazi@gmail.com",
         From : document.getElementById("email").value,
         Subject : document.getElementById("subject").value,
         Body : "Name :" 
          }).then(
            message => alert(message)
            );

}


