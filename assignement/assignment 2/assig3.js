//creating map

const contactMap=new Map();

//adding contact to the map
contactMap.set('Rahul',{
    age:25,
    email:"rahul23@gmail.com",
    location:'pune',

});
contactMap.set('sarthak',{
    age:26,
    email:'sarthak@gmail.com',
    location:'mumbai'

});

contactMap.set('aman',{
    age:19,
    email:"aman@gmailcom",
    location:'nashik',

})

//Function retrives contact details based on name

function getContact(name){
    return contactMap.get(name);
}

console.log(getContact('aman'));
