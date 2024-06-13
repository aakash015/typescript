// function f(a:number,b:number){
//    return a+b
// }


// f()

//returning object from function 

function course2():{}{
     return {}
}
//same same but different 
function course():Object{
    return {}
}
let a = course()
console.log(a)


//the bad behviour of typescript 


type User = {
    name : String,
    pass : String
}

function createUser(user : User){
    console.log(user.name)
}

let newUser = {name:"Aakash",pass:"password" , email:"atiwari@ivp.in"}
createUser(newUser)  //ideally it should give error becuase we're passing an email but this is not the case 
//hence this is the bad behaviour of the typescript 

// createUser({name:"Aakash",pass:"password" , email:"atiwari@ivp.in"}) //here it will give you error 

export {}
