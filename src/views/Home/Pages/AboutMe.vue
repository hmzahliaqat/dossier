<script setup>
import Languages from '../../../components/partials/Languages.vue'
import ThirdParty from '../../../components/partials/ThirdParty.vue'
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">Who's this guy?</h2>
    </header>

    <section class="about-text">
      <p>My name is Hamza Liaqat.</p>
      <p>
        I am a Software Engineer and developer with 2+ year of experience with a keen focus on
        Laravel, Vue and Vuex with deep understanding of MySQL's storage engines, indexing
        mechanisms, and query optimization techniques.
      </p>
      <p>
        Self-reliant with proficiency in managing end-to-end project responsibilities having a
        strong grasp of software design principles and patterns. Demonstrated ability to deliver
        high-quality code through meticulous attention to detail with savvy in optimization
        techniques. Strong Communication skills and sense of responsibility with a collaborative
        mindset and drive for continuous learning.
      </p>
      <p>
        Developer with a history of good programming skills, eager to contribute to challenging
        teams and tackle complex problems.
      </p>
      <h4 style="font-weight: bolder; float: right; font-style: italic">
        ~It's a pleasure to make your acquaintance. 😊
      </h4>
      <br />
    </section>
    &nbsp;
    <section class="service">
      <h3 class="h3 service-title">What does he do?</h3>

      <ul class="service-list">
        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/4389jZkP/icon-design.png" alt="icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web Design</h4>
            <p class="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" alt="icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web development</h4>
            <p class="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>
      </ul>
    </section>

    <Languages />
    <ThirdParty />

    <div class="modal-container" data-modal-container>
      <div class="overlay" data-overlay></div>

      <section class="testimonials-modal">
        <button class="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img
              src="https://i.postimg.cc/zGDHfn3G/avatar-1.png"
              alt="Daniel Lewis"
              width="80"
              data-modal-img
            />
          </figure>

          <img src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon" />
        </div>

        <div class="modal-content">
          <h4 class="h3 modal-title" data-modal-title>Daniel Lewis</h4>
          <time datetime="2023-06-14">14 June, 2023</time>

          <div class="modal-text" data-modal-text>
            <p>
              Richard was hired to create a corporate identity. It's modern, clean and with a
              beautiful design that got a lot of praises from colleagues and visitors. We were very
              pleased with the work done. He has a lot of experience and is very concerned about the
              needs of client.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- <section class="clients">
                    <h3 class="h3 clients-title">Clients</h3>

                    <ul class="clients-list has-scrollbar">
                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/YqfKyG66/logo-1-color.png" alt="logo"></a>
                        </li>

                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png" alt="logo"></a>
                        </li>

                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png" alt="logo"></a>
                        </li>

                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png" alt="logo"></a>
                        </li>

                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png" alt="logo"></a>
                        </li>

                        <li class="clients-item">
                            <a href="#"><img src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png" alt="logo"></a>
                        </li>
                    </ul>
                </section> -->
  </article>
</template>

<style scoped></style>
