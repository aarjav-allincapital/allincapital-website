$(document).ready(function () {
	var animation6 = bodymovin.loadAnimation({
		container: document.getElementById("fp-06"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_8sqeayso.json",
	});

	[...document.querySelectorAll(".allstars-underline")].forEach(el => {
		bodymovin.loadAnimation({
			container: el,
			renderer: "svg",
			loop: true,
			autoplay: true,
			path: "./json/allstars_underline_lottie.json",
		});
	})

	// id: allstars-footer-line
	bodymovin.loadAnimation({
		container: document.getElementById("allstars-footer-line"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_8sqeayso.json",
	});
	$(".main-menu").on("click", function (e) {
		e.preventDefault();
		$("#menu, .close-menu").show();
		$(".main-menu").hide();
		$("body").css("overflow", "hidden");
	});

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$("#menu, .close-menu").hide();
		$(".main-menu").show();
		$("body").css("overflow", "");
	});

	$(".btn").hover(function () {
		$(this).toggleClass("marquee");
	});


	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 4,
		margin: 25,
		responsive: {
			0: {
				loop: true,
				autoplay: true,
				autoplayTimeout: 1500,
				autoplayHoverPause: true,
			},
			1100: {
				loop: false,
				autoplay: false,
				autoplayHoverPause: false,
			}
		}
	});
});
