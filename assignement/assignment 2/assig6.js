//create displayinfo function
function displayInfo(name,role){

    console.log(`Name:${name},Role:${role}`);

}

//use call to invoke displayInfowith specific arguments

displayInfo.call(null,'Ankit','Hacker');

//use apply displayInfowith arguments as an array
displayInfo.apply(null,['vishal', 'Developer'])

//create the greet function

function greet(){

    console.log(`Hello, ${this.name}!`);

}

//use bind to create a new function with a specific context

const user={name:'SAM'}

const boundGreet=greet.bind(user);

boundGreet();