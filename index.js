// Explore

var version = require('./package').version;

function explore(source) {
	return new Promise(function(yay, no) {
		try {
			return yay(require(source));
		} catch(err) {
			console.log(err.stack);
			console.log(source);
			return no(err);
		}
	});
}

module.exports = explore;
