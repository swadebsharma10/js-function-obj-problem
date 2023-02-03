// 1 - 10 = 500tk/day
// if stay 20 days after 10 days it will 11-20 =300tk/day.
// if stay 30 days after 20 days it will 21-30 =100tk/day.
// if you stay 25 days how much money you need to pay??

let myDays = 15;

let first1To10 = 500;
let second11To20 = 300;
let third21ToAny = 100;

if(myDays <= 10){
    var totalCost = myDays*500;
    console.log('my 10 days cost:', totalCost);
}
else if( myDays <=20 && myDays > 10){
    var first10daysCost = myDays*500;
    var remainingDays = myDays-10;
    var totalRemaingCost  =  remainingDays*300 ;
    var total20daysCost = first10daysCost + totalRemaingCost;
    console.log('my second 20 days cost:', total20daysCost)
    
}
else {
    var first10daysCost = 10*500;
    var totalRemaingCost  = 10*300 ;
    var thirdremaingDays= myDays - 20;
    var thirdremaingCost = thirdremaingDays*100;
    var total = first10daysCost+ total20daysCost+ thirdremaingCost;
    console.log(total);
}
