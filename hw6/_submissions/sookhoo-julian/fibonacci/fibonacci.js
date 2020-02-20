export const getFibNumber = steps => {
	if (steps == 0){
		return 0;
	} else if (steps == 1){
		return 1;
	} else {
		var first = 0;
		var second = 1;
		var change = 0;
		for(var i = 2; i <= steps; i++) {
			change = first;
			first = current; 
			current = first + second;
		}
	}

    return current;
}