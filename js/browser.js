var JournalEntry = require('./journal.js').JournalEntry;

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
