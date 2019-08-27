const repeatString = function(word, count) {
	
	if (count < 0) {
		return "ERROR";
	}

	result = "";	
	for (var i=0; i<count; i++) {
		result = result + word;	
	}
	return result;
}

module.exports = repeatString
