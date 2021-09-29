/* jshint esversion:6*/

function clickFunc() { 
    let myArray = document.getElementById("numb");
    let res = document.getElementById("result");
    myArray = myArray.value.split(",");

    res.innerHTML = makeSum(myArray);
}

//destructured the array(convert array items into variables) on the parameters of the function using "[]"
//by using the spread operator "..." allows us to receive diferent length of parameters in the function every time it is called

function makeSum([...args]) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        let argItem = parseInt(args[i]);
        total += argItem;
    }
    return total;
}
