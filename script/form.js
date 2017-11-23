$(function(){
  $("#submit").click(function(){
    /* set no cache */
    $.ajaxSetup({ cache: false });
    console.log($_POST);
    $.getJSON("/data/data.json", function(data){
      var html = [];
      html.push(
        "<table>"+
           "<tr>"+
               "<th>Speciality</th>"+
               "<th>First name</th>"+
               "<th>lastname</th>"+
               "<th>city</th>"+
           "</tr>"
      );
      /* loop through array */
      $.each(data, function(index, d){
        if (d.specialty==document.getElementById("specialty").value || document.getElementById("specialty").value=="empty") {
        html.push(
             "<tr>"+
                "<td>" + d.specialty + "</td>"+
                 "<td>" + d.first_name + "</td>"+
                 "<td>" + d.last_name + "</td>"+
                 "<td>" + d.city + "</td>"+
            "</tr>");
        }
      });
      html.push(
        "</table>"
      );
      $("#r").html(html.join(''));
    }).error(function(jqXHR, textStatus, errortdrown){ /* assign handler */
      /* alert(jqXHR.responseText) */
      alert("error occurred!");
    });
  });
});
