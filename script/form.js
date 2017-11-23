$(function(){
  $("#submit").click(function(){
    /* set no cache */
    $.ajaxSetup({ cache: false });

    $.getJSON("/data/data.json", function(data){
      var html = [];
      html.push(
        "<table>"+
           "<tr>"+
               "<th>Speciality</th>"+
               "<th>First name</th>"+
               "<th>lastname</th>"+
               "<th>city</th>"+
           "</tr>"+
        "</table>"+
        "<table>"
      );
      /* loop through array */
      $.each(data, function(index, d){
        html.push(
             "<tr>"+
                "<td>" + d.specialty + "</td>"+
                 "<td>" + d.first_name + "</td>"+
                 "<td>" + d.last_name + "</td>"+
                 "<td>" + d.city + "</td>"+
            "</tr>");
      });
      html.push(
        "</table>"
      );
      $("#r").html(html.join('')).css("background-color", "orange");
    }).error(function(jqXHR, textStatus, errortdrown){ /* assign handler */
      /* alert(jqXHR.responseText) */
      alert("error occurred!");
    });
  });
});
