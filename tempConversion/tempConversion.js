const ftoc = function(temp) {
	result = (temp - 32) * (5/9);
	return Math.round(result*10)/10;
}

const ctof = function(temp) {
	result = temp * (9/5) + 32;
	return Math.round(result*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
