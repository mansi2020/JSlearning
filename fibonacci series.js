/* fibonacciSeris */
function fibonacciSeries(num){
    let array = [];

/* fibonacci series first number & second number */

 array[0] = 0;
 array[1] = 1;
    
    for(let i = 2; i < num; i++)
    {
            array[i]=array[i-2]+array[i-1];
    
    }
    
    return array;
}


result = fibonacciSeries(9);
console.log("Fibonacci series is :" ,result)

