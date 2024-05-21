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

    /* Member Register */
    $(".toggle-pw").click(function () {
      // Toggle Icon Shape
      $(this).toggleClass("bi-eye");
      // Toggle Input Type

      var inputType = $(this).parent().children("input").attr("type");
      if (inputType == "password") {
        $(this).parent().children("input").attr("type", "text");
      } else {
        $(this).parent().children("input").attr("type", "password");
      }
    });

    /* Header Login Modal */
    $(".btn-login, .login-member a").click(function () {
      $(".member-login-overlay").fadeIn();
      $("body").addClass("active");
    });

    $(".member-login .btn-modal-close").click(function () {
      $(".member-login-overlay").fadeOut();
      $("body").removeClass("active");
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

  /* Category Detail Buttons*/
  $(".btn-shortcut").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".btn-earlybird").click(function () {
    $(this).addClass("active");
  });

  /* Take Course & Cart Check All Function */
  $(".cart-item .btn-clear ").click(function () {
    $(this).parents(".cart-item").hide();
  });

  $(".cart-wrap .btn-all-clear").click(function () {
    $(".cart-item").hide();
  });

  $(".cart-chk-all").click(function () {
    $(".check-status .cart-chk").prop("checked", this.checked);
  });

  /* Class Share Modal */
  $(".btn-sidebar-badge.share").click(function () {
    $(".class-share-overlay").fadeIn();
    $("body").addClass("active");
  });
  $(".class-share .btn-modal-close").click(function () {
    $(".class-share-overlay").fadeOut();
    $("body").removeClass("active");
  });
  $(".share-choice-item.share-link").click(function () {
    $(".copied-link").show();

    setTimeout(function () {
      $(".copied-link").hide();
    }, 1000);
  });

  /* Class Detail Navigation */
  $(".class-detail-navigation a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /* Class Curriculum */
  $(".chapter-title").click(function () {
    $(this).next().toggle();
    $(this).toggleClass("active");
  });

  /* Front Slider */
  $(".class-share.front-slider-items").slick({
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
