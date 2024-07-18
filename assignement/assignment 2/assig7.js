//create  calulator object//

const calculator ={

    add: function (a,b) {

        return a+b ;
    },
    subtract:function(a,b){

        return a-b ;
    },
    multiply:function(a,b){

        return a*b;
    },
    calculate:function(operation,a,b){

        if(operation==='add'){
            return this.add(a,b);
        }else if(operation=== 'subtract'){


            return this.subtract(a, b)
        }else if(operation=== 'multiply'){

            return this.multiply(a,b);
        }
    }

};


//use he call to perform an addition operation//


const additionResult=calculator.calculate.call(calculator,'add' ,7,3);
console.log(`Addition Result:${additionResult}`);

// apply to perform a multiplication operation with arguments as an array //

const multiplicationResult=calculator.calculate.apply(calculator,['multiply',6,5]);
console.log(`multiplicaton Result:${multiplicationResult}`);

//create discountCalculator object//

const discountCalculator={

    discountPercentage:20,
    applyDiscount: function(amount){

        return amount-(amount*this.discountPercentage)/100 ;
    }          
};

//use bind to create a new function bound to discountcalcultor//

const calculateDiscount =
discountCalculator.applyDiscount.bind(discountCalculator);
const  discountedAmount= calculateDiscount(100);
 console.log(`Discounted Amount:${discountedAmount}`);