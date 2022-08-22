/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const ula=document.querySelector('#navbar__list');
const sectionat=Array.from(document.querySelectorAll('section'));


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//built the nav using forEach()
sectionat.forEach((section)=>{
 Name=section.getAttribute('data-nav');
 Link=section.getAttribute('id');
 const elem=document.createElement('li');
 elem.innerHTML=`<a class='menu__link' href=#${Link}>${Name}</a>`;
 ula.appendChild(elem);
});

// Add class 'active' to section when near top of viewport
//checking if class is in view and if it's in view setting it as 'active'
function inViewPort(element){
let Port=element.getBoundingClientRect();
return (Port.top>=0 && Port.top<300);
};
function activeClass(){
sectionat.forEach((section)=>{
    if(inViewPort(section)){
    if(!section.classList.contains('your-active-class')){
        section.classList.add('your-active-class');  
    }  
}
    else{
        section.classList.remove('your-active-class');
        
    }
})
};
document.addEventListener('scroll',activeClass);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
//checking if the section active is equal to the link for setting the link as active
window.onscroll = function () {
    for (let section of sectionat) {
      const sectionPos = section.getBoundingClientRect();
      let sectionTitle = section.getAttribute("data-nav");
  
      const links = document.querySelectorAll("li");
      if (sectionPos.top >= 0 && sectionPos.top < 300) {
        for (let link of links) {
          link.classList.remove("your-active-link");
          if (link.textContent === sectionTitle) {
            link.classList.add("your-active-link");
          }
        }
      }
    }
  };


