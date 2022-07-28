class ParallaxScroll {
  static initialize() {
    let root = document.getElementById('root2');
    root.addEventListener('scroll', ParallaxScroll._event);
  }

  static _event(event) {
    let section1 = document.querySelector('.section--1');
    let section2 = document.querySelector('.section--2');
    let sectionBounds1 = section1.getBoundingClientRect();
    let sectionBounds2 = section2.getBoundingClientRect();
    let sectionContent1 = section1.children[0];
    let sectionContent2 = section2.children[0];

    if (-sectionBounds1.top >= 0 && -sectionBounds1.top <= sectionBounds1.height) {
      section1.style.backgroundPosition = '0 ' + sectionBounds1.top / 2 + 'px';
      sectionContent1.style.opacity = 1 - -(Math.floor(sectionBounds1.top / sectionBounds1.height * 100) / 100) * 2;
    } else if (-sectionBounds2.top >= 0 && -sectionBounds2.top <= sectionBounds2.height) {
      section2.style.backgroundPosition = '0 ' + sectionBounds2.top / 2 + 'px';
      sectionContent2.style.opacity = 1 - -(Math.floor(sectionBounds2.top / sectionBounds2.height * 100) / 100) * 2;
    }
  }}


ParallaxScroll.initialize();