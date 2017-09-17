$(document).ready(function(){

  $("#Add").click(function get_Food(){
     var z= $("input.form-control").val();
      $("#altcolor").append("<tr><td>"+z+"</td></tr>");
      $("form")[0].reset();
    });

    $('input.form-control').keypress(function (e) {
    if (e.which == 13) {
    $('#Add').click();
    return false;    //<---- Add this line
  }
});
});
