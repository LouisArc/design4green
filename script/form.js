$(function(){
  $("#submit").click(loadData);
});

$(function(){
  $("#specialty").change(loadData);
});

$(function(){
  $("#firstname").change(loadData);
});

$(function(){
  $("#lastname").change(loadData);
});

$(function(){
  $("#city").change(loadData);
});

function loadData(){
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
         "</tr>"
    );
    /* loop through array */
    $.each(data, function(index, d){
      if (d.specialty==document.getElementById("specialty").value || document.getElementById("specialty").value=="empty") {
        if(d.first_name.indexOf(document.getElementById("firstname").value) !== -1)
        {
          if(d.last_name.indexOf(document.getElementById("lastname").value) !== -1)
          {
            if(d.city.indexOf(document.getElementById("city").value) !== -1)
            {
              html.push(
                   "<tr>"+
                      "<td>" + d.specialty + "</td>"+
                       "<td>" + d.first_name + "</td>"+
                       "<td>" + d.last_name + "</td>"+
                       "<td>" + d.city + "</td>"+
                  "</tr>");
            }
          }
        }
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
}
