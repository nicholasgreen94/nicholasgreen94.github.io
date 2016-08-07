$(function() {
  
// initial variables
var webpage = $("html, body");
var $project_description = $(".project-description");
var $btn_wrap = $(".btn-wrap");
var $btn_reveal = $(".btn-reveal");
var $btn_minimize = $(".btn-minimize");

// initially hiding work
$project_description.hide();
$btn_wrap.hide();

// When user clicks on the reveal button, slide down the hidden p and .btn-wrap
// remove class of .project-initial and add class of .project-click
// remove current grid sizes for bigger grid sizes
$btn_reveal.on("click", function() {
  $(this).hide(); // hide button
  $(this).parent("section")
            .slideDown(500)
            .removeClass("large-5 large-offset-1")
            .addClass("large-offset-1 large-10"); // show .project-p
            
  $(this).next()
            .show(); // Show .btn-wrap
            
  $(this).parent("section")
            .find("article")
            .removeClass("project-initial")
            .addClass("project-click"); // remove .project-inital, add .project-click
            
  $(this).parent("section")
            .find(".project-description")
            .slideDown(); // Show .project-description

  $(this).parent("section")
            .next("section")
            .removeClass("large-5 large-offset-1 large-offset-0")
            .addClass("large-offset-1 large-10"); // Find next section and give it the following classes
  
  $(this).parent("section")
            .prev("section")
            .removeClass("large-5 large-offset-1 large-offset-0 end")
            .addClass("large-offset-1 large-10"); // give the next section the following classes
});
  
// When user clicks on the minimize button, slide up .project-p and .btn-wrap
// add class of .project-initial and remove class of .project-click
// fade in the reveal button
$btn_minimize.on("click", function() {
  $(this).parent(".btn-wrap")
  .hide(); // hide .btn_wrap
  
  $(this).parent(".btn-wrap")
  .parent("section")
  .find(".project-description")
  .slideUp(); // hide .project-description
  
  $(this).parent(".btn-wrap")
  .parent("section")
  .find("article")
  .removeClass("project-click")
  .addClass("project-initial"); // remove .project-click, add .project-initial

  $btn_reveal.show(); // show reveal button
});
  
  

});// End jQuery
