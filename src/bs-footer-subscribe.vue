<template>
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__slider slider">
        <div class="subscribe__comments slider__items">
          <div class="subscribe__comment">
            <div class="subscribe__img">
              <img src="/src/img/user.png" alt="" class="comment__userpic">
            </div>
            <div class="subscribe__block-text">
              <p class="comment__text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
              <p class="commetn__username">Bin Burhan</p>
              <p class="comment__address">Dhaka, Bd</p>
            </div>
          </div>
        </div>
        <div class="slider__control-dot">
          <div class="slider__chooser active"></div>
          <div class="slider__chooser"></div>
          <div class="slider__chooser"></div>
        </div>
      </div>
      <form action="" class="subscribe__form">
        <h3>Subscribe</h3>
        <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
        <div class="subscribe__input-form">
          <input type="email" class="subscribe__input" placeholder="Enter Your Email" required>
          <button class="subscribe__button btn">Subscribe</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
    export default {
        name: "bs-footer-subscribe"
    }
</script>

<style lang="scss">
  @import "scss/colors";
  @import "scss/styles/subscribe";
</style>
