$("#submit").click(function(){
  $("#r").html("submited");
  /* set no cache */
  $.ajaxSetup({ cache: false });

  $.getJSON("/data/data.json", function(data){
    var html = [];
    /* loop through array */
    $.each(data, function(index, d){
      html.push("Specialty : ", d.specialty, ", ",
                "Name : ", d.first_name, ", ",
                "Last Name : ", d.last_name, "<br>");
    });

    $("#r").html(html.join('')).css("background-color", "orange");
  }).error(function(jqXHR, textStatus, errorThrown){ /* assign handler */
    /* alert(jqXHR.responseText) */
    alert("error occurred!");
  });
});
