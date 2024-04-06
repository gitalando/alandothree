// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Example usage of the helper functions
  console.log(isEven(4)); // Output: true
  console.log(isOdd(5)); // Output: true
  console.log(factorial(5)); // Output: 120
  