var JournalEntry = require('./journal.js').JournalEntry;

var title = prompt('Enter a title for your journal entry');
var date = prompt('Enter the date of your entry');
var body = prompt('Write your journal entry');

var entry = new JournalEntry(title, date, body);
var result = input.wordCount();
console.log(result);

// var JournalEntry = require('./journal.js').JournalEntry;
// var input = new JournalEntry('Cat needs', '03132016', 'Today I went to the store and bought food for my cat.');
// var result = input.wordCount();
// console.log(result);
