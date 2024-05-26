function select(e) {
    return document.querySelector(e)
}
function selectAll(e) {
    return document.querySelectorAll(e)
}

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // Optional: adds smooth scrolling effect
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//     document.body.classList.add("loading")
//     // scrollToTop()
// })

// window.addEventListener("load", function () {
//     select(".loader").style.display = 'none'
//     document.body.classList.remove("loading")

// })

let tl = gsap.timeline()

const nav = gsap.utils.toArray('.nav-element');

tl.from(nav,{
    y:-100,
    opacity:0,
    stagger:0.1,
    delay:0.5,
    duration:0.2,
})
.from(".hero-desktop",{
    // x:-50,
    opacity:0,
}, "aaa")
.from(".hero-progress",{
    x:-50,
    opacity:0,
}, "aaa")
.from(".hero-content",{
    x:50,
    opacity:0,
}, "aaa")


const progressBars = gsap.utils.toArray('.progress-bar');
progressBars.forEach(element => {
    gsap.from(element,{
        height: 0,
        scrollTrigger:{
            trigger: element,
            start: "top 80%",
            end: "top bottom",
            scrub:true,
            // markers: true,
        }
    })
});
const progressPoints = gsap.utils.toArray('.progress-point');
progressPoints.forEach(element => {
    gsap.from(element,{
        opacity: 0,
        
        scrollTrigger:{
            trigger: element,
            start: "bottom 80%",
            end: "bottom bottom",
            scrub:true,
            // markers: true,
        }
    })
});
const sectionHeadings = gsap.utils.toArray('.section-heading');
const sectionDescs = gsap.utils.toArray('.section-desc');
sectionHeadings.forEach(element => {
    gsap.from(element,{
        opacity: 0,
        x:-10,
        scrollTrigger:{
            trigger: element,
            start: "130% 80%",
            end: "130% bottom",
            scrub:true,
            // markers: true,
        }
    })
});
sectionDescs.forEach(element => {
    gsap.from(element,{
        opacity: 0,
        x:-10,
        scrollTrigger:{
            trigger: element,
            start: "-5% 80%",
            end: "-5% bottom",
            scrub:true,
            // markers: true,
        }
    })
});


gsap.from(".module-img",{
    opacity: 0,
    x:50,
    scrollTrigger:{
        trigger: ".module-img",
        start: "top 80%",
        end: "top bottom",
        scrub:true,
        // markers: true,
    }
})

gsap.from(".rightToLeft > *",{
    opacity: 0,
    x:50,
    scrollTrigger:{
        trigger: ".rightToLeft > *",
        start: "50% 80%",
        end: "50% bottom",
        scrub:true,
        // markers: true,
    }
})
// didyouknow effect 
// const didyouknow = gsap.utils.toArray('.didyouknow');

// didyouknow.forEach(element => {
//     gsap.from(element,{
//         opacity: 0,
//         x:50,
//         scrollTrigger:{
//             trigger: element,
//             start: "top 80%",
//             end: "top bottom",
//             scrub:true,
//             markers: true,
//         }
//     })
// });



// const rightToLeft = gsap.utils.toArray('.rightToLeft');

// rightToLeft.forEach(element => {
//     gsap.from(element,{
//         opacity: 0,
//         scrollTrigger:{
//             trigger: element,
//             start: "55% 80%",
//             end: "55% bottom",
//             scrub:true,
//             markers: true,
//         }
//     })
// });
