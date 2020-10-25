var Monthly_income = 20000;
var expenditure = 2000;
var income = ((Monthly_income * 12) - (expenditure * 12));
var expenditure_yearly = (expenditure * 12);
var income_yearly = Monthly_income * 12; 
var savings = 111000;
var savings_year = 5;
var savings_interest = (7.5 / 100);
var max_amount = "50000";

console.log("Monthly Income - " + Monthly_income);
console.log("Yearly Income - " + income_yearly);
console.log("Monthly Expenditure - " + expenditure);
console.log("Yearly Expenditure - " + expenditure_yearly);
console.log("Savings Amount - " + savings);
console.log("Savings Year - " + savings_year);

if(income <250000)
{
    var tax = (income * 0);
    var savings_interest_ = ((savings * savings_interest) * ( savings_year * 12));
    var savings_amount = (savings + savings_interest_);
    console.log("Income For Tax - " + income); 
    console.log("Tax To Pay - " + tax); 
    console.log("Savings Amount - " + savings_amount);
}
else if((income >250000) && (income < 500000))
{
    var tax = (income * ( 10 / 100));
    var savings_interest_ = ((savings * savings_interest) * ( savings_year * 12));
    var savings_amount = (savings + savings_interest_);
    console.log("Income For Tax - " + income); 
    console.log("Tax To Pay- " + tax); 
    console.log("Savings Amount - " + savings_amount);
}
else if((income >500000) && (income < 1000000))
{
    var tax = (income * ( 20 / 100));
    var savings_interest_ = ((savings * savings_interest) * ( savings_year * 12));
    var savings_amount = (savings + savings_interest_);
    console.log("Income For Tax - " + income); 
    console.log("Tax To Pay- " + tax); 
    console.log("Savings Amount - " + savings_amount);
}
else if(income > 1000000)
{
    var tax = (income * ( 30 / 100));
    var savings_interest_ = ((savings * savings_interest) * ( savings_year * 12));
    var savings_amount = (savings + savings_interest_);
    console.log("Income For Tax - " + income); 
    console.log("Tax To Pay - " + tax); 
    console.log("Savings Amount - " + savings_amount);
}
if (savings_amount < 10000)
{
    console.log("No Tax For This Savings Account");
}
else if(savings_amount > 10000){
    var savings_tax_interest = (10 / 100)
    var savings_tax = (savings_amount * savings_tax_interest);
    console.log("Tax Amount On Savings Account - " + savings_tax);
}
if(income_yearly < 500000 ) 
{
    var Deduction = ((savings_amount * (50 / 100)));
    var Deduction_amount = savings_amount - Deduction; 
}
if(income_yearly < 1000000 ) 
{
    var Deduction = ((savings_amount * (30 / 100)));
    var Deduction_amount = savings_amount - Deduction; 
}
if(income_yearly > 1000000 ) 
{
    var Deduction = ((savings_amount * (10 / 100)));
    var Deduction_amount = savings_amount - Deduction; 
}
if( Deduction_amount < 50000 )
{
 console.log("Deduction Amount - " + Deduction_amount);
}
else
{
    console.log("Your Max limit Amount - " + max_amount )
}

