var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var a=0;

btn.addEventListener("click",function(){
    if(a==0){
        bulb.style.backgroundColor="yellow";
        console.log("bulb on");
        btn.innerHTML="OFF"
        a=1;
    }
    else{
        bulb.style.backgroundColor="transparent";
        console.log("bulb off");
        btn.innerHTML="ON"
        a=0
    }
})

