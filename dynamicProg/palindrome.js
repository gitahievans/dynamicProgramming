// A palindrome is a word, which reads the same backward as forward. 
// Some examples of palindromes are: "kayak", "radar", "mom".

// Problem:
// - We need to create a palindrome of length N, using K different lowercase letters
// - The palindrome should read the same backwards as forwards

// Approach
// - Create the first half of the word then mirror it.
// - To ensure the palindrome consits of K different letters, we can cycle through the first K letters.

function generatePalindrome (n, k) {
    let characters = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    console.log(n);

    // Create the first half of the palindrome
    for (let i = 0; i < Math.ceil(n/2); i++){
        const randomIndex = Math.ceil(Math.random() * characters.length)
        result += characters[randomIndex];
    }

    // Mirror the first half to generate the second half (except for the middle 
    // character if N is odd)
    let secondHalf = result.split('').reverse().join('');

    if (n % 2 !== 0){
        secondHalf = secondHalf.slice(1);
    }
    
    return result.concat(secondHalf);

}

console.log(generatePalindrome(5, 3)); // Output: "abbba"
// console.log(generatePalindrome(8, 1)); // Output: "ppsccspp"
// console.log(generatePalindrome(3, 2)); // Output: "opo"