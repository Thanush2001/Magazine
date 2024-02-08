
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let tl = gsap.timeline()

tl.to(".page1", {
    y: "100vh",
    duration: 0,
    scale: 0.6
})
tl.to(".page1", {
    y: "20vh",
    duration: 1,
    delay: 1
})
tl.to(".page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.5
})
