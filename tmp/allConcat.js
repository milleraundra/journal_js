var JournalEntry = require('./../js/journal.js').JournalEntry;

$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();
    var title = $('input#title').val();
    var date = $('input#date').val();
    var body = $('input#body').val();
    var output = new JournalEntry(title, date, body);
    $('.output').append("<li>" + output.wordCount() + "</li>");
  });
});

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
