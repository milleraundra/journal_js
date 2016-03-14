var JournalEntry = require('./../js/journal.js').JournalEntry;
var moment = require('./../js/lib/moment.js');

$(document).ready(function(){
  $("#journal").submit(function(event){
    event.preventDefault();
    var title = $('input#title').val();
    var date = $('input#date').val();
    var body = $('input#body').val();
    var output = new JournalEntry(title, date, body);

    $('.output').append("<p>" + output.title + "</p><p>" + moment(output.date).format('MMM Do YY') + "</p><p>" + output.body + "</p>");
  });
});
