$(document).ready(function(){
  $("#comment").submit(function(event){
    event.preventDefault();
    console.log("here we go!");
    var email = $("input#email").val();
    var comment_body = $("input#comment_body").val();
    console.log(comment_body);
    $("#comment").hide();
    $("#notification").prepend('<p>' + email + '</p><p>'+ comment_body + '</p>');
  });
});
