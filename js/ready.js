$(document).ready(function() {
    $('.terms').click(function() {
      $('.popup').css('display', 'flex');
    });
  
    $('.close-btn').click(function() {
      $('.popup').css('display', 'none');
    });

});