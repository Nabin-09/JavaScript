JavaScript Execution context :
 - {}  : Global Execution context 
 - Function Execution context
 - Eval Execution context (not important)
  NOTE : **JAVASCRIPT IS A SINGLE THREADED LANGUAGE, Everything's a process.**
 We have two phases while running a program :
 - Memory Creation phase/Creation phase : memory is allotted to variables,  functions and Objects,
 - Execution Phase : Process execution happen in this phase
 ```
 let val1 = 10;
 let val2 = 5;
 fucntion addNum(){
 let total = val1 + val2
 return total
 }
	 let result = addNum(val1,val2)
	 let result2 = addNum(10,2)
```