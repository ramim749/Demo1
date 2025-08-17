

$(document).ready(function(){
  $(".search-box").click(function(){
    $(".search-area").toggleClass("search-area-toogle");
  });

  $(".btn01").click(function(){
    $(".submenu2").toggleClass("submenu2-toogle");
  });
  $(".btn03").click(function(){
    $(".submenu3").toggleClass("submenu3-toogle");
  });
  $(".btn001").click(function(){
    $(".submenu4").toggleClass("submenu4-toogle");
  });
});



$(".hero1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  infinite: true,
  autoplay: true,
  centerMode: false,
  dots: true,
  nextArrow: '<span class="arrow-right" ><i class="fa-solid fa-chevron-right"></i><span>',
  prevArrow: '<span class="arrow-left" ><i class="fa-solid fa-chevron-left"></i></span>',
});

$(".news-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  infinite: true,
  autoplay: true,
  centerMode: false,
  dots: true,
  nextArrow: '<span class="arrow-right" ><i class="fa-solid fa-chevron-right"></i><span>',
  prevArrow: '<span class="arrow-left" ><i class="fa-solid fa-chevron-left"></i></span>',
});
$(".event-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  infinite: true,
  autoplay: true,
  centerMode: false,
  dots: true,
  nextArrow: '<span class="arrow-right" ><i class="fa-solid fa-chevron-right"></i><span>',
  prevArrow: '<span class="arrow-left" ><i class="fa-solid fa-chevron-left"></i></span>',
});


$(document).ready(function (){
  function handleSlick() {
    const windowWidth = $(window).width();

    if (windowWidth > 991) {
      if ($(".feature01").hasClass("slick-initialized")) {
        $(".feature01").slick("unslick");
      }
    } else {
      if (!$(".feature01").hasClass("slick-initialized")) {
        $(".feature01").slick({
          fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          autoplay: true,
          speed: 1000,
          centerMode: true,

          centerPadding: "0px 80px 0px 0px ",
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
              },
            },
          ],
        });
      }
    }
  }
  handleSlick();
// On resize
  $(window).on("resize", function () {
    handleSlick();
  });
});



var swiper = new Swiper(".member", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 100,
            disableOnInteraction: true,
          },
    });

    
 var swiper = new Swiper(".member01", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      freemode:true,
      infinite:true,
      loop:true,
      allowTouchMove:true,
      speed:5000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
     
    });



   $(".member2").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  pauseOnHover: false,
  cssEase: "linear",
  dots: false,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

