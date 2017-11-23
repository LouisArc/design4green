$(function() {
  $('#submit').click(function () {
    $.getJSON('data.json', function(data) {
      $('#r').html('<p><b>Speciality</b> : ' + data.specialty + '</p>');
      $('#r').append('<p><b>Name</b> : ' + data.first_name + '</p>');
      $('#r').append('<p><b>Surname</b> : ' + data.last_name + '</p>');
      $('#r').append('<p><b>City</b> : ' + data.city + '</p>');
    });
  });
});
