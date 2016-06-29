
$(function() {
  
  $(".menu-close").hide();
  
  $(".menu-open").on("click", function() {
    $(".menu-open").hide();
    $(".menu-close").show();
    
    $(".navbar-nav")
    .addClass("text-right")
    .css(
      "display", "inline-block"
    )
    .children().css(
      "display", "inline-block"
    )
    .children('a').css({
      "margin": "0 5px 0 0",
      "padding": "7.5px 10px"
    });
    
  $(window).resize(function() {
    if ($(window).width() > 580) {
      $(".navbar-nav").css(
        "margin", "14px 0 0 0"
      );
    }
  });
    
  $(window).resize(function() {
  if ($(window).width() < 782) { 
    $(".menu-open").show();
    $(".menu-close").hide();
  }
});
    
    $(window).resize(function() {
    if ($(window).width() > 782) {
      $(".menu-open").hide();
      $(".menu-close").hide();
      $(".navbar-nav").css({
        "display": "inline-block",
        "margin": "0"
      })
      .children().children('a').css({
        "margin": "0",
        "padding": "20px 15px"
      });
      $(".navbar-default").css(
        "border-bottom", "1px solid #000"
      );
    } else {
      $(".navbar-nav").children().children('a').css(
        "padding", "7.5px 10px"
      );
      $(".navbar-default").css(
        "border-bottom", "none"
      );
    }
  })
    
    $(".navbar-default").css(
      "border-bottom", "none"
    );

  });
  
  $(".menu-close").on("click", function() {
    $(".menu-close").hide();
    $(".menu-open").show();
    $(".navbar-nav").css(
      "display", "none"
    );
  });
  
});
