var search = $('#search');
var result = $('#result');

search.keyup(function() {
  if (search.val() === '') {
    result.html('');
    return;
  }

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      format: 'json',
      srsearch: search.val()
    },
    dataType: 'jsonp',
    success: function(response) {
      var html  = '';
      response.query.search.map(function(cardFactory) {
        html += ' <div class="row">';
        html += '   <div class="col s12">';
        html += '     <a href="https://en.wikipedia.org/wiki/' + cardFactory.title + '" target="_blank">';
        html += '       <div class="card teal">';
        html += '         <div class="card-content white-text">';
        html += '           <span class="card-title">' + cardFactory.title + '</span>';
        html += '           <p>' + cardFactory.snippet + '</p>';
        html += '         </div>';
        html += '       <div/>';
        html += '     </a>';
        html += '   <div/>';
        html += ' </div>';
      });
    result.html(html);
    }
  });
});
