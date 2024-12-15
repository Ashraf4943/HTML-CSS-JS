const qrBtn=document.getElementById("qr-button");
const qrInput=document.getElementById("qr-input")
const qrImg=document.getElementById("qr-img")


qrBtn.addEventListener("click",()=>{
    const inputValue=qrInput.value;

    if(!inputValue){
        alert("Enter a Valid URL");
        return;
    }
    else{
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImg.alt=`QR CODE FOR ${inputValue}`
    }
})