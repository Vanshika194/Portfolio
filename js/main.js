/*=============== SHOW MENU ===============*/

const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('name-menu');

// Show mobile menu
if(navToggle){
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
})}

// Hide mobile menu
if(navClose){
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
})}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink=document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    if (header) {
        window.scrollY >= 50 
            ? header.classList.add('blur-header') 
            : header.classList.remove('blur-header');
    }
};

window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message')

const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_jco6rx9','template_zdpuidv','#contact-form','GTAE54X1d6Bigzg9D')
    .then(()=>{
        contactMessage.textContent='message sent succesfully '
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
    },()=>{
         contactMessage.textContent='message not sent (error) '
    })
}
contactForm.addEventListener('submit',sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
const offset = 58;

const scrollActive = () => {
    const scrollY = window.scrollY; // Modern alternative to pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - offset;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (sectionClass) sectionClass.classList.add('active-link');
        } else {
            if (sectionClass) sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',       // Animation starts from the top
    distance: '60px',    // Distance moved during the animation
    duration: 2500,      // Duration of the animation (in milliseconds)
    delay: 400,          // Initial delay before animation starts (in milliseconds)
    reset: true          // Animation resets when scrolling back into view (optional)
  });
  
  // Apply ScrollReveal to elements
  sr.reveal(`.home__data,.home__social,.contact__container,.footer__container`);
  sr.reveal(`.home__image`, { origin: 'bottom'}); 
  sr.reveal(`.about__data,.skills__data`,{origin:'left'});
  sr.reveal(`.about__image,.skills__content`,{origin:'right'});
  sr.reveal(`.projects__card`,{interval:100});