/* Define the number is prime or not */
function numberisPrimeorNot(num){
		
    for (i=2 ; i<num ; i++ ){
        if( num % i == 0)
            {
                    console.log("Number is not prime")
                    break;
            }	
        else
            {
                console.log("Number is prime")
            
            }
                
    
    }
    
}

numberisPrimeorNot(3);