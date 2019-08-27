const removeFromArray = function(list) {
	
	for (var i=0; i<arguments.length; i++) {
		
		var current = arguments[i];
		for (var j=0; j<list.length; j++) {

			if (current == list[j]) {
				list.splice(j, 1);
			}
		}
	}

	return list;
}

module.exports = removeFromArray
