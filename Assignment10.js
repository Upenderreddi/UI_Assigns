<!DOCTYPE html>
<html lang="en">
<head>
  <title>Variable Declaration Demo</title>
</head>
<body>
  <h1>Open the Console to See the Output</h1>

  <script>
    // Initial declarations
    var myVar = "Hello";      
    let myLet = 42;  
    const myConst = true;    

 // Reassign var (string → number)
    myVar = 100;            

    myLet = "New value";     

    myConst = 10;           
 // var and let allow reassignment and changing the value to a different type.
 //const does not allow reassignment at all. It must remain with the value it was initialized with (although for objects/arrays, their contents can change — but not the binding).
 // Task 2: Follow Variable Naming Rules
    let userName = "Alice";
    let age = 25;
    let isLoggedIn = true;
    let _score = 90;
    let $totalAmount = 150.75;

    //Invalid Variable Names
    // let 1stPlace = "Gold";
    // Invalid: Variable names cannot start with a number

    // let user name = "Bob";
    // Invalid: Variable names cannot contain spaces

    // let let = 5;
    // Invalid: 'let' is a reserved keyword in JavaScript

    console.log(typeof "JavaScript");  // string
    console.log(typeof 2024);          // number
    console.log(typeof true);          // boolean
    console.log(typeof undefined);     // undefined

    console.log(typeof null);          // object (❗️Odd behavior - should be null, but returns object)

    console.log(typeof [1, 2, 3]);     // object (❗️Arrays are objects in JS)
    console.log(typeof { name: "Alex" });  // object
    console.log(typeof function() {});     // function (✅ special case)

    //Primitive Type
    let a = 10;
    let b = a;
    b = 20;

    console.log("a =", a);  // 10
    console.log("b =", b);  // 20

    //Reference Type
    let obj1 = { name: "Upender" };
    let obj2 = obj1;
    obj2.name = "Tanvish";

    console.log("obj1 =", obj1);  // { name: "Tanvish" }
    console.log("obj2 =", obj2);  // { name: "Tanvish" }
   
    //Variable Changing Type dynamically
     let dynamicVar = 100;
    console.log(dynamicVar, typeof dynamicVar); // number

    dynamicVar = "Now I'm a string";
    console.log(dynamicVar, typeof dynamicVar); // string

    dynamicVar = { value: 42 };
    console.log(dynamicVar, typeof dynamicVar); // object
    
    //Type Coercion (Observe & Explain)
    let resultA = "5" + 3;
    console.log(resultA, typeof resultA);  // "53" string

    //✅ Output: "53", "string"

    //Coercion: Number 3 was coerced to a string and concatenated.

    //JS uses + as string concatenation if either operand is a string.

    let resultB = "5" - 2;
    console.log(resultB, typeof resultB);  // 3 number

   // Output: 3, "number"

    //Coercion: String "5" was coerced to number 5.

 // - forces numerical operation → performs 5 - 2.

    let resultC = true + 1;
    console.log(resultC, typeof resultC);  // 2 number

    // Output: 2, "number"

    // Coercion: true → 1, then 1 + 1 = 2.
    let resultD = "hello" * 2;
    console.log(resultD, typeof resultD);  // NaN number

    //Output: NaN, "number"

 //Coercion failed: "hello" can't be converted to a number.

  //NaN (Not a Number) is still of type number in JavaScript.

    let resultE = null + 5;
    console.log(resultE, typeof resultE);  // 5 number

    //Output: 5, "number"

    //Coercion: null → 0, then 0 + 5 = 5.

  </script>
</body>
</html>
