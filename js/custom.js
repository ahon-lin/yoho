$(function () {
	$("#header").load("./commom/header.html", function () {
		$("#footer").load("./commom/footer.html", function () {
			if ($('#form-content').length) {
				$("#form-content").load("./commom/form.html", function () {
					jsInit();
				});
			} else {
				jsInit();
			}
		});
	});
})

// document.addEventListener("DOMContentLoaded",function(){
// 	$("#header").load("./commom/header.html", function () {
// 		$("#footer").load("./commom/footer.html", function () {
// 			if ($('#form-content').length) {
// 				$("#form-content").load("./commom/form.html", function () {
// 					jsInit();
// 				});
// 			} else {
// 				jsInit();
// 			}
// 		});
// 	});
// })

function jsInit() {
	AOS.init({
		once: true,
	});
	$('.menu-btn').on('click', function () {
		$('#hamburger-1').toggleClass('active');
	});
	if (window.location.hash) {
		let target = $(window.location.hash);
		if (target.length) {
			let height = 80;
			if ($(target).offset().top >= 100) height = 50;
			$('html, body').animate({
				scrollTop: target.offset().top - height
			}, 800);
		} else {
			if ($('.header-top-bar').offset().top >= 100) add_autoHeader();
		}
	} else {
		if ($('.header-top-bar').offset().top >= 100) add_autoHeader();
	}
	$('a[href*="#"]').on('click', function (e) {
		let target = $(this.hash);
		if ($(target).length) {
			e.preventDefault();
			let height = 80;
			if ($(target).offset().top >= 100) height = 50;
			$('html, body').animate({
				scrollTop: $(target).offset().top - height
			}, 800);
		}
	});
	$(window).scroll(function () {
		if ($('.header-top-bar').offset().top >= 100) {
			add_autoHeader();
		} else {
			remove_autoHeader();
		}
	});

	$(window).on('resize', function () {
		navLinkAttr();
	})

	$('[data-submenu]').submenupicker();
	navLinkAttr();
}

function navLinkAttr() {
	if ($(window).width() > 991) $('.nav-click').attr('data-toggle', '');
	else $('.nav-click').attr('data-toggle', 'dropdown');
}

function add_autoHeader() {
	if (!$('.header-top-bar').hasClass('active')) $('.header-top-bar').addClass('active');
}

function remove_autoHeader() {
	if ($('.header-top-bar').hasClass('active')) $('.header-top-bar').removeClass('active');
}
