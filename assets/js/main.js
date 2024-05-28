(function ($) {
  "use strict";
  var windowOn = $(window);


      /*======================================
        Preloader activation
        ========================================*/
	$(window).on('load', function (event) {
		$('#preloader').delay(1000).fadeOut(500);
	});


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(500);
    })

    /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

  /*======================================
	Mobile Menu Js
	========================================*/
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
  });

  /*======================================
	Sidebar Toggle
	========================================*/
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__area").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
  // Scroll to bottom then close navbar
  $(window).scroll(function(){
    if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    }
  });
  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__area").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  /*======================================
	Body overlay Js
	========================================*/
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  /*======================================
	Sticky Header Js
	========================================*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#header-sticky").addClass("rs-sticky");
    } else {
      $("#header-sticky").removeClass("rs-sticky");
    }
  });

    /*** pricing table */
    const pricingMonthlyBtn = $("#monthly-btn"),
        pricingYearlyBtn = $("#yearly-btn"),
        pricingValues = $(".pricing-card-price h2");

    if (pricingMonthlyBtn[0] && pricingYearlyBtn[0] && pricingValues.length > 0) {
        pricingMonthlyBtn[0].addEventListener("click", function () {
            updatePricingValues("monthly");
            pricingYearlyBtn[0].classList.remove("active");
            pricingMonthlyBtn[0].classList.add("active");
        });

        pricingYearlyBtn[0].addEventListener("click", function () {
            updatePricingValues("yearly");
            pricingMonthlyBtn[0].classList.remove("active");
            pricingYearlyBtn[0].classList.add("active");
        });
    }

    function updatePricingValues(option) {
        pricingValues.each(function () {
            const pricingValue = $(this);
            const yearlyValue = pricingValue.attr("data-yearly");
            const monthlyValue = pricingValue.attr("data-monthly");

            const newValue = option === "monthly" ? monthlyValue : yearlyValue;
            pricingValue.html(newValue);
        });
    }

  /*======================================
	MagnificPopup image view
	========================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*======================================
	MagnificPopup video view
	========================================*/
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*======================================
	Counter Js
	========================================*/

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*======================================
	Wow Js
	========================================*/
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

  /*======================================
	Button scroll up js
	========================================*/
  
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-progress");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-progress");
        }
    });
    jQuery(".backtotop-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    
    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('#mobile-menu ul li a, .mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

  /*======================================
  Parallax Swiper
  ========================================*/
    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,
    
        pagination: {
            el: ".rs-slider-dot",
            clickable: true,
        },
    
        navigation: {
            nextEl: ".slider__button-prev",
            prevEl: ".slider__button-next",
        },
        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".slider__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function() {
                this.update();
            },
        },
    };
    parallaxSlider = new Swiper(
        ".slider-prlx .parallax-slider",
        parallaxSliderOptions
    );

    /*team__carousel-active***/
    var team__carousel_active = new Swiper(".team__carousel-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        centeredSlides: true,
        dot: false,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".our-team__slider-button-next",
            prevEl: ".our-team__slider-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });





    $(".work-process__item button").on("click", function() {
        $(".work-process__item").removeClass("active");
        $(this).closest(".work-process__item").addClass("active");
    });

    $("[data-after-color]").each(function() {
        $(this).css("color", $(this).attr("data-after-color"));
    });

    //jQuery to collapse the navbar on scroll
    var header_height  = $('.navbar').height(),
        intro_height    = $('.intro-section').height(),
        offset_val = intro_height + header_height;
    $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
        if (scroll_top >= offset_val) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
                $(".navbar-fixed-top").removeClass("navbar-transparent");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("navbar-transparent");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });






})(jQuery);


