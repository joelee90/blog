---
title: TypeScript Types - 1
date: "2021-12-20"
---

```
# TypeScript
```

### [Using Types]

TypeScript's type system only helps during development, because browsers don't have built-in TypeScript support.

JavaScript is dynamically typed, which means for example, we can check the current type of something at runtime.

- JavaScript uses 'dynamic types' (resolved at runtime)

TypeScript is statically typed, which means types of variables and parameters are defined during development.

- TypeScript uses 'static types' (set during development)
- Type Casing: core primitive types are all lowercase.

#### [Using Types]

TypeScript has builtin feature called type inference - to understand which type you have in a certain variable or constant.

#### [Quiz]

```
Does this code rely on type inference?
const age: number = 29;

Not really - a type is assigned explicitly as well.
```

#### [Object Types]

```
const person : {
    name: string;
    age: number;
} = {
    name: 'Joe',
    age: 30
}
```

#### [Array Types]

```
const person : {
    name: string;
    age: number;
    hobbies: ['reading', 'walking']
} = {
    name: 'Joe',
    age: 30
}

let favoriteActivity : string [];
favoriteActivity = ['sports']

```

#### [Tuples]

Fixed-length array

```
role: [number, string]
role: [2, 'author']
```

#### [Enums]

```
enum Role {ADMIN, READ_ONLY, AUTHOR}
enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 300}

const person : {
    name: 'Joe',
    age: 30,
    role: Role.ADMIN
}

used for type checks in if()
Used for identifiers for human readable
and have some mapped value behind the scences.

```

#### [Any]

Any kind of value, no-specific type assignment.

#### [Union Types]

```
function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26)
const combinedNames = combine('Joe', 'Soo')
```

Type that can be more than one type by using pipe |

#### [Literal Types]

```
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26. 'as-number')
const combinedAges = combine('30', '26'. 'as-number')
const combinedNames = combine('Joe', 'Soo', 'as-string')
```

Identifier : resultConversion

'+' front of input1, input2 converts string into number.(or could use parseFloat)
When you want to take number that is typeof string and still calculate, Identifier can be used.

#### [Types Alias / Custom Types]

```
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    ) { ...
    }
```

Declare and make reusable type which can be used anywhere wanted.
Can be used to 'create' own types.
Can also provide an alias to object type.

```
type User = { name: string; age: number };
const u1: User = { name: 'Joe', age: 30 };
```

<br/>
<br/>
<br/>
<br/>

#### Questions

? string + number => string : why? <br/>
? when to use let || const

```
let : block scoped
- can be updated but not re-declared.

const : block scoped
- cannot be updated or re-declared.

```
