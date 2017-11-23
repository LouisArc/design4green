$(function() {
  $('#charger').click(function() {
      $.getJSON('fichier.json', function(donnees) {
      $('#r').html('<p><b>Speciality</b> : ' + donnees.Speciality + '</p>');
      $('#r').append('<p><b>Name</b> : ' + donnees.Name + '</p>');
      $('#r').append('<p><b>Surname</b> : ' + donnees.Surname + '</p>');
      $('#r').append('<p><b>City</b> : ' + donnees.City + '</p>');
    });
  });
});
