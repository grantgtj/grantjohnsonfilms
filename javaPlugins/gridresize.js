function resize(){
    if ($(window).width() < 768) { 
    $("#SouthernCalifornia").attr('src', "media/Photos/SouthernCalifornia/Thumbnails/thumblarge.jpg");
	$("#NewYork").attr('src', "media/Photos/NewYork/Thumbnails/thumblarge.jpg");
	$("#Connecticut").attr('src', "media/Photos/Connecticut/Thumbnails/thumblarge.jpg");
	$("#PuntaIslita").attr('src', "media/Photos/PuntaIslita/Thumbnails/thumblarge.jpg");
	$("#JoshuaTree").attr('src', "media/Photos/JoshuaTree/Thumbnails/thumblarge.jpg");
	$("#TheTroupe").attr('src', "media/Photos/TheTroupe/Thumbnails/thumblarge.jpg");
  } else {
   $("#SouthernCalifornia").attr('src', "media/Photos/SouthernCalifornia/Thumbnails/thumb.jpg");
	$("#NewYork").attr('src', "media/Photos/NewYork/Thumbnails/thumb.jpg");
	$("#Connecticut").attr('src', "media/Photos/Connecticut/Thumbnails/thumb.jpg");
	$("#PuntaIslita").attr('src', "media/Photos/PuntaIslita/Thumbnails/thumb.jpg");
	$("#JoshuaTree").attr('src', "media/Photos/JoshuaTree/Thumbnails/thumb.jpg");
	$("#TheTroupe").attr('src', "media/Photos/TheTroupe/Thumbnails/thumb.jpg");
  }
}


resize();
$(window).on('resize', resize);
