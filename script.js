// declare tl variable for timeline
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: '0% 95%',
    end: '70% 50%',
    scrub: true,
  },
});

// animate the can to move down and rotate to about
tl.to(
  '#can',
  {
    top: '98%',
    left: '12%',
    rotate: '30deg',
  },
  'chocolate'
);

tl.to(
  '#chocolate',
  {
    top: '160%',
    left: '25%',
  },
  'chocolate'
);

tl.to(
  '#chocolate2',
  {
    top: '160%',
    right: '10%',
    width: '25%',
    rotate: '-15deg',
  },
  'chocolate'
);

tl.to(
  '#almond',
  {
    top: '110%',
    left: '70%',
    rotate: '130deg',
  },
  'chocolate'
);

tl.to(
  '#almond2',
  {
    top: '110%',
    left: '0%',
    rotate: '130deg',
  },
  'chocolate'
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.product',
    start: '0% 95%',
    end: '20% 50%',
    scrub: true,
  },
});

tl2.to(
  '#chocolate',
  {
    width: '28%',
    left: '42%',
    top: '214%',
  },
  'can'
);

tl2.to(
  '#choclate2',
  {
    width: '15%',
    left: '35%',
    top: '270%',
  },
  'can'
);

tl2.to(
  '#can',
  {
    width: '30%',
    left: '35%',
    top: '218%',
    overflow: 'hidden',
    // top: '195%',
    rotate: '0deg',
  },
  'can'
);
