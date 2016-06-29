// Document ready function
$(function() {
  // Returns information returned from the form
  $("form").submit(function(event) {
    event.preventDefault();
    // Variables for .getJSON
    var movieTitle = $("#t");
    var url ="http://www.omdbapi.com/?";
    var data = {
      t: movieTitle.val(),
      format: "json"
    };
    function displayMovie(movieInfo) {
      var movieHTML = "<div class='movie'><h2>" + movieInfo.Title + "</h2>";
      movieHTML += "<h3>Release Year: </h3>" + "<span>" + movieInfo.Year + "</span><br>";
      movieHTML += "<h3>Rating: </h3>" + "<span>" + movieInfo.Rated + "</span><br>";
      movieHTML += "<h3>Release Date: </h3>" + "<span>" + movieInfo.Released + "</span><br>";
      movieHTML += "<h3>Runtime: </h3>" + "<span>" + movieInfo.Runtime + "</span><br>";
      movieHTML += "<h3>Director: </h3>" + "<span>" + movieInfo.Director + "</span><br>";
      movieHTML += "<h3>Actors: </h3>" + "<span>" + movieInfo.Actors + "</span><br>";
      movieHTML += "<h3>Plot: </h3>" + "<span>" + movieInfo.Plot + "</span><br>";
      movieHTML += "<h3>Awards: </h3>" + "<span>" + movieInfo.Awards + "</span><br></div>";
      movieHTML += "<div class='poster'><img src='" + movieInfo.Poster + "'><br>";
      $("#movieDetails").html(movieHTML);
    }
    $.getJSON(url, data, displayMovie);
  });
});

