function Log() {
	console.log(arguments);
}

class ExampleClass {
	@Log
	greet(){
	}
}