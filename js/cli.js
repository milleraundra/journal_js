var JournalEntry = require('./journal.js').JournalEntry;
var prompt = require('prompt');
prompt.start();

prompt.get(['title', 'date', 'body'], function(err, entry) {
  var journal = new JournalEntry(entry.title, entry.date, entry.body);
  var result = journal.wordCount();
  console.log(entry);
  console.log(result);
});


// var JournalEntry = require('./journal.js').JournalEntry;
// var input = new JournalEntry('Cat needs', '03132016', 'Today I went to the store and bought food for my cat.');
// var result = input.wordCount();
// console.log(result);
