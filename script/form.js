$(function() {
  $('#submit').click(function () {
    $.getJSON('data/data.json', function(data) {
      console.log(data);
    });
  });
});
