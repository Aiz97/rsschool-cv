const selectElement = function(element) {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

document.addEventListener('mouseover', event => {
    if(event.target.classList.contains('nav-link')) {
      event.target.classList.add('active')
    }
 });
 document.addEventListener('mouseout', event => {
    if(event.target.classList.contains('nav-link')) {
      event.target.classList.remove('active')
    }
 });