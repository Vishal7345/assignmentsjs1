const ages=[19,22,19,24,20,25,26,24,25,24];

// to sort the array

ages.sort((a,b)=>a-b);
  
//to find the minimum and maximum age

const minAge= ages[0];
const maxAge = ages[ages.length-1];

// to find the median age

let medianAge ;
if(ages.length %2===0){

    const mid1=ages[Math.floor(ages.length/2)-1];

    const mid2=ages[Math.floor(ages.length/2)];
    midianAge=(mid1+mid2)/2 ;

}else{

    medianAge=ages[Math.floor(ages.length/2)];
}

//to find average age 


const sumAges=ages.reduce((sum,age)=>sum+age,0)
const averageAge=sumAges/ages.length;
//TO FIND RANGE OF AGES

const ageRange=maxAge-minAge ;

//to COMPARE (MIN-AVERAGE)AND (MAX-AVERAGE)

const minDifference=Math.abs(minAge-averageAge);
const maxDifference=Math.abs(maxAge-averageAge); 

console.log('Sorted Ages:' ,ages);
console.log('Min Age:',minAge);
console.log('Max Age:',maxAge);
console.log('Median Age:',medianAge); 
console.log('Average Age:',averageAge);
console.log('Age Range:',ageRange);
console.log('Min-Average Difference:',minDifference);
console.log('Max-Average Difference:',maxDifference);