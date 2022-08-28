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
let sections1= document.querySelectorAll('section');
let sectionslist1= document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//built the nav using forEach()
sections1.forEach(section => {
    let element =document.createElement('li');
    let anchor=document.createElement('a');
    anchor.classList.add('menu__link')
    anchorlink=section.getAttribute('id');
    anchor.href="#" + anchorlink;
    let name=section.getAttribute('data-nav');
    anchor.textContent=name;
    element.appendChild(anchor);
    sectionslist1.appendChild(element);
});
// Add class 'active' to section when near top of viewport
//checking if class is in view and if it's in view setting it as 'active'
function checker(){
    sections1.forEach(section => {
        let area = section.getBoundingClientRect();
        if(area.top >=0&& area.top<300){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }
        else {
            section.classList.remove('your-active-class');
        }
    })
}
document.addEventListener('scroll', checker);
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
    for (let section of sections1) {
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
