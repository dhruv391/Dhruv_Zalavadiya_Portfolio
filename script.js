'use strict';

// element toggle func
const elementToggleFunc = function(elem){
    elem.classList.toggle('active');
}

//sidebar variable
const sideBar = document.querySelector('[data-sidebar]');
const sideBarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar Toggle function for Mobile
sideBarBtn.addEventListener("click", function(){
    elementToggleFunc(sideBar);
});

// Testimonial Variable
const testimonialsItem = document.querySelectorAll('[data-testmonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// modal Variables
const modalImg = document.querySelector('[data-modal-img]'); 
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

// modal Toggle func
const testimonialsModelFunc = function() {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
} 

//  add click event to all modal items
for(let i=0 ; i<testimonialsItem.length; i++){
    testimonialsItem[i].addEventListener("click", function(){
        modalImg.src = this.querySelector("[data-testmonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testmonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML; 
        modalText.innerHTML = this.querySelector("[data-testmonials-text]").innerHTML;
        
        testimonialsModelFunc();

    }); 
}
modalCloseBtn.addEventListener("click", testimonialsModelFunc);
overlay.addEventListener("click", testimonialsModelFunc);

// custom select variable
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function(){
    elementToggleFunc(this);
});



// Add Event on all select items
for(let i=0; i<selectItems.length; i++){
    selectItems[i].addEventListener("click", function(){
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    })
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) {
    for(let i=0; i<filterItems.length; i++) {
        if(selectedValue === "all"){
            filterItems[i].classList.add("active");
        }
        else if(selectedValue === filterItems[i].dataset.category){
            filterItems[i].classList.add("active");
        }
        else{
            filterItems[i].classList.remove("active");
        }
    }
}

// All event in all filter button item for large screen
let lastClickedBtn = filterBtn[0];

for(let i=0; i<filterBtn.length; i++){
    filterBtn[i].addEventListener("click", function(){
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    })
}

// Contect form variable
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for(let i=0; i<formInputs.length; i++){
    formInputs[i].addEventListener("input", function(){
        // check form validation
        if(form.checkValidity()){
            formBtn.removeAttribute("disabled");
        }
        else{
            formBtn.setAttribute("disabled","");
        }
    })
}

// Page Navigation variables
const navbarBtns = document.querySelectorAll(".navbar-link");
const aboutPage = document.querySelector(".about");
const resumePage = document.querySelector(".resume");
const portfolioPage = document.querySelector(".portfolio");
const blogPage = document.querySelector(".blog");
const contactPage = document.querySelector(".contact"); 

const Menubar = [aboutPage,resumePage,portfolioPage,blogPage,contactPage];
 
aboutPage.classList.add("active");
for(let i=0; i<navbarBtns.length; i++){
    navbarBtns[i].addEventListener("click", function(){
        navbarBtns[i].classList.add("active");
        Menubar[i].classList.add("active");
        for(let j=0; j<navbarBtns.length; j++){
            if(i != j) {
                navbarBtns[j].classList.remove("active");  
                Menubar[j].classList.remove("active");
            }
        }
    });
}
 