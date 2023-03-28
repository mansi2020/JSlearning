/* Find the sum of given array */
function arraySum(array){

    let arrayToNum;
    let sum=0 ;
          
     
      for (let i=0 ; i < array.length ; i++)
      {
         arrayToNum = array[i];
         sum = sum + arrayToNum ;
          
      }
    
    console.log(sum);
    }
    
    let reuslt = [1,2,3,3];
    arraySum(reuslt);