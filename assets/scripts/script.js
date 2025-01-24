$(document).ready(function () {
  //scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.main-menu').addClass('scrolled');
    } else {
      $('.main-menu').removeClass('scrolled');
    }
  });

  var isRTL = $('html').attr('lang') === 'ar'; 

  const setActiveForSmallScreens = () => {
    if (window.innerWidth <= 768) {
      $('.benefit-icon-wrap').addClass('active-benefit-icon'); // Add class to all
    } else {
      $('.benefit-icon-wrap').removeClass('active-benefit-icon'); // Remove class on larger screens
    }
  };

  // Run this check on load
  setActiveForSmallScreens();

  // Reapply active state if screen is resized
  $(window).on('resize', setActiveForSmallScreens);

  // Click behavior for larger screens
  $('.benefit-icon-wrap').on('click', function () {
    if (window.innerWidth > 768) {
      const isVisible = $(this).find('.ticket-text').is(':visible');

      // Hide all elements and remove the active class
      $('.ticket-text').hide(300);
      $('.rbm-small-logo').hide(300);
      $('.benefit-icon').css('padding-top', '');
      $('.benefit-icon-wrap').removeClass('active-benefit-icon');

      // Show the clicked element's content and add the active class if not already visible
      if (!isVisible) {
        $(this).find('.ticket-text').show(300);
        $(this).find('.rbm-small-logo').show(300);
        $(this).find('.benefit-icon').css('padding-top', '20px');
        $(this).addClass('active-benefit-icon'); // Add the active class
      }
    }
  });
  



  //video part
  const videoPopup = $("#videoPopup");
  const videoFrame = $("#videoFrame");
  
  $("#videoButton").on("click", function () {
    // Determine the language of the page
    const isArabic = $("html").attr("lang") === "ar";
  
    // Set the video URL based on the language
    const videoUrl = isArabic
      ? "https://www.youtube.com/embed/qNwFtSRdxeo?si=YURRq-A-bwBJjAzF" // Arabic video URL
      : "https://www.youtube.com/embed/TWkIFvcaRPc?si=Qaq4dmDN1oKz8By-"; // English video URL
  
    // Show the popup and set the video URL
    videoPopup.css("display", "flex").hide().fadeIn();
    videoFrame.attr("src", videoUrl);
  });
  
  $("#closePopup, #videoPopup").on("click", function (e) {
    if (e.target.id === "closePopup" || e.target.id === "videoPopup") {
      videoPopup.fadeOut(() => {
        videoPopup.css("display", "none");
        videoFrame.attr("src", ""); // Clear the video URL
      });
    }
  });

  //bundles toggle
  $(document).ready(function () {
    $(".selector-option").click(function () {
      $(".selector-option").removeClass("active-bundle-selector");
      $(this).addClass("active-bundle-selector");

      const selectedText = $(this).text().trim();

      if (selectedText === "Postpaid" || selectedText === "مفوتر") {
          $(".postpaid-bundles-wrapper").show();
          $(".prepaid-bundles-wrapper").hide();
          reinitializeSlick(".postpaid-bundles-wrapper .hilali-bundles-container");
      } else if (selectedText === "Prepaid" || selectedText === "مسبق الدفع") {
          $(".prepaid-bundles-wrapper").show();
          $(".postpaid-bundles-wrapper").hide();
          reinitializeSlick(".prepaid-bundles-wrapper .hilali-bundles-container");
      }
    });

    function reinitializeSlick(selector) {
      var isRTL = $('html').attr('lang') === 'ar'; 
    
      if ($(selector).hasClass("slick-initialized")) {
        $(selector).slick("unslick");
      }
    
      if ($(window).width() < 668) {
        $(selector).slick({
          dots: false,
          infinite: false,
          slidesToShow: 1.4,
          slidesToScroll: 1,
          rtl: isRTL, 
          arrows: false,
          responsive: [
            {
              breakpoint: 461,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.25,
              },
            },
            {
              breakpoint: 391,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.1,
              },
            },
          ],
        });
    
        reverseSlidesForRTL(selector);
      }
    }

    reinitializeSlick(".prepaid-bundles-wrapper .hilali-bundles-container");

    function initBenefitSlick(selector) {
      var isRTL = $('html').attr('lang') === 'ar'; 
    
      if ($(selector).hasClass("slick-initialized")) {
        $(selector).slick("unslick");
      }
    
      if ($(window).width() < 769) {
        $(selector).slick({
          dots: false,
          infinite: false,
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          rtl: isRTL,
          responsive: [
            {
              breakpoint: 569,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2.7,
              },
            },
            {
              breakpoint: 461,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2.5,
              },
            },
            {
              breakpoint: 415,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2.3,
              },
            },
            {
              breakpoint: 391,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2.3,
              },
            },
          ],
        });
    
        reverseSlidesForRTL(selector);
      }
    }
    initBenefitSlick(".benefit-wrapper");

    $(window).resize(function () {
      const activeSelector = $(".prepaid-bundles-wrapper").is(":visible")
        ? ".prepaid-bundles-wrapper .hilali-bundles-container"
        : ".postpaid-bundles-wrapper .hilali-bundles-container";
      reinitializeSlick(activeSelector);
      initBenefitSlick(".benefit-wrapper");
    });
  });

  // $(".hilal-news-slider").slick({
  //   dots: false,
  //   infinite: false,
  //   slidesToScroll: 1,
  //   slidesToShow: 2.2,
  //   arrows: true,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 1441,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 2,
  //       },
  //     },

  //     {
  //       breakpoint: 1281,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 2.3,
  //       },
  //     },
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 2.1,
  //       },
  //     },
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1.8,
  //       },
  //     },
  //     {
  //       breakpoint: 569,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1.7,
  //       },
  //     },
  //     {
  //       breakpoint: 521,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1.5,
  //       },
  //     },
  //     {
  //       breakpoint: 461,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1.4,
  //       },
  //     },
  //     {
  //       breakpoint: 391,
  //       settings: {
  //         slidesToScroll: 1,
  //         slidesToShow: 1.25,
  //       },
  //     },
  //   ],
  // });


  //players slider
  
  function initPlayersSlick(selector) {
    var isRTL = $('html').attr('lang') === 'ar'; // Detect if the page is in Arabic
  
    if ($(selector).hasClass("slick-initialized")) {
      $(selector).slick("unslick"); // Destroy existing slick instance
    }
  
    $(selector).slick({
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
      rtl: isRTL, // Dynamically set RTL
      initialSlide: 0, // Always start from the first slide
    });
  
    reverseSlidesForRTL(selector); // Adjust slide order for RTL, if necessary
  }

  initPlayersSlick(".players-slider-wrap")

    // Fix Slick RTL ordering issue for Arabic
    function reverseSlidesForRTL(selector) {
      var isRTL = $('html').attr('lang') === 'ar'; // Check if the page is in Arabic (RTL)
    
      if (isRTL) {
        var $slider = $(selector);
        var slides = $slider.find('.slick-slide').get().reverse(); // Reverse the slides
    
        $slider.slick('slickRemove', null, null, true); // Remove all slides
        slides.forEach(function (slide) {
          $slider.slick('slickAdd', slide); // Re-add slides in reversed order
        });
      }
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
  const splineViewer = document.querySelector('spline-viewer');
  const shadowRoot = splineViewer.shadowRoot;
  const canvas = shadowRoot.querySelector('#spline'); // Access the canvas element

  if (canvas) {
    canvas.style.width = '100%';
    canvas.style.height = 'auto'; // Optional: Adjust height as needed
  }
});