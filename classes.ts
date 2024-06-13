
class User {     
    email : string 
    name : string
    readonly city : string = ""//if we do not give initializer then it will give error 
    private virgin : boolean
    protected address : string = ""
    constructor(email: string , name:string,virgin : boolean){
         this.email = email
         this.name = name     
         this.virgin = virgin  
    }

    getVirginity():boolean{
        return this.virgin
    }

    setVirginity(isVirgin:boolean):void{
          this.virgin = isVirgin
    }

}

const Aakash = new User("atiwari@ivp.in","Aakash",true)
// console.log(aakash.virgin) will produce error


//now suppose we need to get and se virgin property then in that case 
//we need to use getters and setters for the same . 

Aakash.setVirginity(true)

console.log(Aakash.getVirginity())




//suppose now we want some variable which is accessible both in 
//parent class and class inherited via parent so in that case we use protected modifier

class subUser extends User {

       constructor(email:string,name:string,virgin:boolean,addr : string){
           super(email,name,virgin)
           this.address = addr
       }

       getAddress():string{
            return this.address
       }
}

const sonia = new subUser("ssaini@kuk.ac.in","sonia",false,"dd colony")
console.log(sonia.getAddress())
export {}


