var tl=gsap.timeline();
tl.from('.nav h1',{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:1,
})

tl.from(".nav h3",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
})

tl.from(".nav h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
})

let darkMode=document.getElementById("dark-mode");

darkMode.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
})

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour:"smooth"
        })
    })

})

gsap.from(".home h2",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1,
})

gsap.from(".home h1",{
   
    opacity:0,
    duration:0.5,
    delay:1,
})

gsap.from(".home button",{
   
    opacity:0,
    duration:0.5,
    delay:1,
})

gsap.from(".projects h1",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:1
})

