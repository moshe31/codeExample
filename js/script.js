gsap.registerPlugin(ScrollTrigger);
// Accordian Jquery Start
$(function () {
    var icons = {

    };
    $("#accordion").accordion({
        icons: false,
        autoHeight: false,
    });
    $("#toggle").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });
});
// Accordian Jquery End

// Tabs Jquery Start
$(function () {
    $("#tabs").tabs();
});
// Tabs Jquery Start

//   Mobile Testimonial Start
if (window.innerWidth < 1200) {
    $('.testimonial_flex').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true
    });
}

// Mobie Testimonial End

// GSAP Animation Start

// Hero Content
var $quote = $(".hero_content h1"),
    mySplitText = new SplitText($quote, {
        type: "words"
    }),
    splitTextTimeline = gsap.timeline();

gsap.set($quote, {
    perspective: 400
});

function kill() {
    splitTextTimeline.clear().time(0);
    mySplitText.revert();
}

kill();
mySplitText.split({
    type: "chars, words"
})
splitTextTimeline.from(mySplitText.chars, {
    duration: 0.6,
    scale: 4,
    autoAlpha: 0,
    rotationX: -180,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.02
});

var $quote = $(".hero_content p"),
    mySplitText = new SplitText($quote, {
        type: "words"
    }),
    splitTextTimeline = gsap.timeline();

gsap.set($quote, {
    perspective: 400
});

//kill any animations and set text back to its pre-split state
function kill() {
    splitTextTimeline.clear().time(0);
    mySplitText.revert();
}

kill();
mySplitText.split({
    type: "chars, words"
})
splitTextTimeline.from(mySplitText.chars, {
    duration: 0.6,
    scale: 4,
    autoAlpha: 0,
    rotationX: -180,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.02
});
// Hero Content
// Rotation Animation
var square = document.getElementById('rotate')

TweenMax.to(square, 10, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1
});
// Rotation Animation   

// Onscroll Animations
gsap.timeline({
    scrollTrigger: {
        trigger: ".service h2",
        start: "0% 80%",
        end: "5% 100%",
        scrub: 2,
    }
}).from(".service h2", {
    y: 50,
    opacity: 0,
});
if (window.innerWidth > 1300){
    gsap.timeline({
        scrollTrigger: {
            trigger: ".service_flex .service_item:first-child",
            start: "0% 80%",
            end: "5% 100%",
            scrub: 2,
        }
    }).from(".service_flex .service_item:first-child", {
        y: 50,
        opacity: 0,
    });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".service_flex .service_item:nth-child(2)",
            start: "0% 80%",
            end: "5% 100%",
            scrub: 2,
        }
    }).from(".service_flex .service_item:nth-child(2)", {
        y: 50,
        opacity: 0,
    });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".service_flex .service_item:nth-child(3)",
            start: "0% 80%",
            end: "5% 100%",
            scrub: 2,
        }
    }).from(".service_flex .service_item:nth-child(3)", {
        y: 50,
        opacity: 0,
    });
}

gsap.timeline({
    scrollTrigger: {
        trigger: ".team_img",
        start: "0% 80%",
        end: "5% 100%",
        scrub: 2,
    }
}).from(".team_img", {
    x: -150,
    opacity: 0,
});
gsap.timeline({
    scrollTrigger: {
        trigger: ".team_content",
        start: "0% 80%",
        end: "5% 100%",
        scrub: 2,
    }
}).from(".team_content", {
    y: 50,
    opacity: 0,
});
gsap.set(".company_item", {opacity: 0, y: 24});

ScrollTrigger.batch(".company_item", {
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
  start: "0% 50%",
  end: "5% 20%",
});
gsap.timeline({
    scrollTrigger: {
        trigger: ".accordion_img",
        start: "0% 80%",
        end: "5% 100%",
        scrub: 2,
    }
}).from(".accordion_img", {
    y: 100,
    opacity: 0,
});
// Onscroll Animations
// GSAP Animation Start