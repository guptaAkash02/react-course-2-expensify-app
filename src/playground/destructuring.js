//
// Objectd Destructuring
//

// const person={
//     name:"Akash",
//     age:22,
//     location:{
//         city:'Bhopal',
//         temp:99
//     }
// }

// const { name : firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}. `);

// const { city, temp:temperature} = person.location;
// if(city && temperature){
// console.log(` it is ${temperature} in ${city}`)
// }

// const book={
//     title:'ego is your enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {name:publisherName = 'Self-Published'} = book.publisher;

//   console.log(publisherName)

//
//Array Destruturing
//

// const address = ['1299 s Junior Street','Bhopal','madhyapradesh', '3322'];

// const [,city , state='New York'] = address;
// console.log(`you are in ${city} ${state} `)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)