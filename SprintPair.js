function iterateAndLogWithFor(n) {
   
    for (var i =0;i<=n;i++)
    if (i%2===0){
        console.log(i,'is even')
    }
    else{
        console.log(i,'is odd')
    }
}


function iterateAndLogWithWhile(n) {
    var i =0
    while(i<=n)
        if(i%2===0){
        console.log(i,'is even')
    i++}
    else {console.log(i,'is odd')
i++}
}


function reverseIterateAndLogWithFor(n) {
    if(n===0){
        return 0
    }
    if (n%2===0){
        console.log(n,'is even')
        
    }
    else {
        console.log(n,'is odd')
        
    }
return reverseIterateAndLogWithFor(n-1)
}




function weirdDivisionWithFor(n) {
    for(var i =0;i<=n;i++){
        if ((n%3===0)&&(n%5===0))
     return('juliaJames')
        else if (n%3===0)
        return('Julia')
    else if (n%5===0)
   return('James')

    else 
    return(n)
    }}


    function weirdDivisionWithWhile(n) {
        var i =0
        while (i<=n){
            if ((n%3===0)&&(n%5===0)){
            
     console.log('juliaJames')
     i++}
        else if (n%3===0){

        console.log('Julia')
        i++}
    else if (n%5===0){
    console.log('James')
     i++
    }
    else{ 
    console.log(n) 
i++
    }
}
    }

    function inverseWeirdDivisionRecursively(n) {
        if (n===0)
        return 0
            if ((n%3===0)&&(n%5===0))
         console.log('juliaJames')
            else if (n%3===0)
            console.log('Julia')
        else if (n%5===0)
        console.log('James')
    
        else {
        console.log(n)
        }
return inverseWeirdDivisionRecursively(n-1)

    }





    function laughWithFor(number) {
        var sum = ''
        for (var i =0;i<number;i++){
        sum=sum+'ha '}
        return sum}


        function laughWithWhile(number) {
            var sum=''
            var i = 0
            while(i<number){
            sum=sum+'ha '
        i++}
        return sum}



        function laughRecursively(number) {
            var sum = ''
            sum=sum+'ha '
            if (number===0){
            return ''}
            return sum+laughRecursively(number-1)}



            function sumWithWhile(number) {
                var x = 0
                var i = 0
                while (i<=number){
                x=x+i
            i++}
return x}



function sumWithFor(number) {
    var x = 0
    for (i=0;i<=number;i++){
    x=x+i}
    return x }


    function factorialRecursively(number) {
        var x = 1
        if (number===0){
            return 1
        }
        else
        
        return number*factorialRecursively(number-1)}



        function rangeFor(min, max) {
            var array = []
            for(var i =min;i<max;i++){
                array.push(i)
            }
            return array}


            function rangeWhile(min, max) {
                var array=[]
                var i =min
                while (i<max){
                    array.push(i)
                    i++
            }
            return array
        }




        function reverseWithFor(str) {
            var array=''
            for(i=str.length-1;i>=0;i--){
                array=array+str.charAt(i)
            }
            return array}




            function revWithWhile(str){
                var res = ""
                var i = str.length-1
                while(i >= 0){
                   res = res + str.charAt(i)
                   i--
                }
                return res 
               
               }
              
            
            
            
            function reverseRecursively(str) {
               var strrevrsed= ''
               var i = str.length-1
               if (str.length-1===0){
               return ''}
               
               return  reverseRecursively(str)+strrevrsed+str.charAt(i)

               }