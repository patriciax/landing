$('.main-banner__content').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  cssEase: "linear",
  arrows: false,
  responsive: [{
      breakpoint: 1200,
      settings: {
      
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});

$('.main-client__content').slick({
  infinite: true,
  autoplaySpeed: 1000,
  slidesToShow: 5,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  autoplay:true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000
      }
    }
  ]
});

