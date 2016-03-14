var journalEntry = require('./journal.js').journalEntry;

var input = new journalEntry('Cat needs', '03132016', 'Today I went to the store and bought food for my cat.');
var result = input.wordCount();
console.log(result);
