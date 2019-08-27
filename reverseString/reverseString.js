const reverseString = function(word) {
	length = word.length;
	result = "";

	for (var i=0; i<length; i++) {
		result = result + word.charAt(length - 1 - i);	
	}

	return result;
}

module.exports = reverseString
