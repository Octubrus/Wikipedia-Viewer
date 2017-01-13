var search = $('#search');
var result = $('#result');

search.keyup(function() {
  if (search.val() === '') {
    result.html('');
  }

  $.ajax({
    url: "//en.wikipedia.org/w/api.php",
    dataType: "jsonp",
    data: {
      'action': "query",
      'list': "search",
      'format': "json",
      'srsearch': search.val()
    },
    success: function(response) {
      response.query.search.map(function(w) {
        html += '      <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
      });
      html += '  </div>';

      result.html(html);
    }
  });
});




/*
$("#search").autocomplete({
  source: function(request, response) {
    $.ajax({
      url: "http://en.wikipedia.org/w/api.php",
      dataType: "jsonp",
      data: {
        'action': "opensearch",
        'format': "json",
        'search': request.term
      },
      success: function(data) {
        response(data[1]);
      }
    });
  }
});
*/
