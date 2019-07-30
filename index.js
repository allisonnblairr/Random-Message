var button = $('.button')
var header = $('.header')
var text = $('.text')
var paragraph = $('.paragraph')
var hello= $('.hello')

var quotes = ["Happiest girls are the prettiest", "The challenges in life shape you into the person you were meant to be", "Everything that happens has a purpose", "Go get some Ice Cream, you deserve it", "You're beautiful", "Laughing burns more calories"]


// button.on("click", inspirational);
//
// function inspirational() {
//   console.log ("hello");
//   console.log(quotes);
// }

button.on("click", pickQuote);
function pickQuote() {
  event.preventDefault();
  var random = Math.random() * quotes.length;
  var rounded = Math.floor(random);
  var quote = quotes[rounded];
  hello.text(quote);
}
