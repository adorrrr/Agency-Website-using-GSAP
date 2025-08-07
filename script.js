function page1(){
    var tl = gsap.timeline()


tl.from("nav h1, nav h4, nav button",{
    y:-40,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.15
})

tl.from(".certer-part1 h1 ,.certer-part1 p,.certer-part1 button",{
    x:-200,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
 

tl.from(".certer-part2 img",{
    opacity:0,
    duration:0.8,
},"-=1")


tl.from(".section1bottom img",{
    opacity:0,
    duration:0.8,
    stagger:0.3       //Need some update 
},"-=1.5")

}
page1()

function page2(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 80%",
        // markers:true,
        scrub:2,
    }
  })


tl2.from(".title",{
    y:30,
    opacity:0,
    duration:0.3
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.6
},"elem")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:0.6
},"elem")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:0.6
},"elem1")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.6
},"elem1")
}
page2()