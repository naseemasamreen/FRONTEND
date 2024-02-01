fnum=document.querySelector("#fnum");
snum=document.querySelector("#snum");
res= document.querySelector(".res");


document.getElementById("plus").addEventListener("click",()=>{
  
    console.log((+fnum.value)+(+snum.value));
    res.textContent = (+fnum.value)+(+snum.value);
      
})

document.getElementById("mul").addEventListener("click",()=>{
    if(fnum.value>0 && snum.value>0){
        console.log((+fnum.value)*(+snum.value));
        res.textContent=(+fnum.value)*(+snum.value);
    }
    else{
        console.error("input Number is less than ZERO");
        res.textContent="Enter Numbers greater than zero";
    }  
})

document.getElementById("minus").addEventListener("click",()=>{
    if(fnum.value>0 && fnum.value>=snum.value && snum.value>0){
        console.log((+fnum.value)-(+snum.value));
        res.textContent=(+fnum.value)-(+snum.value);
    }
    else{
        console.error("input NUmber is less than ZERO");
        res.textContent="Enter NUmbers greater than zero";
    } 
    
   
})

document.getElementById("div").addEventListener("click",()=>{
    if(fnum.value>0 && snum.value>0 && fnum.value>snum.value){
        console.log((+fnum.value)/(+snum.value));
        res.textContent=((+fnum.value)/(+snum.value)).toFixed(4);
    }
    else
    {  
        if(snum.value===0){
        console.error("divide by zero error ");
        res.textContent="DIVIDE BY ZERO NOT POSSIBLE" }
        else if(fnum.value<=0 || snum.value<0)
        {    
            res.textContent="ENTER NUMBER GREATER THSN ZERO";
            console.error("input is less than zero")}
    }
   
})
document.getElementById("mod").addEventListener("click",()=>{
    if(fnum.value>0 && snum.value>0 && fnum.value>snum.value){
        console.log((+fnum.value)%(+snum.value));
        res.textContent=(+fnum.value)%(+snum.value);
    }
    else
    {
       if(satisfies.num===0)
         {console.error("divide by zero error");
           res.textContent=" divide by zero not possoble"}
        else{
           console.error("input is les than zero");
           res.textContent=" Enter greater than ZERO ";
        }
        
    }
    
    
})



