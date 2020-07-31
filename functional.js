let states = ["Kansas", "Nebraska",
 "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"

let urlify = (string) => {
	return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach(function(element) {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

//urls: Functional version

let functionalUrls = (elements) => {
	return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Full urls

let fullUrls = (elms) => {
	return elms.map( elm => `http://example.com/${urlify(elm)}`);
}
console.log(fullUrls(states));

// singles : Imperative version

function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});
	return singles;
}
console.log(imperativeSingles(states));

// singles: functional

let functionalSingles = (elms) => {
	return elms.filter(elm => elm.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

let justDakota = (list) => {
	return list.filter(item => item.includes("Dakota"));
}

let twoWordStates = (elms) => {
	return elms.filter(elm => elm.split(/\s+/).length > 1);
}
console.log(justDakota(states));
console.log(twoWordStates(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elms) {
	let total = 0;
	elms.forEach( n => total += n );
	return total
}
console.log(imperativeSum(numbers));

//sum: Functional solution

let functionalSum = (elms) => {
	return elms.reduce((total, n) => { return total += n});
}
console.log(functionalSum(numbers));

let timesThemAll = (nums) => {
	return nums.reduce((total, num) => { return total *= num});
}
console.log(timesThemAll(numbers));