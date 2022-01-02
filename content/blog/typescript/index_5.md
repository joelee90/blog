---
title: Next-generation JavaScript & TypeScript
date: "2021-12-29"
---

```
# TypeScript
```

const: cannot be changed.
let: can be changed.

Arrow Functions

```
const add = (a: number, b: number) => a + b;
```

Default Function Parameters
Has to be at the last in the argument list.

```
const add = (a: number, b: number = 1) => a + b;
add(5) // returns 6.
```

Spread Operator

```
[Arrays]

const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking'];

activeHobbies.push(hobbies[0]); => activeHobbies.push(...hobbies);

...array => specify or point the array or object that needs to be spread.
Pulls out all the elements of that array as a list of individual values.

```

Push works on 'const' because arrays are objects, which are reference values,
when push, changes the memory, but not the address.

```
[Objects]

const person = {
    name: "Joe",
    age: 30
}

const copied = person; // Copying the pointer at this object memory.

const copiedSpread = { ...person }; // key, value pair of person is added to current empty object.

Perfect copy of the original object and not just of the pointer that points to the object memory.
```

Pulls out all the elements(key, value pairs),

Additional reference: https://academind.com/tutorials/reference-vs-primitive-values

Summary of the article:

Primitive values: numbers, string, boolean, undefined, null - simple building blocks.

Reference Types: Objects and Arrays - Holds properties that in turn have primitive values.

[Memory management]

JavaScript knows two types of memories: Stack and Heap.

Stack: easy-to-access memory that simply manages its items as a stack. Only items which size is known in advance cna go onto the stack.

Heap: For items which cannot pre-determine the exact size and structure. Since objects and arrays can be mutated and change at runtime, have to go into the heap.
For each heap item, the exact address is stored in a pointer which points at the item in the heap.
This pointer in turn is stored on the stack.

Rest Parameters

```
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add(5, 10, 2, 4, 4)
```

...parameter : will merge all incoming parameters(incoming list of values) into array.

Useful feature for accepting an unlimited amount of arguments.

Array and Object Destructuring

```
[Arrays]

const hobbies = ['sports', 'cooking'];

const hobby1 = hobbies[0];

const [hobby1, hobby2, ...remainingElements] = hobbies;

[Objects]

const person = {
    name: "Joe",
    age: 30
}

const { name, age } = person;

```

Destructuring does not change the original array or object.
