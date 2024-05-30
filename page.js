var openTrigger = false;
var hasOpened = false;

$(document).ready(function(){
	$("#takemeback").click(function(){
		$(document).scrollTop(0);
	});
});
$(window).scroll(function() {
});

setInterval(function() {
	if($(document).scrollTop() > 100 && !hasOpened)
	{
		openTrigger = true;
		hasOpened = true;
	}
	if(openTrigger)
	{
		$("#desc").toggleClass("animate");
		openTrigger = false;
	}
}, 100);