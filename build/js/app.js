(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.JournalEntry = function(title, date, body) {
  this.title = title;
  this.date = date;
  this.body = body;
};

exports.JournalEntry.prototype.wordCount = function() {
  var string = this.body;
  var string_array = string.split(" ");
  return string_array.length;
};

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
