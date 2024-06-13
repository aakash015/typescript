
function db(id : number|string){
   if(typeof id == 'string'){
     return id.toLowerCase()
   }else{
     return id+2
   }
}


//array 

//const data : number[] | string[] = [1,2,3,"4"] //invalid becuase the array can be either all the number or can be all the strings


//now suppose there is something like the array should be mix of the two values

const data : (number|string)[] = [1,2,"3"]

console.log(data)


//stricting variable to a particular set of values 


let seatAllotment : "Aisle" |  "Window" | "Middle"

seatAllotment = 'Aisle'  // no error
// seatAllotment = 'x' //error