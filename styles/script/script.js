$(document).ready(function () {
  $('ul li a').click(function () {
    $('li a').removeClass("current-menu-item");
    $(this).addClass("current-menu-item");
  });
});

function initSlider() {
  $('.slider-content').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: '<div class="slick-prev icon-cheveron-left"></div>',
    nextArrow: '<div class="slick-next icon-cheveron-right"></div>'
  });
}

function testimonialSlider() {
  $('.c-testimonials_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    arrows: false
  });
}

function logoSlider() {
  $('.c-column_row').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    arrows: false
  });
}


$(document).ready(function () {
  initSlider();
  testimonialSlider();
  logoSlider();
});


// $(document).ready(function () {
//   $('.lazyloaded').lazy();
// });

// function lazyloadd() {
//   $('.lazyloaded').lazy({
//     delay: 500
//   });
// }

// $(window).scroll(function () {
//   lazyloadd();
// });
