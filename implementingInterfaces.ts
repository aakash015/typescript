interface girl {  
    color : string,
    height : string,
    education : string 
}

interface isGhareluGirl {
      canCookFood : boolean,
      isVeg : boolean , 
      doClubbing : boolean,      
      checkIfGharelu():boolean
}

class myWife implements girl , isGhareluGirl {

    color : string
    height : string 
    education : string 
    isVrigin :  boolean  //can add extra properties but atleast 
    //should have properties that are in interfaces
    canCookFood: boolean
    isVeg: boolean
    doClubbing: boolean
    constructor(color:string,height:string,education:string,isVirgin:boolean,canCookFood:boolean,isVeg:boolean,doClubbing:boolean){
         this.color = color
         this.height = height
         this.education = education
         this.isVrigin = isVirgin
         this.canCookFood = canCookFood
         this.isVeg = isVeg
         this.doClubbing = doClubbing
    }

    //another way of declaring the variables with access modifiers 
    //in this way it both declares and initialize at the same time 
    // constructor( 
    //     public color:string,
    //     public education:string,
    //     public height:string){}

    checkIfGharelu(): boolean {
        return this.isVeg && this.canCookFood && !this.doClubbing && this.isVrigin
    }
}

const sanskariBiwi = new myWife("white","5feet","B.tech",true,true,true,false)

console.log(sanskariBiwi.checkIfGharelu())

export {}