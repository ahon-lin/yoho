$(document).ready(function() {
	jsInit();
	var windowlocation = $(location).attr('href');
  	$(".shareLine").attr("href", "https://social-plugins.line.me/lineit/share?url=" + windowlocation);
 	$(".shareFacebook").attr("href", "http://www.facebook.com/share.php?u=" + windowlocation);
 	
    $("#mobile_share").on("click", function() {		
		var title = $("meta[name='title']").attr("content");
 		if (navigator.share) {
			navigator.share({
			title: '生生優活診所',
			text: title,
			url: windowlocation,
      })
      .then(() => console.log('成功分享'))
      .catch((error) => console.log('分享失敗', error));
	  } else {
        console.log('你的瀏覽器不支援Web Share API');
      }
	});

	
    $(document).on('click', '.terms', function() {
        $('.popup').css('display', 'flex');
    });

    $(document).on('click', '.close-btn', function() {
        $('.popup').css('display', 'none');
    });
	jsInit();
});