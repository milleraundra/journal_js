$(document).ready(function(){
  $("#comment").submit(function(event){
    event.preventDefault();
    var email = $("input#email").val();
    var comment_body = $("input#comment_body").val();
    $("#comment").hide();
    $("#notification").prepend('<p>' + email + "your comment:" + comment + '</p>');
  });
});
