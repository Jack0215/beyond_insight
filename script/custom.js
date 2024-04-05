$(function () {
  /* Include Files */
  $(".header-include").load("/include/header.html", function () {
    /*Mega Navigaion */
    $(".trigger").click(function () {
      $(".mega-navi").stop().slideToggle();
    });
    $("section").click(function () {
      $(".mega-navi").stop().slideUp();
    });
  });
  $(".footer-include").load("/include/footer.html");
  /* Scroll Header Fixed*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  /*The Final CountDown */
  $("#early-bird-countdown").countdown("2024/03/31", function (event) {
    $(this).html(
      event.strftime(
        "<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음"
      )
    );
  });

  /* Foucs Class*/
  $(".like").click(function () {
    $(this).toggleClass("active");
  });

  /* Front Slider */
  $(".front-slider-items").slick({
    infinity: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    speed: 500,
    pauseOnHover: true,
  });
  /* Fouce Class Slider */
  $(".focus-class-items").slick({
    slidesToShow: 4, //최초에 보이는 갯수
    slidesToScroll: 2, //슬라이드 몇개씩 할 건지 갯수
    arrows: true,
    dots: false,
  });
});
