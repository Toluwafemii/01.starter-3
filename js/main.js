// Start writing JavaScript here!

const modalButton = document.querySelector('.jsModalButton')

modalButton.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})

const modalcloseButton = document.querySelector('.jsModalClose')

modalcloseButton.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})

const modalcloseButton2 = document.querySelector('.outsidemodalBody')

modalcloseButton2.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})

// Introduction to Array
// Array methods
// For Loops
// The foreach loop
// selecting multiple elements
// Nodes vs elements 5min
// IDs Classess, Attributes and Tags
// changing css with Java Script
// Getting CSS with JS
// Changing attributes
// finding an element's size and position
// 
