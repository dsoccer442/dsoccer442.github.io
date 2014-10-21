;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
            $('.scrollToTopTitle').css("display", "block");

		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    // Show images when clicking on event
    $('li.event').click(function() {
        if (document.querySelectorAll)
        var eventNodeList = document.querySelectorAll(".event");
        var eventIDs = []
        for (var i = 0; i < eventNodeList.length; i++) {
            eventIDs.push(eventNodeList[i].id)
        }
        for (var i = 0; i < eventIDs.length; i++) {
            var id = eventIDs[i] + "_images"
            var element = document.getElementById(eventIDs[i] + "_images"),
                style = window.getComputedStyle(element),
                display = style.getPropertyValue('display')
            if (display == "block")
                var curShown = id
        }
        var id = $(this).attr('id');
        var eventID = id + "_images";        
        $("#" + eventID).toggle(1000);
        $("#" + curShown).toggle(1000);
        return false;
    });
    
    
    
	
});

