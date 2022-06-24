---
title: JavaScript Execution Context
date: "2022-01-09"
tags: javascript
---

**Execution Context** is an abstract concept of an environment where JavaScript code is evaluated and executed. </br>
JavaScript runs inside an execution context.

##### Three types of Execution Context:

&ensp; <U>1. Global Execution Context</U> </br>
&ensp; - Code that is not inside of any function.</br>
&ensp;&ensp; a. Creates global object which is a window object.</br>
&ensp;&ensp; b. Sets the value of 'this' to equal to the global object.</br>
&ensp; There can only be one global execution context in a program.

&ensp; <U>2. Functional Execution Context</U></br>
&ensp;&ensp; Everytime a function is invoked, a brand new execution context is created for that function. </br>
&ensp;&ensp; Each function has its own execution context, but its created when its called or invoked.

&ensp; <U>3. Eval Function Execution Context</U> (isn't used by JavaScript)</br>

##### Execution Stack</br>

Stack with LIFO structure, which is used to store all thee execution context created during code execution.</br>
&ensp; Whenever the engine finds a function invocation, it creates new execution context for that function </br>
&ensp; and pushes it to the top of the stack.</br>

How is the "Execution Context" created? </br>
&ensp; 1) Creation Phase</br>
&ensp; 2) Execution Phase</br>

&ensp; <U>1) Creation Phase</U></br>
&ensp;&ensp; Execution phase is created during creation phase. </br>

&ensp; 1. Lexical Environment. </br>
&ensp; 2. Variable Environment. </br>

&ensp;&ensp; Lexical Environment: A structure that holds identifier-variable mapping. </br>
&ensp;&ensp;&ensp; (identifier - refers to name of variable of function) </br>
&ensp;&ensp;&ensp; (variable - refers to actual object:function, object, primitive value) </br>

&ensp;&ensp;&ensp;&ensp; Lexical Environment has three components: </br>
&ensp;&ensp;&ensp;&ensp;&ensp; 1. Environment Record </br>
&ensp;&ensp;&ensp;&ensp;&ensp; 2. Reference to outer environment </br>
&ensp;&ensp;&ensp;&ensp;&ensp; 3. This Binding </br>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Environmental Record: place where the variable, function declaration are stored inside lexical environment.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 1. Declarative environment record</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; - stores varible, function declaration</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; - lexical environment for function code contains a declarative environmental record</br>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 2. Object environment record</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; - store global binding object</br>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Reference to the outer environment:</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Means it has access to its outer lexical encvironment.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; JavasScript engine can look for variable inside the outer environment if not found in current lexical environment.</br>

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; This Binding</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; value of 'this' is determined or set.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; In global execution context, 'this' refers to global object/window object.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; In Function execution context, the value of 'this' depends on how function is called.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;If called by an object reference, then the value of 'this' is set to that object.</br>
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Otherwise, the value of 'this' is set to the global object or undefined('strict-mode')</br>

```
    const person = {
        name: 'peter',
        birthYear: 1994,
        calcAge: function() {
        console.log(2018 - this.birthYear);
        }
    }

person.calcAge();
// 'this' refers to 'person', because 'calcAge' was called with
//'person' object reference

const calculateAge = person.calcAge;
calculateAge();
// 'this' refers to the global window object, because no object reference was given
```

&ensp;&ensp;Variable Environment : is also a lexical environment.</br>
&ensp;&ensp;&ensp; - In ES6, Lexical Environment is used to store function declaration, variable(let, const) bindings. </br>
&ensp;&ensp;&ensp; Variable Environment is used to store(var) bindings only.

&ensp; <U>2) Execution Phase</U></br>
&ensp; Assignment to all variables are done, and the code is executed.

source: https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
