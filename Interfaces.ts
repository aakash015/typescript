
interface User {
    name : string,
    class : number , 
    income? : number,
    //here we can give functions as well
    
    wantAdmission():boolean , 
    enroll(collegeId : string , sex : string) : boolean
}


const firstKid : User = {
    name : "Aakash",
    class : 12,
    income : 0,
    wantAdmission() {
        return false
    },
    enroll(id: "at",sex:"M"){  //type is auto infered so We do not have to redfine it
       console.log(id+sex)
        return true
    }
}


//program


// Define a function interface for a simple calculator
interface Calculator {
    // Function that takes two numbers and returns their sum
    add: (a: number, b: number) => number;
    
    // Function that takes two numbers and returns their difference
    subtract: (a: number, b: number) => number;
    
    // Function that takes two numbers and returns their product
    multiply: (a: number, b: number) => number;
    
    // Function that takes two numbers and returns their division
    divide: (a: number, b: number) => number;
  }
  
  // Implementing the Calculator interface
  const basicCalculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  
  console.log(typeof basicCalculator)
  // Example usage
  console.log(basicCalculator.add(5, 3));       // Output: 8
  console.log(basicCalculator.subtract(10, 4)); // Output: 6
  console.log(basicCalculator.multiply(2, 6));  // Output: 12
  console.log(basicCalculator.divide(20, 4));   // Output: 5
  

  export {}

//interface has also one concept known as reopening of interfaces

//suppose at one point i also want my User to have something called sex
//then in that case we can do it like 

interface User {
    sex : string 
}

//but now wherever the user is there we need to give this property to user 
//else it will show error 

//inheritance in  interface 

interface Admin extends User {
    role : "admin" | "aakash"
}

//a type can't be opened up again once created this is difference between 
//types and interfaces

