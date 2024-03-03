var one=document.querySelector("#line1")
var two=document.querySelector("#line2")
var three=document.querySelector("#line3")
var flag = 0
two.addEventListener("click",function(){
 if(flag == 0){
   setTimeout(function(){
    one.style.rotate="35deg";
    three.style.rotate="-35deg";
    two.style.opacity="0";
    flag=1;
 },500)
 }
 else{
     setTimeout(function(){ 
    one.style.rotate="0deg";
    three.style.rotate="-0deg";
    two.style.opacity="1";
    flag=0;
     },500)
 } 
})
