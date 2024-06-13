
type User = {
    readonly _id: string,
    name : string,
    email : string 
    salary?:number //optional for berojgaars 
}

let myUser : User = { //initializing an object 
    _id : "1",
    name : "Aakash",
    email : "atiwari@ivp.in"
}

myUser.name = "Aakash2"
//myUser._id = "2" //giving error because _id is readonly

//now suppose we need to make a type from 2 existing type then we can simply 
//use ampercent sign for doing so.

type idProof = {
    aadharCard : string,
    passportNumber? : string 
    readonly sample? : string[]
}

type completeUser = User & idProof

let finalUser : completeUser = {   //two properties are missing as they are optional
    _id : "1",
    name : "lassi",
    email : "email@google.in",
    aadharCard : "32493994990" ,
    sample : ["1","2"]
}

finalUser.sample?.push("3") //works fine 
// finalUser.sample = [] //gives error

console.log("Here is my final user", finalUser)

export {}