




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount)
   {console.log(amount * 0.1);}

function convertToUpperCase(text)
    {console.log(text.toUpperCase());}
   
function findMaximum(num1,num2){
    if (num1 > num2) 
        {console.log(num1);}
    else if (num2 > num1)
        {console.log(num2);}
    else {console.log("Both numbers are equal");}}

function isPalindrome(word)
    {console.log(word === word.split('').reverse().join(''));}


function calculateDiscountedPrice(originalPrice,discountPercentage)
    {console.log(originalPrice - (originalPrice * discountPercentage));}

    
