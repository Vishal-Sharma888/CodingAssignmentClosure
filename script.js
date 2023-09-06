// Soluction 4
function calculateRectangleArea(length) {
    function innerFunction(breadth) {
      return length * breadth;
    }
  
    return innerFunction; 
  }
  
  // Example usage:
  const calculateArea = calculateRectangleArea(10); 
  const area = calculateArea(5); 
  console.log("Area of the rectangle:", area);

//   Solucrion 5
function createCounter() {
    let counter = 0; 
  

    function incrementCounter() {
      counter++;
      console.log(`Counter is now ${counter}`);
    }

    return incrementCounter;
  }
  

  const myCounter = createCounter();

// Soluction 6
// Print Output

var a = 12;
(function () {
  alert(a);
})();
  

  myCounter(); // Output: Counter is now 1
  myCounter(); // Output: Counter is now 2
  myCounter(); // Output: Counter is now 3
  