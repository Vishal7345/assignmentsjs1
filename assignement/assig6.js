let PaymentMethod='credit' ;

switch(PaymentMethod){

    case 'credit' :

    console.log('processingfee for credit payment: 2%');

    break;
    case 'debit' :

    console.log('processing fee for debit payment: 1.55%');

    break;

    case "paypal":

    console.log('processing fee for paypal payment:3%');

    break;

    default:
        console.log('invalid payment method');
}