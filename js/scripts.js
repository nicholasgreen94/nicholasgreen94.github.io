$(function() {
  
// initial variables
var webpage = $("html, body");
var $close_icon = $(".close-icon");
var $menu_icon = $(".menu-icon");
var $project_description = $(".project-description");
var $btn_wrap = $(".btn-wrap");
var $btn_reveal = $(".btn-reveal");
var $btn_minimize = $(".btn-minimize");

// initially hiding work
$project_description.hide();

$close_icon.hide();

$menu_icon.on("click", function() {
  $(this).hide();
  $close_icon.show();
});

$close_icon.on("click", function() {
  $(this).hide();
  $menu_icon.show();
});


// When user clicks on the reveal button, slide down the hidden p and .btn-wrap
// remove class of .project-initial and add class of .project-click
// remove current grid sizes for bigger grid sizes
$btn_reveal.on("click", function() {
  $(this).hide(); // hide button
  $(this).parent("div")
            .parent("article")
            .parent("section")
            .removeClass("large-7 large-5") // Change size from original to fill whole row
            
  $(this).parent("div")
            .parent("article")
            .find($btn_wrap)
            .show(); // Show .btn-wrap
            
  $(this).parent("div")
            .parent("article")
            .removeClass("project-initial")
            .addClass("project-click"); // remove .project-inital, add .project-click
            
  $(this).parent("div")
            .parent("article")
            .find(".project-description")
            .fadeIn(); // Show .project-description

  $(this).parent("div")
            .parent("article")
            .parent("section")
            .next("section")
            .removeClass("large-7 large-5")
            .addClass("large-12"); // Find next section and give it the following classes
  
  $(this).parent("div")
            .parent("article")
            .parent("section")
            .prev("section")
            .removeClass("large-7 large-5 end")
            .addClass("large-12"); // give the next section the following classes
});
  
// When user clicks on the minimize button, slide up .project-p and .btn-wrap
// add class of .project-initial and remove class of .project-click
// fade in the reveal button
$btn_minimize.on("click", function() {
  $(this).parent($btn_wrap)
            .fadeOut(); // hide .btn_wrap
  
  $(this).parent($btn_wrap)
            .parent("div")
            .fadeOut(); // hide .project-description
  
  $(this).parent($btn_wrap)
            .parent("div")
            .parent("article")
            .removeClass("project-click")
            .addClass("project-initial"); // remove .project-click, add .project-initial

  $(this).parent($btn_wrap)
            .parent("div") 
            .next()
            .find("button")
            .show(); // show reveal button
});
  
  

});// End jQuery
