$('#submit').click(function () {
  $.getJSON('data/data.json', function (data) {
    dump(data);
  });
});
