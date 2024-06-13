//we can't create object of this class 
abstract class trial{

    constructor(public a :string){

    }

    abstract def() : boolean

    //We can acheive the same thing using interfaces except for the below thing
    //as functions with definitions can't be created inside the class
    def2():void{ //we can override this if we want to override
        console.log("this is def2")
    }
}


class trial2 extends trial{

    constructor(public a :string){
        super(a)
    }

    def() : boolean {
        return true 
    }
}

