$(document).ready(function(){





$('.go').click(function(){
	$('.toGo').hide(),
	$('.toStop').hide(),
	$('.GoGo').fadeIn(),
	$('.green').slideDown().css('background','lime'),
	$('.yellow').slideDown().css('background','#E5E274'),
	$('.red').slideDown().css('background','#E98071');


});



$('.ready').click(function(){
	$('.GoGo').hide(),
	$('.toStop').hide(),
	$('.toGo').fadeIn(),
	$('.yellow').slideDown().css('background','yellow'),
	$('.green').slideDown().css('background','green'),
	$('.red').slideDown().css('background','#E98071');
});



$('.stop').click(function(){
	$('.toGo').hide(),
	$('.GoGo').hide(),
	$('.toStop').fadeIn(),
	$('.red').slideDown().css('background','red'),
	$('.yellow').slideDown().css('background','#E5E274'),
	$('.green').slideDown().css('background','green');
});











});