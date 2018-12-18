$(document).ready(function() {
  $("#demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      auto : true,
      items : 1,
      dots : false,
      nav : true,
      paginationSpeed : 400,
      singleItem:true,
      navText : ['<div>Next Testimonial   <span<img src="assets/images/next.png"></span></div' , '<span>Next Testimonial   <img src="assets/images/next.png"></span>']
  });
    $(".bttn-1").click(function(){
        if($(this).find('.bttn').hasClass('cross')){
            $("#a").css("top", "0px");
            $("#a").css("transform", "rotate(180deg)");
            $("#b").css("opacity", "1");
            $("#c").css("top", "16px");
            $("#c").css("transform", "rotate(180deg)");
            $(this).find('.bttn').removeClass('cross');
            $(this).find('.bttn').removeClass('fixed');
        } 
        else {
          $("#a").css("top", "12px");
          $("#a").css("transform", "rotate(45deg)");
          $("#b").css("opacity", "0");
          $("#c").css("top", "12px");
          $("#c").css("transform", "rotate(-45deg)");
          $(this).find('.bttn').addClass('cross');
          $(this).find('.bttn').addClass('fixed');
        }
    });
  $(".bttn-1").click(function(){
    $(".v-alignment").animate({
      width: "toggle"
    });

  });

});