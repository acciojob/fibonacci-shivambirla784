function fibonacci(num) {
// your code here
	if(num<2) return num;
	return fibonacci(num-1) + fibonacci(num-2);
	
}

module.exports = fibonacci;
