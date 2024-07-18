const person1={name:'Rounak',age: 24};
const person2={name:'Athrava',age:26};
function introduce() {

    console.log(`Hello iam ${this.name} and iam ${this.age} years old`);

}
introduce.call(person2);