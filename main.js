const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls);
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5, //0.7초 1.4초 2.1초 2.7초 순으로 나타남
    opacity: 1,
  });
});

// $('.project .swiper').each(function (index) {
//   let t = $(this);
//   t.addClass('swiepr-' + index);

//   let swiper = new Swiper(t, {
//     autoplay: {
//       delay: 0, //add
//       disableOnInteraction: false,
//     },
//     speed: 5000,
//     loop: true,
//     loopAdditionalSlides: 1,
//     slidesPerView: 5,
//   });
// });

const swiper = new Swiper('.project .swiper', {
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,
  autoplay: true, // 자동재생
  loop: true, // 반복재생여부

  breakpoints: {
    769: {
      //768px보다 클경우
      slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
      spaceBetween: 10, // 슬라이드 사이 여백
      centeredSlides: true, // 1번 슬라이드가 가운데 보이기
      loop: true, //반복재생여부
      autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      speed: 4000,
    },
  },
  // direction: 'horizental' 기본값이라 생략

  //
});

// const slideEls = document.querySelectorAll('.project .swiper-slide');
// slideEls.forEach((element) => {
//   element.addEventListener('mouseover', () => {
//     swiper[0].autoplay.stop();
//     console.log('in');
//   });
//   element.addEventListener('mouseout', () => {
//     swiper[0].autoplay.start();
//     console.log('out');
//   });
// });
$('.swiper.up .swiper-slide').on('mouseover', function () {
  console.log('hi');
  swiper[0].autoplay.stop();
});
$('.swiper.up .swiper-slide').on('mouseout', function () {
  swiper[0].autoplay.start();
});
$('.swiper.down .swiper-slide').on('mouseover', function () {
  console.log(swiper);
  swiper[1].autoplay.stop();
});
$('.swiper.down .swiper-slide').on('mouseout', function () {
  swiper[1].autoplay.start();
});

// review button
const reviewBtn = document.querySelector('.review-btn');
let isReview = false;
const reviewEl = document.querySelector('.review');
reviewBtn.addEventListener('click', () => {
  console.log('click');
  isReview = !isReview;
  if (isReview) {
    console.log('isReview', isReview);
    reviewBtn.textContent = 'Close Review';
    reviewEl.classList.remove('hide');
    console.log(reviewEl.classList);
  } else {
    reviewBtn.textContent = 'Check Review';
    console.log('isReview', isReview);
    reviewEl.classList.add('hide');
  }
});

// packages swiper
// $(document).ready(() => {
//   let ww1 = $(window).with();
//   console.log(ww1);
// });
console.log('h2');
console.log('111111', $(window).width);

// console.log(window.innerWidth);

// const swiper1 = new Swiper('.package .swiper.mobile', {
//   slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
//   spaceBetween: 10,
//   autoplay: true, // 자동재생
//   // loop: true, // 반복재생여부
//   // speed: 150,
//   pagination: {
//     // 페이지 번호 사용 여부
//     el: '.package .swiper-pagination', // 페이지 번호 요소 선택자
//     clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
//   },
//   navigation: {
//     // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: '.package .swiper-prev', // 이전 버튼 선택자
//     nextEl: '.package .swiper-next', // 다음 버튼 선택자
//   },
// });

let mql = window.matchMedia('screen and (max-width:769px)');
packageSwiper = undefined;
if (mql.matches) {
  console.log('모바일화면입니다.');
  packageMovement();
} else {
  console.log('데스크톱입니다.');
}

window.addEventListener('resize', () => {
  // 갱신
  if (packageSwiper) {
    packageSwiper.destroy();
  }
  if (mql.matches) {
    packageMovement();
  } else {
    if (packageSwiper) {
      packageSwiper.destroy();
      packageSwiper = undefined;
    }
    packageSwiper = undefined;
  }
});

function packageMovement() {
  packageSwiper = new Swiper('.package .swiper.mobile', {
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 30,
    // touchRatio: 0,
    // autoplay: {
    //   // 자동 재생 여부
    //   delay: 0, // 5초마다 슬라이드 바뀜
    //   // pauseOnMouseEnter: true,
    // },
    autoplay: false,
    delay: 0,
    // stopOnLastSlide: false,
    // loop: true, // 반복재생여부
    // loopedSlides: 1,
    // autoplay:
    // speed: 150,
    speed: 400,
    pagination: {
      // 페이지 번호 사용 여부
      el: '.package .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
      // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.package .swiper-prev', // 이전 버튼 선택자
      nextEl: '.package .swiper-next', // 다음 버튼 선택자
    },
  });
}

const packageGraph = document.querySelector('.package .swiper.mobile');
const packageBtnPrev = document.querySelector('.package .swiper-prev');
const packageBtnNext = document.querySelector('.package .swiper-next');
let isPackageGraphClicked = false;
packageGraph.addEventListener('touchstart', () => {
  isPackageGraphClicked = !isPackageGraphClicked;
  if (isPackageGraphClicked) {
    packageBtnPrev.classList.remove('hide');
    packageBtnNext.classList.remove('hide');
  } else {
    packageBtnPrev.classList.add('hide');
    packageBtnNext.classList.add('hide');
  }
});

// Create your own package calculation
const priceTable = [
  { price: 450, status: false },
  { price: 320, status: false },
  { price: 240, status: false },
  { price: 410, status: false },
  { price: 500, status: false },
  { price: 150, status: false },
  { price: 600, status: false },
  { price: 200, status: false },
  { price: 250, status: false },
  { price: 430, status: false },
  { price: 120, status: false },
  { price: 450, status: false },
  { price: 130, status: false },
  { price: 470, status: false },
  { price: 500, status: false },
  { price: 370, status: false },
  { price: 310, status: false },
  { price: 480, status: false },
];

const packageOptionEls = document.querySelectorAll('.package .package-option');
console.log(packageOptionEls);
let packagePriceResult = 0;
const priceResult = document.querySelector('.estimate-price-box .result');
packageOptionEls.forEach((el, index) => {
  el.addEventListener('click', () => {
    priceTable[index].status = !priceTable[index].status;
    console.log('statue', priceTable[index].status);
    if (priceTable[index].status) {
      packagePriceResult += priceTable[index].price;
      console.log(packagePriceResult);
      el.classList.add('clicked');
    } else {
      packagePriceResult -= priceTable[index].price;
      console.log(packagePriceResult);
      el.classList.remove('clicked');
    }
    priceResult.textContent = `${packagePriceResult}€`;
  });
});

// FAQ
const questionEls = document.querySelectorAll('.faq .question');
const answerEls = document.querySelectorAll('.faq .answer');
const questionElsStatus = [false, false, false, false];
questionEls.forEach((el, index) => {
  el.addEventListener('click', () => {
    questionElsStatus[index] = !questionElsStatus[index];
    console.log('index', index);
    if (questionElsStatus[index]) {
      answerEls[index].classList.remove('hide');
      el.classList.add('clicked');
    } else {
      answerEls[index].classList.add('hide');
      el.classList.remove('clicked');
    }
  });
});

const menuProject = document.getElementById('menuProject');
const menuProcess = document.getElementById('menuProcess');
const menuPackage = document.getElementById('menuPackage');
const menuContact = document.getElementById('menuContact');
const recentProjectBtn = document.getElementById('recentProjectBtn');
const projectEl = document.querySelector('.project');
const processEl = document.querySelector('.process');
const packageEl = document.querySelector('.package');
const contactEl = document.querySelector('.contact');
menuProject.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: window.pageYOffset + projectEl.getBoundingClientRect().top,
  });
});
menuProcess.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: window.pageYOffset + processEl.getBoundingClientRect().top,
  });
});
menuPackage.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: window.pageYOffset + packageEl.getBoundingClientRect().top,
  });
});
menuContact.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: window.pageYOffset + contactEl.getBoundingClientRect().top,
  });
});
recentProjectBtn.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: window.pageYOffset + projectEl.getBoundingClientRect().top,
  });
});

// // badge % to top
const badgeEl = document.querySelector('.badges');
const totopEl = document.getElementById('to-top');
console.log('totop', totopEl);
// const projectEl = document.querySelector('.project');
const faqEl = document.querySelector('.faq');
console.log(window.pageYOffset + contactEl.getBoundingClientRect().top);
window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (
      window.scrollY >
      window.pageYOffset + projectEl.getBoundingClientRect().top
    ) {
      gsap.to(totopEl, 0.6, {
        opacity: 1,
      });
    } else {
      gsap.to(totopEl, 0.6, {
        opacity: 0,
      });
    }

    if (
      window.scrollY <
      window.pageYOffset + faqEl.getBoundingClientRect().top
    ) {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
      });
    }
    badgeEl.addEventListener('click', () => {
      // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
      gsap.to(window, 0.7, {
        scrollTo: window.pageYOffset + contactEl.getBoundingClientRect().top,
      });
    });

    totopEl.addEventListener('click', () => {
      // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
      gsap.to(window, 0.7, {
        scrollTo: 0,
      });
    });
  })
);
