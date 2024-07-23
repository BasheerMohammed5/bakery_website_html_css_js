let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};



document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.home-slid', {
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: 1,
      centeredSlides: true,
      autoHeight: true,
  });
});