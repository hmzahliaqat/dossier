<script setup>

</script>

<template>
  <header>
    <h2 class="h2 article-title">Contact</h2>
  </header>

  <section class="mapbox" data-mapbox>
    <figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13929.106049799774!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfef48d8d53f7d%3A0xd1b1e7b7758b93a7!2sCommercial%2C%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1647608789441!5m2!1sen!2sus"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </figure>
  </section>

  <section class="contact-form">
    <h3 class="h3 form-title">Contact Form</h3>

    <form action="#" class="form" data-form>
      <div class="input-wrapper">
        <input
          type="text"
          name="fullname"
          class="form-input"
          placeholder="Full name"
          required
          data-form-input
        />
        <input
          type="email"
          name="email"
          class="form-input"
          placeholder="Email Address"
          required
          data-form-input
        />
      </div>

      <textarea
        name="message"
        class="form-input"
        placeholder="Your Message"
        required
        data-form-input=""
      ></textarea>

      <button class="form-btn" type="submit" disabled data-form-btn>
        <ion-icon name="paper-plane"></ion-icon>
        <span>Send Message</span>
      </button>
    </form>
  </section>
</template>

<style scoped>

</style>
