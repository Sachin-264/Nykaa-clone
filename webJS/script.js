// spread function

// let spread =['sachin','pratyakss','ramesh'];
// let message =['javsc','is',...spread,'and'];
// console.log(message);

// function addTwoNumber(x,y){
//     console.log(x+y);
// }

// let arr=[5,9];
// let arr1= [19,11];
// addTwoNumber(...arr,...arr1);


// Rest parameter
// use the discarder parmeters

// function someFunction(param1,param2){
//     console.log(param1,param2);
// }

// someFunction('hii','how r','sachin')


// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }

// someFunction('hii','how r','sachin')


// Returning function

// function addTwoNumber(x,y){
//          console.log(x+y);
//      }
// let result = addTwoNumber(2,1);
// console.log(result);

// arrow function
// let rest=add(4,5);
// console.log(rest);


// logic code
// const addTwoNumber =(a,b)=> a+b; 
// let resultArr=[];
// for(let i =0;i<10;i++){
//     let resulted = addTwoNumber(i,2*i);
//     resultArr.push(resulted);
// }
// console.log(resultArr);

// function testAvailaability(){
//     let y="local Variable!";
//     console.log("Available here:",y)
//     return y;
// }

// let z =testAvailaability()
// // console.log("text not available",y)
// console.log("text not available",z)



// understanding let and var

// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x='local';
//     }
// }

// doingstuff();

// let and const-> show error undeclaration
// while var show -> underfined which is not error

// let x= "Accesible eveywhere";
// console.log("Outside function",x);

// function doingstuff(){
//     var x="not let";
//     console.log(x);
// }
// doingstuff();
// console.log("nexr line")
// console.log(x);


//Anonymous function  // Immediately invoke function instantly
// (function() {
//     console.log('add this')
// })();

// arrow function is also anonymous fuinction

// (()=>{
//     console.log("arrow function is also anonymous fuinction");

// })();



// recursion

function logRecursion(nr){
    console.log("started function",nr);
    if(nr>0){
        logRecursion(nr-1);
    } else{
        console.log("done with recursion");
    }

    console.log("function enmded,",nr);
}


logRecursion(3);


