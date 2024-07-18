//Replace with your unique number

let uniqueNumbers=new Set([6,7,4,3,9,5,2]);

let numberSquareMap=new Map();

uniqueNumbers.forEach(number=>{

    numberSquareMap.set(number,number*number);
});

console.log('Unique Numbers:');
console.log(Array.from(uniqueNumbers).join(' ,'));

console.log('/nNumber-Square Map:');
numberSquareMap.forEach((square,number)=>{

    console.log(`${number}:${square}`);
});