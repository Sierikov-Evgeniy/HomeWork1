let array = [1,2,3,4,5,6,7,8,9,10];

let makeEvenNumbers =(argument)=>{
let finalArr=[];

    for(let i = 0 ; i < argument.length ; i++){

        if((argument[i] %2) === 0){
            finalArr.push(argument[i])
        }
    }
    return finalArr;
}

const bigFUckenDick= makeEvenNumbers(array);

 



