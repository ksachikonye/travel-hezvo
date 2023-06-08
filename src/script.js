gsap.config({trialWarn: false});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  wrapper: 'scroll-wrapper',
  content: '#scroll-content',
  effects: true
})

/*animate all animate-1*/

const ani_1 = gsap.utils.toArray('.animate-1');
ani_1.forEach(ani_1_single => {
  gsap.to(ani_1_single, {
  opacity: 1,
  duration: 1,
  delay: 0.1,
    
    scrollTrigger: {
      trigger: ani_1_single,
      start: "top bottom",
    toggleActions: "play none none reset",
      // scrub: true
    }
    
  })
});


/*animate all animate-1*/

const ani_2 = gsap.utils.toArray('.animate-2');
ani_2.forEach(ani_2_single => {
  gsap.to(ani_2_single, {
  opacity: 1,
  duration: 0.8,
  delay: 0.3,
    scale: 1,
    ease: 'circ',
    
    scrollTrigger: {
      trigger: ani_2_single,
      start: "top bottom",
    toggleActions: "play none none reset",
      //scrub: true - this is kinda cool - effect on scroll
    }
    
  })
});

const ani_3 = gsap.utils.toArray('.animate-3');
ani_3.forEach(ani_3_single => {
  gsap.to(ani_3_single, {
  opacity: 0,
  duration: 1,
  delay: 0.3,
    scale: 1,
    ease: 'circ',
    
    scrollTrigger: {
      trigger: ani_3_single,
      start: "top center",
    toggleActions: "play none none reset",
     scrub: true
    }
    
  })
});

/*scoll ring*/

gsap.to('.scroll-circle-1', {
  scrollTrigger: {
    trigger: '.scroll-circle-1',
    start: "top-=100 center",
    end: "+=200",
    toggleActions: "restart none none reverse",
    // markers: true,
  },
  scale: 1.3,
  rotate: 30,
  opacity: 0,
  duration: 0.5,
  ease: 'circ',
})

/*fadein ani*/

const fadeIn = gsap.utils.toArray('.fadeIn');
fadeIn.forEach(fadeIn_single => {
  gsap.to(fadeIn_single, {
  opacity: 1,
  duration: 0.5,
  delay: 0.1,
    ease: 'circ',
    
    scrollTrigger: {
      trigger: fadeIn_single,
      start: "top bottom",
    toggleActions: "play none none reverse",
     scrub: true,
      markers: true
    }
    
  })
});


/* why gallery*/

smoother.effects(".fig-image img", {
  speed: "auto"
});

/*first section img paralax*/

smoother.effects(".first-section .bg-img", {
  speed: "0.8"
});

smoother.effects(".flexbox-item img", {
  speed: "0.8"
});


/*panels stacking - https://greensock.com/scrolltrigger/*/

gsap.utils.toArray('.panel').forEach((panel,i)=> {
  ScrollTrigger.create({
    
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
    
  });
});


/*DrawSVG plugin*/
var shapes = "rect, circle, ellipse, polyline",
		tl = gsap.timeline({repeat:1, yoyo:true});

tl.fromTo(shapes, {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
  .fromTo(shapes, {drawSVG:"0%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
  .to(shapes, {duration: 1, drawSVG:"90% 100%", stagger: 0.5})
  .to(shapes, {duration: 1, rotation:360, scale:0.5, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
  .to(shapes, {duration: 0.5, stroke:"red", scale:1.5, opacity:0, stagger: 0.2})
.to(shapes, {duration: 3, stroke:"blue", scale:1, opacity:1, stagger: 0.4})
.to(shapes, {duration: 1, stroke:"red", scale:1, opacity:0, stagger: 0.1})


/*
gsap.to('.animate-2', {

  scrollTrigger: {
    trigger: '.animate-2',
    start: "top bottom",
    toggleActions: "restart none none reset"
  },
  scale: 1,
  opacity: 1,
  duration: 0.5,
  delay: 0.4
})
*/
/* if ele is in view add a class*/

/*
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height()+50;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.animate-1').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('in-view');
        } else {
          $(this).removeClass('in-view');
        }
    });

      $('.animate-2').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('in-view');
          
           console.log('in view');
        }
    });
  
});

*/