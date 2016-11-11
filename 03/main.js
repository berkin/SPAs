var hoisted = "hoisted";

(function() {
	console.log(hoisted);

	var hoisted = "test"; 
})();

// equals

var hoisted = "hoisted";

(function() {
	var hoisted = undefined;
	console.log(hoisted);

	hoisted = "test"; 
})();


// for functions

var hoistedF = function() { return "hoisted" }
(function() {
	console.log(hoistedF());

	var hoistedF = function() { return "test" } ; 
})();