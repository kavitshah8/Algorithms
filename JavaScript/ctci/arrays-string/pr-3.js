// 1.3: Is str1 is the permutation of str2?

// Ask Interviewer: 
// Are our permutations case sensitive? Yes
// Is whitespace significant? Yes

function isPermutation(str1, str2) {

	if(str1.length !== str2.length)
		return false;

	var sortStr1 = str1.split('').sort().join('');
	var sortStr2 = str2.split('').sort().join('');

	return sortStr1 === sortStr2;
}

console.log(isPermutation('dog','god')); // true
console.log(isPermutation('foo','bar')); // false
console.log(isPermutation('foo','fooo')); // false

// -----

function isPermute(str1, str2) {
    if(str1.length !== str2.length)
        return false;

    // create a character count for the string
    var str1Count = {};
    [].forEach.call(str1, function(ch){
        str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1;
    })
	
    // compare the character count with the second string
    for (var i = 0; i < str2.length; i++) {   
        if(!str1Count[str2[i]]) {
			return false;
		} else {
            str1Count[str2[i]] -= 1;
        }
    }
    return true;
}

console.log(isPermute('dog','god')); // true
console.log(isPermute('foo','bar')); // false
console.log(isPermute('foo','fooo')); // false
