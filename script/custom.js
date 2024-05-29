$(function () {
  /* Include Files */
  $(".header-include").load("/include/header.html", function () {
    /*Mega Navigaion */
    $(window)
      .resize(function () {
        /* 디바이스 너비가 767px 이상일 때(태블릿, PC 때) */
        if ($(window).innerWidth() > 767) {
          $(".trigger").click(function () {
            $(".mega-navi").stop().slideToggle();
          });
          $("section").click(function () {
            $(".mega-navi").stop().slideUp();
          });
        } else {
          $(".trigger").click(function () {
            $(".mega-navi").animate({ left: 0 }, 300);
          });
          $("section").click(function () {
            $(".mega-navi").animate({ left: -300 }, 300);
          });
          $(".btn-mega-navi-close").click(function () {
            $(".mega-navi").animate({ left: -300 }, 300);
          });
        }
      })
      .resize();

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

    /* Mega Navi */
    $(".mega-navi-item b").click(function () {
      // $(this).next().stop().slideToggle(200);

      $(".mega-navi-item-wrap").slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).addClass("active");
      $(this).parent().siblings().children("b").removeClass("active");
    });
  });

  $(".footer-include").load("/include/footer.html", function () {
    /*Footer LNB */
    $(".link-item-title").click(function () {
      $(this).next().stop().slideToggle(300);
      $(this).toggleClass("active");
    });

    /* company-info-trigger */
    $(".company-info-trigger").click(function () {
      // $("address").toggle();
      $(this).next().stop().slideToggle(300);
      $(this).toggleClass("active");
    });
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
  $(".class-detail-navigation a").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");

    /* Smooth Scrolling */
    var linklocation = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linklocation).offset().top,
      },
      500
    );
    e.preventDefault();
  });

  /* Class Curriculum */
  $(".chapter-title").click(function () {
    $(this).next().toggle();
    $(this).toggleClass("active");
  });

  /* Class faq */

  $(".faq-title").click(function () {
    // 클린한 것 펼치고 나머지는 접기
    // $(this).siblings(".faq-content").stop().slideUp(300);
    // $(this).next().stop().slideDown(200);

    $(this).next().slideToggle();
  });
  /* Front Slider */
  $(".front-slider-items").slick({
    infinite: true, // 마지막 슬라이드 다음에 처음으로 돌아가기
    arrows: false, // 다음 이전 버튼
    dots: false, // 동그라미 도트 버튼
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 슬라이드가 머무는 시간
    fade: false, // 크로스페이드로 할지 여부
    speed: 300, // 슬라이드 교차하는 시간
    pauseOnHover: true, // 마우스 올라갔을 때 잠시 멈춤
    responsive: [
      {
        breakpoint: 1024, //breakpoint : 너비를 얘기함
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  /* Focus Class Slider */
  $(".focus-class-items").slick({
    slidesToShow: 4, // 최초에 보이는 개수
    slidesToScroll: 2, // 슬라이드할 때 몇개씩 슬라이드할지 개수
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  });
});
