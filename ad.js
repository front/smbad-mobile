$(document).ready(function(){
	$('#btn-action').click(function(){
		$('.bubble-actions').toggle();
		$('#overlay').toggle();
	});

	$('#overlay').click(function(){
		$('.bubble-actions').toggle();
		$('#overlay').toggle();
	});
});
/*
window.addEventListener("orientationchange", function() {
  $('#overlay').css('top', '10px')
  			   .css('bottom', '10px');
}, false);
*/