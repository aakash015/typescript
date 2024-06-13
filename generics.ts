//declaring array in two types 

const score: Array<number> = []

const s : number[]= [1] 

const names : Array<string> = []

// function identityOne(val:boolean|number): boolean | number{
//     return true
// }


// design an function which takes the same type of args and return same type

function indentityTwo<T>(val:T):T{
    return val
}

console.log(indentityTwo("Aakash"))

//passing on custom types

interface Bottle{
    brand : string,
    type: number
}

const b : Bottle = {
    brand : "sony",
    type : 1
}

console.log(indentityTwo(b))

//another syntax 
console.log(indentityTwo<Bottle>(b))



function getElement<T>(arr : T[]):T{
   return arr[3]
} //valid function

//suntax in arrow functions 

const getElement1 = <T>(arr:T[]):T=>{
   return arr[0]
}

//this is also a valid syntax 
const getElement2 = <T,>(arr:T[]):T=>{
    return arr[0]
 }


interface Database{
    connection:string,
    username: string,
    password: string 
}

function anotherFunction<T>(one:T,two:Database):object{
      return {}
}

//anotherFunction("1" , {connection:"1",username:"1",password:"1",timeout:1}) //here cannot give 
//any extra property 


function anotherFunction2<T,U extends Database>(one:T,two:U):object{
    return {}
}

//here i can 
anotherFunction2("1" , {connection:"1",username:"1",password:"1",timeout:1}) //here cannot give 



//generic classes 

interface Course {
    name: string,
    author: string,
    subject: string
}

interface quiz{
    name: string,
    noOfQuestions : number
}

class Sellable<T extends Course,U extends quiz>{

    public courseCart:T[] = []
    public quizCart:U[] = []

    addToCart(product1:T,product2:U):object{
         
        this.courseCart.push(product1)
        this.quizCart.push(product2)

        return {
            courseCart : this.courseCart,
            quizCart : this.quizCart
        }
    }
}

const s1 = new Sellable()

let details = s1.addToCart({name:"aakash",author:"aakash",subject:"aakash"},{name:"myquiz",noOfQuestions:2})

console.log(details)

export {}