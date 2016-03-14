exports.JournalEntry = function(title, date, body) {
  this.title = title;
  this.date = date;
  this.body = body;
};

exports.JournalEntry.prototype.wordCount = function() {
  var string = this.body;
  var string_array = string.split(" ");
  return string_array.length;
}
