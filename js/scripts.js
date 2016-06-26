$(function() {
  
  // initial variables

  var $project_p = $(".project-p");
  var $btn_wrap = $(".btn-wrap");
  var $btn_reveal = $(".btn-reveal");

  // initially hiding work
  $project_p.hide();
  $btn_wrap.hide();

  $btn_reveal.on("click", function() {
    $(this).hide(); // hide button
    $(this).next()
              .show()
              .addClass("large-offset-2 large-8"); // Show .project-p
              
    $(this).next()
              .next()
              .show(); // Show .btn-wrap
              
    $(this).parent(".project")
              .parent("div")
              .removeClass("large-5 large-offset-1")
              .addClass("large-offset-1 large-10");
              
    $(this).parent(".project")
              .parent("div")
              .next("div")
              .removeClass("large-5 large-offset-1 large-offset-0 end")
              .addClass("large-offset-1 large-10 end");
  });

});
