
module.exports = function generator (amount) {
		var numArr = [];

		if (typeof amount !== 'number'){
				return numArr;
		} 
			for (var i = 0; i < amount; i++) {
				numArr[i] = i;
			}
			var currentIndex = numArr.length, temporaryValue, randomIndex;

  		//While statment to shuffle
		  while (0 !== currentIndex) {

		    // Find a remaining element
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = numArr[currentIndex];
		    numArr[currentIndex] = numArr[randomIndex];
		    numArr[randomIndex] = temporaryValue; // shuffle the element back through.
		  }
		  return numArr;
  };
