const selectElement = function(element) {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
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

 $(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });
  
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});