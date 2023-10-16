// ------------ TASK 1 Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz. --------------


// Function declaration  

// function calcAvg(...nums) {
//     const total = nums.reduce((a,b)=>a+b,0)
//     return total/nums.length
// }

// function calc(callback ,...nums) {
//     return callback(...nums)
// }

// const result = calc(calcAvg , 4,5,2,1)

// console.log('average value : ' + result);





// ------------ TASK 2 Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz. --------------


// Function declaration  

// function calcEvenNums(...nums) {
//    return nums.reduce((a, b) => (b % 2) === 0 ?  a + b : a , 0);
// }

// function calc2(cb, ...nums) {
//   return cb(...nums);
// }

// const result = calc2(calcEvenNums, 3, 2, 4, 5, 4,99);

// console.log('cüt ədədlərin cəmi : ' + result);



// ARROW Function 

// const calcEvenNums = (...nums) => nums.reduce((a, b) => (b % 2) === 0 ?  a + b : a , 0);

// const calc2 = (cb, ...nums) => cb(...nums)

// const result = calc2(calcEvenNums, 3,1,2,4,4);

// console.log('cüt ədədlərin cəmi : ' + result);








// ------------ TASK 3 Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz. --------------



// ARROW Function 

// const calcOddNums = (...nums) => nums.reduce((a, b) => (b % 2) !== 0 ?  a + b : a , 0);

// const calc3 = (cb, ...nums) => cb(...nums)

// const result = calc3(calcOddNums, 3,1,2,4,5);

// console.log('tək ədədlərin cəmi : ' + result);





// ------------ TASK 4 Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz. --------------

// Function declaration  


// function calcNums(...nums) {
//    const odd= nums.reduce((a, b) => (b % 2) !== 0 ?  a + b : a , 0);
//    const even= nums.reduce((a, b) => (b % 2) === 0 ?  a + b : a , 0);
//    return odd*even
// }


// function calc4(cb, ...nums) {
//   return cb(...nums);
// }

// const result = calc4(calcNums, 3, 1, 2 , 4);

// console.log(' hasil : ' + result);


