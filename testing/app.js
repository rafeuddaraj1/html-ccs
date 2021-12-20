// let str = 'apple, bannana, orange'
// console.log(str.slice(-15,-8));

// let arr = [2,1,5,7,4,3,26,8,04,23,6,8,9,4,3,6,78,9443,2211,09,-08,-1,-77,88-12,-89]

// let arr2 = arr.sort((a,b)=>{
//     if (a<b) {
//         return 1
//     }else if (a>b) {
//         return -1
//     }else{
//         return 0
//     }
// })
// console.log(arr2)

let obj = [
  {
    name: "Rafe",
    age: 18,
  },
    { name: "shakib",
    age: 30 
    },
    {
        name:'tasfiya',
        age:5
    }
];
let obj2 = obj.sort((a,b)=>{
    if (a.age>b.age) {
        return 1
    }else if (a.age< b.age) {
        return -1
    }else{
        return 0
    }
})

console.log(obj2)