(function ($) {
	"use strict";

	/* Preload*/
	$(window).on('load', function () { // makes sure the whole site is loaded
		'use strict';
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	})

	/* Animating the navbar toggle*/
	$('.cmn-toggle-switch').on('click', function () {
		$(this).toggleClass('active');
	});

	/* Tooltip*/
	$('.tooltip-1').tooltip({
		html: true
	});

	/* Footer reveal*/
	if ($(window).width() >= 768) {
		$('footer').footerReveal({
		shadow: false,
		zIndex: -101
	});
	}

	/* Accordion*/
	function toggleChevron(e) {
		$(e.target)
			.prev('.panel-heading')
			.find("i.indicator")
			.toggleClass('icon_plus_alt2 icon_minus_alt2');
	}
	$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

	/* Video modal*/
	$('.video_modal').magnificPopup({
		type: 'iframe'
	});

	/* Parallax header*/
	$('.parallax_window_in').parallax({});

	/*  Image popups */
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup 
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});

	/*Aside panel*/
	$(".aside-panel-bt").on("click", function () {
		$("#aside_panel").toggleClass("show")
		$(".layer").toggleClass("layer-is-visible")
	});
	$('#login-form-link').on("click", function () {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
	});
	$('#register-form-link').on("click", function () {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
	});

	/* Carousels*/
	$(".case_studies").owlCarousel({
		items: 3,
		loop: false,
		dots: true,
		margin: 10,
		nav: false,
		autoplay: false,
		responsiveClass: false,
		responsive: {
			320: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			}
		}
	});

	$('.carousel_project').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		animateIn: 'fadeIn',
		margin: 0,
		stagePadding: 0,
		smartSpeed: 100,
		responsiveClass: true,
		responsive: {
			600: {
				items: 1
			},
			1000: {
				items: 1,
				nav: false
			}
		}
	});
	
	$('.carousel_testimonials').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		animateIn: 'flipInX',
		margin: 30,
		stagePadding: 30,
		smartSpeed: 100,
		responsiveClass: true,
		responsive: {
			600: {
				items: 1
			},
			1000: {
				items: 1,
				nav: false
			}
		}
	});

	/* Input incrementer*/
	$(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
	$(".button_inc").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});


})(window.jQuery); // JavaScript Document