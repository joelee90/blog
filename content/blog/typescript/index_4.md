---
title: TypeScript Compiler
date: "2021-12-29"
---

```
# TypeScript
```

### [tsconfig.json]

```
inside tsconfig.json

"exlude": [] // exclude from ts compilation process.

*.dev.ts : any file that includes dev.ts.
**/*.dev.ts : any file with that pattern in any folder.

ex) node_modules // exluded by default.

"include": [] // specifically choose which files to include in compilation process.

```

```
"compilerOptions" :
"target" : "es5" // target javascript options
"lib" : ["dom". "es6", "dom.iterable", "scripthost"] // default setup when target is set to es6.
```

```
"allowJs" : true, // include javascript files in compilation,
"checkJs" : true, // will not compile, but will check the syntax and report potential errors.
"jsx" : "preserve" // react.js
```

```
"sourceMap" : true // file.js.map generated. Acts as bridge, understood by modern browsers, to connect javascript files into input files.
```

```
"outDir" : "./dist", // where the created files could be stored.
"rootDir" : "./src", //

dist(folder): job of holding all the output.
src(folder)
"noEmit" : true, // check files and report any potential errors withtout actually creating output file import.
"noEmitOnError": If file has an error and any file fails to compile, no files will be emitted.
```

```
Strict Type-Checking Options
"strict" : true //
"noImplicitAny" : false // Ensures that we have to be clear about our parameters and values.
"strictNullCheck" : true // Strict regarding how you access and work with values that might potentially hold a null value.
"strictBindCallApply" : // checks which function you are calling bind, call or apply, if setting makes sense.
```

```
Additional Checks

"noUnusedLocals"
"noUnusedParameters"
"noImplicitReturns"

```
