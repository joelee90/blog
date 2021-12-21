---
title: TypeScript Types - 2
date: "2021-12-21"
---

```
# TypeScript
```

#### [Function Return Types & 'void']

When functiion does not return anything.

```
function Print(num: number) : void {
    console.log('num' + num)
}
Print()
```

#### [Function as Types]

```
let combineValues = (a: number, b: number) => number;
() => expected return value;
```

#### [Function Types & Callbacks]

```
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
})
```

Callback functions can return something, even if the argument on which they're passed does NOT expect a return value.
