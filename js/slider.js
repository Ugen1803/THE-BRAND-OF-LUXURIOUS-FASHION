"use strict";

class Slider {
  constructor(selector) {
    this.sliderEl = document.querySelector(selector);
    if (!this.sliderEl) {
      throw new Error("Wrong slider selector");
    }
  }

  init = function () {
    this.slides = this.sliderEl.querySelectorAll(".slide_item");
    this.slideIdx = 0;
    this.leftArrow = document.querySelector(".left_arrow");
    this.rightArrow = document.querySelector(".right_arrow");
    // создаём иконку загрузки
    this.loadIcon = document.createElement("i");
    this.loadIcon.classList.add("fas", "fa-spinner", "fa-spin");
    this.sliderEl.prepend(this.loadIcon);
    // действия при загрузке слайдов
    window.addEventListener("load", () => {
      this.slides[this.slideIdx].classList.remove("hidden-slide");
      this.loadIcon.remove();
      this.leftArrow.addEventListener("click", () => {
        this.setNextLeftImage();
      });
      this.rightArrow.addEventListener("click", () => {
        this.setNextRightImage();
      });
    });
  };

  // debugger
  setNextRightImage = function () {
    this.slides[this.slideIdx].classList.add("hidden-slide");

    if (this.slideIdx === this.slides.length - 1) {
      this.slideIdx = 0;
    } else {
      this.slideIdx++;
    }

    this.slides[this.slideIdx].classList.remove("hidden-slide");
  };

  setNextLeftImage = function () {
    this.slides[this.slideIdx].classList.add("hidden-slide");

    if (this.slideIdx === 0) {
      this.slideIdx = this.slides.length - 1;
    } else {
      this.slideIdx--;
    }

    this.slides[this.slideIdx].classList.remove("hidden-slide");
  };
}
const slider = new Slider(".slide-wrap");
slider.init();
