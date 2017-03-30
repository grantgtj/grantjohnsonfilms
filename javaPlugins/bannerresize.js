

function resize(){
    if ($(window).width() < 640) { 
	 $("#banner").attr('src', "media/About/asdf.png");
		
  } else {
  }
}


resize();
$(window).on('resize', resize);
// JavaScript Document