                      console.log('------------- # 4')

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }

// ask(
//     "Вы согласны?",
//     () => console.log("Вы согласились."), 
//     () => console.log("Вы отменили выполнение.")
//   );
  
  
                          console.log('------------- # 5')
let str = 'my-short-string';
let arr = str.split('-');
console.log (arr);


                            console.log('------------- # 6')
let mass = ['JavaScript', 2015];
console.log (mass.toString(''));

                            console.log('------------- # 7')
let users = [
{id: 1, name: "Vic", age: 21},  
{id: 2, name: "Petya", age: 30}, 
{id: 3, name: "Jon", age: 5}
];

let user = users.find ((item) => item.age === 5);

console.log (user.name);

                              console.log('------------- # 8')

users = [
  {id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}
];
let names = users.map (item => item.name)
console.log( names ); 


                            console.log('------------- # 9')
 
 arr = [5,3,8,1];
    function filterRangeInPlace(arr, a,b) {
     
      let result = [];
      let i = 0;
    
      for (const arrelement of arr) {
        i = 0; i<arr.length; i++ 
          if (a < arr[i] < b) {
              result.splice(arr[i]);
          }
      }
      console.log (result);
      }
      
    

console.log (arr);
console.log (filterRangeInPlace (arr, 1,4));


    
                          console.log('------------- # 10') 

function lineMas (...arg) {

  let str = 'my-short-string';
  let arr = str.split ('-');
  console.log (arr);
}
lineMas (arr);

                          console.log('------------- # 11')

let arrayA= [5, 3, 8, 1];
console.log( arrayA);
let range = [];

arrayA.forEach ((item) => {
  let elem = arrayA.splice(1, 3);
  range.push (elem);
}
)


console.log( range ); 
 


                         console.log('------------- # 12')
  
function sum (...arr) {
  
  let numb = 0;

  for (let elements of arr) {
      numb += elements;
  }
  return numb;
}

  let result = sum(1,2,3);
  console.log (result);



