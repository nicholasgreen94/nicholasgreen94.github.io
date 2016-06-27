$(function() {
  
// initial variables
var $project_p = $(".project-p");
var $btn_wrap = $(".btn-wrap");
var $btn_reveal = $(".btn-reveal");
var $btn_minimize = $(".btn-minimize");

// initially hiding work
$project_p.hide();
$btn_wrap.hide();

$btn_reveal.on("click", function() {
  $(this).hide(); // hide button
  $(this).next()
            .slideDown("500")
            .addClass("small-offset-1 small-10  large-offset-1 large-10"); // Show .project-p
            
  $(this).next()
            .next()
            .show(); // Show .btn-wrap
            
  $(this).parent(".project")
            .removeClass("project-initial").addClass("project-click")
            .parent("div")
            .removeClass("large-5 large-offset-1")
            .addClass("large-offset-1 large-10");
            
  $(this).parent(".project")
            .parent("div")
            .next("div")
            .removeClass("large-5 large-offset-1 large-offset-0 end")
            .addClass("large-offset-1 large-10 end");
            
  $(this).parent(".project")
            .parent("div")
            .prev("div")
            .removeClass("large-5 large-offset-1 large-offset-0 end")
            .addClass("large-offset-1 large-10");
});
  
$btn_minimize.on("click", function() {
  $(this).parent(".btn-wrap")
  .hide(); // hide .btn_wrap
  
  $(this).parent(".btn-wrap")
  .prev()
  .slideUp(); // hide .project-p
  
  $(this).parent(".btn-wrap")
  .prev().prev()
  .delay("500")
  .slideDown(); // Show .btn-reveal
  
  $(this).parent(".btn-wrap")
  .parent(".project")
  .removeClass("project-click").addClass("project-initial");
});
  
  

});// End jQuery
