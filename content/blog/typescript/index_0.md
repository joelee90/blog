---
title: TypeScript Introduction
date: "2021-12-16"
tags: typescript
---

Example of converting JavaScript to TypeScript.<br/>
실행 : tsc filename.ts

```
# TypeScript
```

```
JavaScript

var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});

```

```
TypeScript

const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

```
