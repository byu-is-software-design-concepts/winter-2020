export const moveZeroesToEnd = arr => {
  // TODO
  //int iCount0 = 0;
  for(int i = 0, i < arr.length, i++) {
  	if (arr[i] == 0) {
  		//iCount0++;
  		arr = arr.splice(i,1);
  		arr.push(0);
  	}
  }

  return arr
}
