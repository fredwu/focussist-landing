(function ($) {
  "use strict";

  /*==================================
  15: WOW INIT
  ====================================*/
  new WOW().init();

  /*========================
  17: Accordion
  ==========================*/
  var accordionToggle = $('[data-accordion-tab="toggle"]');
  accordionToggle.each(function () {
    $(this).children('.accordion-content').hide();
    $(this).on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      if ($(this).hasClass('active')) {
        $(this).children('.accordion-content').slideDown(200).parents('[data-accordion-tab="toggle"]').siblings().children('.accordion-content').slideUp(200);
      }
    });
    if ($(this).hasClass('active')) {
      $(this).children('.accordion-content').show();
    }
  });

  /*============================================
  27: Back to top button
  ==============================================*/
  var $backToTopBtn = $('.back-to-top');

  if ($backToTopBtn.length) {
    var scrollTrigger = 400, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass('show');
        } else {
          $backToTopBtn.removeClass('show');
        }
      };

    backToTop();

    $(window).on('scroll', function () {
      backToTop();
    });
  }
}(jQuery));
