console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container5", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container5",
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});