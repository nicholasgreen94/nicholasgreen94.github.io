$(function() {
  
  var email = $("input[type=email]");
  var password = $("input[type=password]");
  var url = this.href;
  
  var loadingHTML = $("<div class='loading'><h2 class='text-center'>Loading</h2></div>");
  var submittedHTML = "<div class='loaded'><i class='fa fa-thumbs-o-up text-center'></i><h2 class='text-center'>Thanks for Signing Up!</h2></div>";
  var failedHTML = "<div class='failed'><i class='fa fa-exclamation-triangle text-center'></i>";
  failedHTML += "<h2 class='text-center'>Oh No! Something went wrong were on it to try and fix it</h2>";
  failedHTML += "</div>";
  
  $("form").on("submit", function(event) {
    event.preventDefault();
    $("form").serialize();
    $.ajax({
      url: url,
      timeout: 2000,
      type: "POST",
      beforeSend: function() {
        $("#content").html(loadingHTML);
        $("footer").css(
          "padding-top",  "224px"
        );
      }
    })
    .done(function() {
      $("#content").html(submittedHTML);
      $("footer").css(
        "padding-top", "132px"
      );
    })
    .fail(function() {
      $("#content").html(failedHTML);
      $("footer").css(
        "padding-top", "24px"
      );
      })
    .always(function() {
      console.log("complete");
    });
  });
});