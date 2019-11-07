$(function() {
  // pusi大家庭轮播图
  let familiarSwiper = function(id, transIndex) {
    let familyImg = $(".swiperList").children();
    let mySwiper = new Swiper("#" + id, {
      loop: true,
      loopedSlides: 5,
      slidesPerView: "auto",
      autoplay: false, // 自动轮播
      centeredSlides: true,
      initialSlide: 2,
      watchSlidesProgress: true,
      // pagination: {
      //     el: '.banner_page',
      //     clickable: false,
      // },
      on: {
        progress: function(progress) {
          for (i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            var modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.1 + 1;
            }
            translate = slideProgress * modify * transIndex + "px";
            scale = 1 - Math.abs(slideProgress) / 7;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              "translateX(" + translate + ") scale(" + scale + ")"
            );
            slide.css("zIndex", zIndex);
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 4) {
              slide.css("opacity", 0);
            }
          }
        },
        setTransition: function(transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }
      }
    });
    for (let i = 0; i < familyImg.length; i++) {
      // familyImg[i]
    }
  };
  // 璞思大家庭轮播图
  familiarSwiper("familiarSwiper", 43);
  // 全部课程轮播图
  var curriculum = new Swiper("#curriculumSwiper", {
    loop: true, // 循环模式选项
    // 如果需要前进后退按钮
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
