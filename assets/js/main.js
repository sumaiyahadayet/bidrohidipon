(function ($) {
    "use strict";


  // pagepiling js
    var pagepiling = $('#pagepiling');
      pagepiling.pagepiling({
          menu: '#mainMenu',
          direction: 'vertical',
          verticalCentered: true,
          sectionsColor: [],
          anchors: ['home', 'about', 'cinematography', 'stills','blog', 'mentions','contact'],
          scrollingSpeed: 700,
          easing: 'swing',
          loopBottom: false,
          loopTop: false,
          css3: true,
          navigation: {
              'textColor': '#000',
              'bulletsColor': '#000',
              'position': 'right'
          },
          normalScrollElements: null,
          normalScrollElementTouchThreshold: 5,
          touchSensitivity: 5,
          keyboardScrolling: true,
          sectionSelector: '.section',
          animateAnchor: true,

          //events
          afterRender: function() {},
          afterLoad: function(anchorLink, index) {}
      });


    // Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });


    // venobox
    $('.venobox').venobox();

})(jQuery);
