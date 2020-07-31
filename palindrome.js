
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

String.prototype.blank = function() {
	let onlyBlanks = /^\s*$/;
	return onlyBlanks.test(this);
}

// slicing
Array.prototype.last = function() {
	return this.slice(-1)[0];
}

// index

Array.prototype.last = function() {
	return this.[this.length - 1];
}
