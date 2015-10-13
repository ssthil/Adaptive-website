$(function(){
	$('.navbar-right i').on('click', toggleNav);

	function toggleNav(){
		$('nav').toggleClass('toggle-nav');
	}
});
