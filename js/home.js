$(document).ready(function () {
	var animation1 = bodymovin.loadAnimation({
		container: document.getElementById("fp-01"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_ziv7zyin.json",
	});

	var animation2 = bodymovin.loadAnimation({
		container: document.getElementById("fp-02"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_fdx0tnbq.json",
	});

	var animation3 = bodymovin.loadAnimation({
		container: document.getElementById("fp-03"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_zrjkyqb5.json",
	});

	var animation4 = bodymovin.loadAnimation({
		container: document.getElementById("fp-04"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_bmkpnplc.json",
	});

	var animation5 = bodymovin.loadAnimation({
		container: document.getElementById("fp-05"),
		renderer: "svg",
		loop: true,
		autoplay: true,
		path: "./json/lf30_8sqeayso.json",
	});

	//Animation on page load
	var logoDelay = 1000;
	var logoResize = 1000;
	var contentSlideIn = 500;

	// for testing
	// var logoDelay = 0;
	// var logoResize = 0;
	// var contentSlideIn = 0;

	var bannerHeight = $(".banner-content").height();
	setTimeout(function () {
		$(".logo").animate(
			{
				width: "111px",
				marginTop: -bannerHeight,
			},
			logoResize,
			function () {
				if ($(".banner").length) {
					var bannerTop = $(".logo").offset().top + 112;
					$(".banner-content").animate(
						{
							top: bannerTop,
						},
						contentSlideIn
					);
					$(".logo").removeClass("large");
				}
				$("header").show();
			}
		);
	}, logoDelay);

	var lastScrollTop = $(window).scrollTop();
	var delta = 5;
	var scrolled = false;
	$(window).scroll(function () {
		var nowScrollTop = $(this).scrollTop();
		if (!scrolled) {
			if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
				if (nowScrollTop > lastScrollTop) {
					scrollPage();
					scrolled = true;
				}
				lastScrollTop = nowScrollTop;
			}
		} else {
			if ($(window).scrollTop() == 0) {
				scrollPageReverse();
				scrolled = false;
			}
		}
	});

	$(".wrapper").css({ position: "relative" });
	var logoTop = $(".logo").position().top - 130;
	var logoLeft = $(".logo").offset().left + 100;

	$(".arrow-move").on("click", function (e) {
		e.preventDefault();
		scrollPage();
		$("html, body").animate({ scrollTop: "10px" }, 100);
	});

	function scrollPage() {
		if ($(".banner").length) {
			var topGutter = $(window).width() <= 768 ? "0px" : "99px";
			$(".logo").css({
				position: "fixed",
				top: $(".logo").position().top,
				left: $(".logo").offset().left,
			});
			$(".logo").animate(
				{
					top: "8px",
					marginTop: 0,
				},
				1000,
				function () {
					$(".logo").fadeOut();
					$(".header-logo").fadeIn();
				}
			);
			$("main").animate({ top: topGutter }, 1000, function () {
				$(".banner").hide();
			});
		}
	}

	function scrollPageReverse() {
		//finish previous animation
		$(".logo").finish();
		$("main").finish();

		$(".banner").show();
		$(".logo").fadeIn();
		$(".logo").css({
			left: logoLeft,
		});
		$(".header-logo").fadeOut();
		$("main").animate({
			top: "100vh",
		}, 1000);
		$(".logo").animate({
			top: logoTop,
			left: logoLeft,
			marginTop: 0,
		}, 1000);
	}

});
