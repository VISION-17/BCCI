c = document.querySelector("#cursor")
cL = document.querySelector("#c-light")
document.addEventListener("mousemove",function(dets){
   c.style.top = dets.y+"px",
   c.style.left = dets.x+"px",
   
   cL.style.left = dets.x -150 +"px",
   cL.style.top = dets.y- 150 +"px"
})

gsap.to("#nav",{
   backgroundColor:"#000",
   duration:0.5,
   height:"90px",
   scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      start: " top  -40%",
      end: "top -41%",
      scrub: 1
   }
})
gsap.to("#main",{
   backgroundColor:"#000",
   scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      start: " top  -10%",
      end: "top -90%",
      scrub: 1
   }
})