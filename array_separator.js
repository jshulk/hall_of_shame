function zeroSeparator(arr){
	var start = 0,
		end = arr.length - 1;

	while( start <= end ){
		if( arr[end] === 0 ){
			end--;
		} else if( arr[start] === 0 && arr[end] !==0 ){
			var temp = arr[start];
			arr[start] = arr[end];
			arr[end] = temp;
			start++;
			end--;
		} else if( arr[start] !== 0 ){
          start++;
        }
	}

	return arr;
}