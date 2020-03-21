/*---------------------------------------------
Template name :  DocLand
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Main Menu
    02: Off Canvas Menu
    03: Sticky Nav
    04: Menu Responsive in Small Device
    05: Testimonial Slider
    06: Parallax Image
    07: Scroll Animation
    08: Pricing table switcher
    09: Hosting price Hover
    10: Header Show & Hide
    11: Background Image
    12: Check Data
    13: AnalyticPage feature Slider
    14: Owl Carousel
    15: WOW INIT
    16: CountDown Timer
    17: Accordion
    18: Earn now js
    19: TAB
    20: Payment Banner
    21: UI Range Slider
    22: PopUp Video Play
    23: Changing svg
    24: Google map
    25: Preloader
    26: Contact Form
    27: Back to top button
    28: Custom Select Box
    29: Modal File Upload Option
    30: Modal Active

----------------------------------------------*/


(function ($) {
    "use strict";

    /*===================
    01: Main Menu
    =====================*/
    $('ul.nav li a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });

    /* Menu Button Active */
    $('#menu-button').on('click', function() {
        $('#mobile_menu, .offcanvas-overlay').addClass('opened');
    });

    $('.offcanvas-close, .offcanvas-overlay').on('click', function() {
        $('#mobile_menu, .offcanvas-overlay').removeClass('opened');
    });

    /* Parent li add class */
    $('.header-main .main-menu').find('ul li').parents('.main-menu ul li').addClass('has-sub-item');
    $('.header-main .main-menu > ul > li').removeClass('has-sub-item');


    /*===================
    02: Off Canvas Menu
    =====================*/
    $('.panel .mobile-main-menu').find('ul li').parents('.mobile-main-menu ul li').addClass('has-sub-menu');
    $('.panel .mobile-main-menu').find(".has-sub-menu").prepend('<span class="submenu-button"></span>');

    $('.mobile-main-menu').find(".submenu-button").on("click", function(event){
        $(this).toggleClass("sub-menu-oppened");
        if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideUp('200');
        } else {
            $(this).siblings('ul').addClass('open').slideDown('200');
        }
    });

    /*========================
    03: Sticky Nav
    ==========================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-main.love-sticky").removeClass("sticky fadeInDown animated");
        }
        else {
            $(".header-main.love-sticky").addClass("sticky fadeInDown animated");
        }
    });

    /*==================================
    04: Menu Responsive in Small Device
    ====================================*/
    function subMenu() {

        var $subMain = $('.main-menu .nav > li > ul');
        var $subSub = $('.main-menu .nav > li > ul ul');

        $subMain.each(function () {
            if ($(window).width() > 991) {
                if ($(this).offset().left + $(this).width() > $(window).width()) {
                    $(this).css({ 'left': 'auto', 'right': '0' });
                }
            }
        });

        $subSub.each(function () {
            if ($(window).width() > 991) {
                if ($(this).offset().left + $(this).width() > $(window).width()) {
                    $(this).css({ 'left': 'auto', 'right': '100%' });
                }
            }
        });
    }
    subMenu();

    $(window).resize(subMenu);

    /*========================
    05: Testimonial Slider
    ==========================*/
    var clientsSlider = $('.email-clients-slider'),
    testimonialSlider = $('.email-testimonial-slider');
    if ( testimonialSlider.length ) {
        testimonialSlider.owlCarousel({
            items: 1,
            smartSpeed: 400,
            autoplay: false,
            animateIn: "fadeIn",
            loop: true,
            nav: true,
            navText: ['<img src="assets/img/icons/prev2.svg" class="svg" alt="">', '<img src="assets/img/icons/next2.svg" class="svg" alt="">'],
            dots: false,
            onChanged: function (e) {
                var cIndx = $(e.target).find('.owl-item').eq(e.item.index).children('.testimonial-item').data('id'), cIndx = cIndx - 1;
                clientsSlider.trigger('to.owl.carousel', [cIndx, 500, true]);
            }

        }).on('click', '.owl-item', function (e) {
            var cIndx = $(e.currentTarget).children('.testimonial-item').data('id') - 1;
            testimonialSlider.trigger('to.owl.carousel', [cIndx, 500, true]);
        });
    }

    if ( clientsSlider.length ) {
        clientsSlider.owlCarousel({
            items: 1,
            smartSpeed: 1200,
            autoplay: false,
            nav: false,
            loop: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: "fadeIn"
        });
    }

    /*========================
    06: Parallax Image
    ==========================*/
    var object1 = $('.pos-device');

    var banner = $('.banner');

    banner.mousemove(function(e) {
    var valueX = (e.pageX * -0.2 / 12);
    var valueY = (e.pageY * -0.2 / 12);

        object1.css({
            'transform' : 'translate3d('+valueX+ 'px, ' + valueY+'px,0)',
            'transform-style': 'preserve-3d'
        });
    });


    /*========================
    07: Scroll Animation
    ==========================*/
    var $printer = $('.printer');
    if($printer.length) {
        var startPosition = $printer.position().left;
        var printerTop = $printer.offset().top;
        var wh = $(window).height();

        var speed = 14;
        $(window).on( 'scroll',function () {
            var st = $(this).scrollTop() + wh;
            var newSt = st - printerTop;
            var newPos = (newSt * (speed/100)) + (startPosition - 115);
            if(newPos <= 0) {
                $printer.css({
                    'left': newPos,
                    'position': 'relative'
                });
            }
        });
    }

    /*========================
    08: Pricing table switcher
    ==========================*/
    var filt_monthly = $(".filt-monthly"),
    filt_yearly = $(".filt-yearly"),
    switcher = $(".switcher"),
    monthly = $(".monthly"),
    yearly = $(".yearly");

    filt_monthly.on("click", function() {
        switcher.prop('checked', false);
        filt_monthly.addClass("toggler--is-active");
        filt_yearly.removeClass("toggler--is-active");
        monthly.removeClass("hide");
        yearly.addClass("hide");
    });

    filt_yearly.on("click", function() {
        switcher.prop('checked', true);
        filt_yearly.addClass("toggler--is-active");
        filt_monthly.removeClass("toggler--is-active");
        monthly.addClass("hide");
        yearly.removeClass("hide");
    });

    switcher.on("click", function() {
        filt_yearly.toggleClass("toggler--is-active");
        filt_monthly.toggleClass("toggler--is-active");
        monthly.toggleClass("hide");
        yearly.toggleClass("hide");
    })

    /*========================
    09: Hosting price Hover
    ==========================*/
    $(function() {
        $('.pkg-list, .single-service.style--two').on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('.span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('.span').css({top:relY, left:relX})
        });
    });


    /*========================
    10: Header Show & Hide
    ==========================*/
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var c, currentScrollTop = 0,
        navbar = $('header.header');

    $(window).on('scroll', function () {

        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b - b) {
            navbar.addClass("scrollUp");
            navbar.removeClass("scrollDown");
        } else if (c > currentScrollTop) {
            navbar.removeClass("scrollUp");
            navbar.addClass("scrollDown");
        }
        c = currentScrollTop;
    });


    /*========================
    11: Background Image
    ==========================*/
    var $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function () {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');

    /*==================================
    12: Check Data
    ====================================*/
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    /*==================================
    13: AnalyticPage feature Slider
    ====================================*/
    $('.work-slider-dots .dots-count').append('<span class="process-bar"></span> <span class="process-bar-active"></span>');
    var sync1 = $(".work-slider");
    var sync2 = $(".work-slider-dots");
    var slidesPerPage = 3;
    var syncedSecondary = true;
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        autoplay: true,
        loop: true,
        dots: false,
        responsiveRefreshRate: 200,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag:false,
        margin: 50
    }).on('changed.owl.carousel', syncPosition);
    sync2.on('initialized.owl.carousel', function () {
        setTimeout(function () {
        sync2.find(".owl-item").eq(0).addClass("current");
        }, 100);
    }).owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: false,
        loop: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - .5);

        if (current < 0) {
        current = count;
        }

        if (current > count) {
        current = 0;
        } //end block


        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
        }

        if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    /*==================================
    14: Owl Carousel
    ====================================*/
    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function () {
        var $t = $(this);

        $t.owlCarousel({
            items: checkData($t.data('owl-items'), 1),
            margin: checkData($t.data('owl-margin'), 0),
            loop: checkData($t.data('owl-loop'), true),
            smartSpeed: 450,
            autoplay: checkData($t.data('owl-autoplay'), true),
            autoplayTimeout: checkData($t.data('owl-speed'), 8000),
            center: checkData($t.data('owl-center'), false),
            animateIn: checkData($t.data('owl-animate-in'), false),
            animateOut: checkData($t.data('owl-animate-out'), false),
            nav: checkData($t.data('owl-nav'), false),
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: checkData($t.data('owl-dots'), false),
            responsive: checkData($t.data('owl-responsive'), {})
        });
    });


    /* Slider Btn */
    $('.crm-testimonial button.owl-prev, .book-review-slider button.owl-prev, .customer-review-slider button.owl-prev, .app-testimonial-slider button.owl-prev').append('<img src="assets/img/icons/prev.svg" class="svg left-svg" alt="">');
    $('.crm-testimonial button.owl-next, .book-review-slider button.owl-next, .customer-review-slider button.owl-next, .app-testimonial-slider button.owl-next').append('<img src="assets/img/icons/next.svg" class="svg" alt="">');

    /*==================================
    15: WOW INIT
    ====================================*/
    new WOW().init();

    /*========================
    16: CountDown Timer
    ==========================*/
    $('#countdown').countdown({
        date: '012/16/2020 23:59:59'
    });

    /*========================
    17: Accordion
    ==========================*/
    var accordionToggle = $('[data-accordion-tab="toggle"]');
    accordionToggle.each(function(){
        $(this).children('.accordion-content').hide();
        $(this).on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            if ($(this).hasClass('active')){
                $(this).children('.accordion-content').slideDown(500).parents('[data-accordion-tab="toggle"]').siblings().children('.accordion-content').slideUp(500);
            }
        });
        if($(this).hasClass('active')){
            $(this).children('.accordion-content').show();
        }
    });

    /*==================================
    18: Earn now js
    ====================================*/
    var swiper = new Swiper('.earn-slider', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    $('.custom-swiper-slide').on('click', function() {
        $('.custom-swiper-slide').removeClass('slide-active');
        $(this).addClass('slide-active');
    });


    //POS Page How It Work Slider
    new Swiper('.how-work-slider', {
        direction: 'vertical',
        slidesPerView: 4,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    /*==================================
    19: TAB
    ====================================*/
    var tabSelect = $('[data-tab-select]');
    var tab = $('[data-tab]');
    tabSelect.each(function(){
        var tabText = $(this).data('tab-select');
        $(this).on('click', function(){
            tabSelect.siblings().removeClass('active');
            $(this).addClass('active');
            tab.each(function(){
                if(tabText === $(this).data('tab')){
                    $(this).fadeIn(800).siblings().hide(); // for click
                    // $(this).fadeIn(500).siblings().stop().hide(); // active if hover
                    $(this).addClass('active').siblings().removeClass('active');
                }
            });
        });
        if($(this).hasClass('active')){
            tab.each(function(){
                if(tabText === $(this).data('tab')){
                    $(this).addClass('active');
                }
                if($(this).hasClass('active')){
                    $(this).show().siblings().hide();
                }
            });
        }
    });

    /*==================================
    20: Payment Banner
    ====================================*/
    $(window).on("resize", function () {
        let bannerWidth = $('.payment-banner-bg').outerWidth();
        let top = (bannerWidth / 2) + 30;
        let windowWidth = $(window).width();

        $('.payment-banner-bg').css({
            "height": bannerWidth,
            "top" : -top,
        });
        if ( windowWidth < 768) {
            $('.payment-banner-bg').css({
                "height": '100%',
                "top" : 0,
            });
        } else if ( windowWidth < 992 ) {
            $('.payment-banner-bg').css({
                "top" : -(top - 200),
            });
        } else if (windowWidth >= 992 && windowWidth < 1200) {
            $('.payment-banner-bg').css({
                "top" : -(top - 30),
            });
        } else if (windowWidth >= 1200 && windowWidth < 1600) {
            $('.payment-banner-bg').css({
                "top" : -(top + 15),
            });
        } else if (windowWidth >= 1600 && windowWidth < 1980) {
            $('.payment-banner-bg').css({
                "top" : -(top + 15),
            });
        } else {
            $('.payment-banner-bg').css({
                "top" : -(top + 360),
            });
        }


    }).resize();

    /*==================================
    21: UI Range Slider
    ====================================*/
    let slider = $("#slider");
    let sale = $(".sale strong span");
    let total = $(".total-earning strong span");
    let line = $('#slider .focus');
    let one = $('#slider span.one');
    let two = $('#slider span.two');
    let three = $('#slider span.three');
    let step;
    let val;
    let val1;

    //init slider
    slider.slider({
        max: 3,
        min: 0,
        range: false,
        step: 1,
        value: 1,
    });
    //Trigar on slider move
    slider.on('slide', function(e, ui) {
        step = ui.value;

        //slider css
        if(step === 0) {
            line.css('width', '0%');
            two.css('border-color', '#CECECE');
            three.css('border-color', '#CECECE');
            $('.customer').css('opacity', .5);
        } else if(step === 1) {
            line.css('width', '33.33%');
            one.css('border-color', '#5F52DC');
            three.css('border-color', '#CECECE');
            $('.customer.two, .customer.three').css('opacity', .5);
            $('.customer.one').css('opacity', 1);
        } else if(step === 2) {
            line.css('width', '66.66%');
            two.css('border-color', '#5F52DC');
            $('.customer.one, .customer.two').css('opacity', 1);
            $('.customer.three').css('opacity', .5);
        } else {
            line.css('width', '100%');
            three.css('border-color', '#5F52DC');
            two.css('border-color', '#5F52DC');
            one.css('border-color', '#5F52DC');
            $('.customer.one, .customer.two, .customer.three').css('opacity', 1);
        }
        //sale text condition
        if(step === 0) {
            sale.text(0);
        }
        else if(step === 1 || step === 2 ||step === 3) {
            sale.text(5);
        }
        //sale earn by customer figure
        val = step * sale.text();
        sale.text(val);

        //customer
        val1 = step * 15 * sale.text();
        total.text(val1);
    });

    /*========================
    22: PopUp Video Play
    ==========================*/
    $(".mfp-iframe, .video-preview").magnificPopup({
        type: "video"
    });

    /*==================================
    23: Changing svg
    ====================================*/
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /*==================================
    24: Google map
    ====================================*/
    var gMap = $('#map');
    if(gMap.length) {
        var map;
        var InforObj = [];
        var centerCords = {
            lat: -25.344,
            lng: 131.036
        };
        var markersOnMap = [{
                placeName: "Queens, NY 11430, USA Queens Island NY 10306",
                icon: 'assets/img/marker1.png',
                LatLng: [{
                    lat: -25.344,
                    lng: 131.036
                }]
            },
            {
                placeName: "Queens, NY 11430, USA Queens Island NY 10306",
                icon: 'assets/img/marker.png',
                LatLng: [{
                    lat: -27.6728,
                    lng: 121.6283
                }]
            }
        ];

        window.onload = function () {
            initMap();
        };

        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div id="marker-info">' + markersOnMap[i].placeName +
                    '<p></p></div>';

                const marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map,
                    icon:  markersOnMap[i].icon
                });

                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });

                // marker.addListener('click', function () {
                //     closeOtherInfo();
                //     infowindow.open(marker.get('map'), marker);
                //     InforObj[0] = infowindow;
                // });
                marker.addListener('mouseover', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
                marker.addListener('mouseout', function () {
                    closeOtherInfo();
                    infowindow.close();
                    InforObj[0] = infowindow;
                });
            }
        }

        function closeOtherInfo() {
            if (InforObj.length > 0) {
                /* detach the info-window from the marker ... undocumented in the API docs */
                InforObj[0].set("marker", null);
                /* and close it */
                InforObj[0].close();
                /* blank the array */
                InforObj.length = 0;
            }
        }

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: centerCords,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ]
            });
            addMarkerInfo();
        }
    }

    /*==================================
    25: Preloader
    ====================================*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


    /*==================================
    26: Contact Form
    ====================================*/
    $('.contact-form').on('submit', 'form', function (e) {
        e.preventDefault();

        var $el = $(this);

        $.post($el.attr('action'), $el.serialize(), function (res) {
            res = $.parseJSON(res);
            $el.parent('.contact-form').find('.form-response').html('<span>' + res[1] + '</span>');
        });
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

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*============================================
    28: Custom Select Box
    ==============================================*/
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");

            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

            x[i].appendChild(a);
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;

                    for (i = 0; i < s.length; i++) {

                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");

                                for (k = 0; k < y.length; k++) {
                                    y[k].removeAttribute("class");
                                }

                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }

            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
    function closeAllSelect(elmnt) {
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");

        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }

        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);

    /*============================================
    29: Modal File Upload Option
    ==============================================*/
    var $fileInput = $('.file-input');
    var $droparea = $('.file-drop-area');

    // highlight drag area
    $fileInput.on('dragenter focus click', function() {
        $droparea.addClass('is-active');
    });

    // back to normal state
    $fileInput.on('dragleave blur drop', function() {
        $droparea.removeClass('is-active');
    });

    // change inner text
    $fileInput.on('change', function() {
        var filesCount = $(this)[0].files.length;
        var $textContainer = $(this).prev();

        if (filesCount === 1) {
            // if single file is selected, show file name
            var fileName = $(this).val().split('\\').pop();
            $textContainer.text(fileName);
        } else {
            // otherwise show number of files
            $textContainer.text(filesCount + ' files selected');
        }
    });

    /*============================================
    30: Modal Active
    ==============================================*/
    $('.modal-btn').on('click', function(e) {
        e.preventDefault();
        $('#mainModal').modal('toggle');
    })

}(jQuery));
