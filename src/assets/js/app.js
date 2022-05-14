fun = (a) => {
    return a;
}

jQuery('.review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 10000,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

jQuery('.menu-burger').click(function() {
    jQuery('.menu-burger').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
});


