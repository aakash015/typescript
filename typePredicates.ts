// Define a union type
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type FishOrBird = Fish | Bird;

// Type predicate function
function isFish(pet: FishOrBird):pet is Fish{ 
    return (pet as Fish).swim !== undefined;
}

// Usage
function swimOrFly(pet: FishOrBird) {
    if (isFish(pet)) { //if we do not return pet is fish type predicate then 
        //here this function is still will be confused that whether
        //pet is bird or fish and hence gives an error because 
        //our function was just returning a boolean value  
        pet.swim();
    } else {
        pet.fly();
    }
}

swimOrFly({fly : ()=>{console.log("aasman ki unchaiyon mein")}})


// Define a discriminated union type
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };

// Function to calculate area based on shape
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // TypeScript checks for exhaustiveness here
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}


export {}


