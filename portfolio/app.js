// burger = document.querySelector('.burger');
// navbar = document.querySelector('.navbar');
// right = document.querySelector('.right');
// burger.addEventListener('click', () => {
//     // navList.classList.toggle('v-class-resp');
//     // rightNav.classList.toggle('v-class-resp');
//     navbar.classList.toggle('h-nav-resp');
//   });

// -------------------------navbar--------------
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the 'show' class
});

// ----------------- about me ------------------
let tabLinks = document.getElementsByClassName('skill')
let tabContent = document.getElementsByClassName('tab-content')
function opentab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabContent){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}




  
