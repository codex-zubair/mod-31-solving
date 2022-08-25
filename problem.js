// !Problem 1

/* You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

const arr = [1, 3, 5, 7, 9];
let value = [];

arr.forEach(item => {
    value.push(item + 1);
})
console.log(value);


// !Problem 2
/* 
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

let valueX = [33, 50, 79, 78, 90, 101, 30 ].filter(item=> item % 10 === 0);
console.log(valueX);


// !Problem 3
/* 
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */


valueX = [33, 50, 79, 78, 90, 101, 30 ].find(item=> item % 10 === 0);
console.log(`finder output : ${valueX}`);


// !problem 4
/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

//* For looping

const arx = [ 1, 9, 17, 22 ];
let sum = 0;
for(x of arx)
{
    sum += x;
}
console.log(`sum of array: ${sum}`);





// *Reducer use...
const reducer = arx.reduce((current,previous)=>{
   return current+previous;
},0)
console.log(`Reducer out put: ${reducer}`);




// ! Problem 5
/* Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */


const people = [
    { name: 'Menna', age: 20},
    { name: 'Rina', age: 15},
    { name: 'Shucorita', age: 22},
]

const ageValue = people.reduce((ecu,current)=>{
    return ecu + current.age;
},0);
console.log(ageValue);
// const ageSum = people