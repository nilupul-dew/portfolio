/*toggle icon*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*scroll efect color fro nav bar*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            const activeLink = document.querySelector(`header nav a[href*='${id}']`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    /*sticky nav bar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY>100);

    /**remove toggle icon and navbar when clicked a navbar link*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*scroll reveal*/

ScrollReveal({
    //reset:true,
    distance: '100px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/**typed js */

const types = new Typed('.multiple-text', {
    strings:['Undergraduate','Software Engineer','Fullstack Developer', 'Frontend Developer', 'Mobile App Developer', 'UI/UX Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500,
    loop:true
});