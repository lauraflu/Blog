$(document).ready(function() {
	var width = $(window).width();
	MenuHover(width);
	ShrinkHeader();
});

$(window).resize(function() {
	var width = $(window).width();
	MenuHover(width);
});

function MenuHover(width) {
	$(".MainMenu").hover(
		function() {
			$(".MenuLink").addClass("MenuLinkHover");
		}, function() {
			$(".MenuLink").removeClass("MenuLinkHover");
		}
	);
}

function ShrinkHeader() {
	var ScrollPosition = 0;
	$(window).scroll( function(ScrollPosition) {
		ScrollPosition = $(window).scrollTop();
		if ( ScrollPosition >= 250 ) {
			$(".MainHeader").addClass("MainHeaderShrink");
		} else {
			$(".MainHeader").removeClass("MainHeaderShrink");
		}
	});
}