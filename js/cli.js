var JournalEntry = require('./journal.js').JournalEntry;
var prompt = require('prompt');
prompt.start();

// var title = prompt('Enter a title for your journal entry');
// var date = prompt('Enter the date of your entry');
// var body = prompt('Write your journal entry');

prompt.get(['title', 'date', 'body'], function(err, entry) {
  var entry = new JournalEntry(entry.title, entry.date, entry.body);
  var result = entry.wordCount();
  console.log(result);
});


// var JournalEntry = require('./journal.js').JournalEntry;
// var input = new JournalEntry('Cat needs', '03132016', 'Today I went to the store and bought food for my cat.');
// var result = input.wordCount();
// console.log(result);
