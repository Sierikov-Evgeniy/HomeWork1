 let array = [1,2,3,4,5,6,7,8,9,10];
let array2 = [12,-12,24,33,-33,-3];
let array1 = [21.5, 21.75, 20.75];


let makeEvenNumbers =(argument)=>{
let finalArr=[];

    for(let i = 0 ; i < argument.length ; i++){

        if((argument[i] % 2) ===0){
            finalArr.push(argument[i])
           
        }
    }
    return finalArr;
}
let bigArray = [11,13,21,45,64,32,35,65,64,34,33];
const finalResult= makeEvenNumbers(bigArray);

console.log(finalResult)








let arr = [76, 54, 356, 448, -24, 100];

const makeEvenNumber = (arr) => {
   const finalArr = [];

   for (let i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
         finalArr.push(arr[i]);
      }
   }

   return finalArr;
};
 console.log(makeEvenNumber(arr));





 


let Array = [];

let rundomArray = () =>{
    return Math.round ( 100* Math.random())
}

function generarionArray(){
    for (let i = 0 ; i < 10 ; i++){
        Array.push(rundomArray())
    }
    console.log(Array)
}


generarionArray()







