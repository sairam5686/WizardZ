function animation_section_1() {
    gsap.from('nav .ri-shining-2-fill',{
        duration: 300,
        delay:1,
        rotate:'9000deg',
        repeat:-1
    })
    
    var tl = gsap.timeline()
    
    tl.from('nav h1',{
        duration: .5,
        opacity:0,
        y:-20,
    })
    tl.from('nav .part-2 .navelem',{
        duration: .5,
        opacity:0,
        y:-20,
        stagger:0.2
    })
    tl.from('nav .part-2 .req-but',{
        duration:(0.5),
        opacity:0,
        x:50
    })
    tl.from('.banner .banner-1 h1',{
        duration: 0.2,
        opacity:0,
        x:-30
    })
    tl.from('.banner .banner-1 p',{
        duration: 0.2,
        opacity:0,
        x:-30
    })
    tl.from('.banner .banner-1 button',{
        duration: 0.5,
        opacity:0,
        x:-30
    })
    tl.from('.banner .banner-2 img',{
        duration: 0.5,
        opacity:0,
        x:50
    })
    tl.from('.brand-flow img',{
        y:10,
        duration:0.5,
        opacity:0,
        stagger:.3
    })
    
}



function animation_section_2() {
    var tl_2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-2",
            scroller:'body',
            start:'top 50%',
            end:'top -10%',
            scrubs:true,
          
        }
    })
    
    
    tl_2.from('.services h1',{
        duration: 0.3,
        x:30,
        opacity:0
    },'s1')
    
    
    
    tl_2.from('.services p',{
        duration: 0.3,
        x:-70,
        opacity:0
    },'s1')
    
    tl_2.from('.container .elements',{
        duration: 0.5,
        opacity:0,
        stagger:.3,
        y:-70
    })
}




function animation_section_3() {
    

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        scroller:'body',
        start:'top 50%',
        end:'top 20%',
        scrubs:5,
        markers:true
    }
})


tl3.from('.section-3 .part1',
    {
        duration: 0.5,
        y: -100,
        opacity: 0,
    }
)


tl3.from('.section-3 .part1 .sub-2 .bg-sub-2',{
    duration: 0.5,
    scale:0.1,
    // x:-10,
    opacity:0
}
)

tl3.from('.case h1',{
    duration: 0.3,
    x:30,
    opacity:0
},'s2')



tl3.from('.case p',{
    duration: 0.3,
    x:-70,
    opacity:0
},'s2')


tl3.from('.three-row .column',{
    duration:1,
    x:100,
    stagger:0.5,
    opacity:0
})




tl3.from('.three-row .column3',{
    duration:1,
    // x:100,
    // stagger:0.5,
    opacity:0
})
}



animation_section_1()

animation_section_2()

animation_section_3()