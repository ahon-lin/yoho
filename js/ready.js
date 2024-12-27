$(document).ready(function() {
    $(document).on('click', '.terms', function() {
        $('.popup').css('display', 'flex');
    });

    $(document).on('click', '.close-btn', function() {
        $('.popup').css('display', 'none');
    });
	jsInit();
});