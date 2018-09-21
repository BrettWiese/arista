$(document).ready(function(){
$("nav ul li a").click(function() {
    var navId= $(this).attr("href");
    $("body, html").animate({scrollTop: $(navId).offset().top},500);
    return false;
});
    
$("#social ul li a").click(function(e) {
    var navId= $(this).attr("href");
    $("body, html").animate({scrollTop: $(navId).offset().top},500);
    return false;
});
    
$("#artists #artists-container ul li .artist-logo").click(function(e) {
    var navId= $(this);
    $("body, html").animate({scrollTop: $(navId).offset().top - 200},500);
    return false;
});    
    
// Add class to each link on click. Remove when new link clicked
$('#togglemenu1 ul li a').click(function(e){
	  $('nav ul li a').removeClass('selected');
	  $(this).toggleClass('selected');
});  


    
$(".artist-box").hide();
$(".artist-logo").click(function(e) {
    e.preventDefault();
    // get the clicked element
    var clicked = $(this);
            
    // get the selected element
    var taggedWithSelect = $('.selected-artist');  
    // get the corresponding divs
    var clickPartner = $(clicked.attr('href'));
    var selectPartner = $(taggedWithSelect.attr('href'));
    var notClicked = $('.artist-logo').not(clicked);

            
            // we either want to close this one or open this one and close any others
            // if this one is open, it should be tagged with select
    if( clicked.hasClass('selected-artist') ) {
        clicked.removeClass('selected-artist');
        notClicked.removeClass('blur-logo');
    } else {                
      clicked.addClass('selected-artist').removeClass('blur-logo');
        notClicked.addClass('blur-logo');
      taggedWithSelect.removeClass('selected-artist');
      selectPartner.slideToggle(200);
      
      
    }
    
    clickPartner.slideToggle();
            
  });

});

$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollTop();
      $('.overlay').css({
        opacity: (sT = 0 ? 1 : (sT < 500 ? 1 : (sT > 700 ? .5 : (sT - 500)/-400+1)))
      })
    });
});