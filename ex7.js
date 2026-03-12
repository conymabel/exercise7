// Jiménez Jiménez Cony Mabel ID: 4963 - TDSM4A
// Exercise 7: Palindrome Function

/*
This program defines a function called isPalindrome that checks if a number
is a palindrome. The function reverses the number using the modulo operator
to extract the last digit of the number and reconstruct it in reverse order.
Finally, it compares the reversed number with the original value and returns
true if they are equal or false otherwise.
*/

function isPalindrome(num) { 

    let original = num; // Store the original number for comparison
    let reversed = 0; // Initialize the variable to hold the reversed number

    while (num > 0) { // Loop until the number is reduced to 0
        let digit = num % 10; // get last digit
        reversed = reversed * 10 + digit; // Shift the reversed number left and add the last digit
        num = Math.floor(num / 10); // Remove the last digit from the original number
    }

    return original === reversed; // Compare the original number with the reversed number and return true if they are equal, false otherwise

}

// Examples
console.log(isPalindrome(123)); // Send 123 to the function and print the result (should return false)
console.log(isPalindrome(121)); // Send 121 to the function and print the result (should return true)