$(document).ready(function(){
	//스크롤시 메뉴바 고정	
	$(window).scroll(function() {
		if($(this).scrollTop() > 70) { 
			$("#menu").css('position','fixed');
			$("#menu").css('top','0');
			}
		else {$("#menu").css('position','relative');} });
})

