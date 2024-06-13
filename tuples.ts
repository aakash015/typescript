/*
    A tuple is just a typed array with a predefined length and types 
    for each index. 
 */

let ourTuple : [number,boolean,string] //predfined with 3 length and types

 ourTuple  = [5,false,'coding is god']
//ourTuple = [5,4,2] //error

//bad behaviour of tuple

ourTuple.push("12") //no error is there 

