<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const form = ref({
  fullname: '',
  email: '',
  message: '',
})

const responseMessage = ref('')
const isSubmitting = ref(false)
const $toast = useToast()
const errors = ref([])
const sendEmail = async () => {
  isSubmitting.value = true
  responseMessage.value = ''

  try {
    const formData = new FormData()
    formData.append('name', form.value.fullname)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)

    const response = await axios.post(
      'https://palevioletred-alpaca-194376.hostingersite.com/api/dossier/send-mail',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    )

    if (response.data.status === 'success') {
      responseMessage.value = 'Message sent successfully!'
      form.value = { fullname: '', email: '', message: '' } // Reset form
    } else {
      responseMessage.value = response.data.message
    }
    $toast.success('Email Sent!', {
      position: 'top-right',
    })

    form.value = {
      fullname: '',
      email: '',
      message: '',
    }
  } catch (error) {
    console.log(error.response)
    console.log(errors.value)

    errors.value = error.response?.data?.errors

    $toast.error('Something Went Wrong!', {
      position: 'top-right',
    })
    console.error('Error sending email:', error)
    responseMessage.value = 'An error occurred. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
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
        <div class="flex flex-col">
          <input
            v-model="form.fullname"
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Full name"
            required
            data-form-input
          />
          <span v-if="errors.name" class="text-red-500 text-sm mt-3 ml-2">Name is required</span>
        </div>

        <div class="flex flex-col">
          <input
            v-model="form.email"
            type="email"
            name="email"
            class="form-input"
            placeholder="Email Address"
            required
            data-form-input
          />
          <span v-if="errors.email" class="text-red-500 text-sm mt-3 ml-2">Email is required</span>
        </div>
      </div>

      <div class="flex flex-col mt-4">
        <textarea
          v-model="form.message"
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input=""
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm ml-2">Message is required</span>
      </div>

      <button @click="sendEmail()" class="form-btn mt-4" type="button" data-form-btn>
        <ion-icon name="paper-plane"></ion-icon>
        <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
      </button>

      <div
        v-if="responseMessage"
        class="mt-4 text-center"
        :class="{ 'text-green-500': responseMessage.includes('success') }"
      >
        {{ responseMessage }}
      </div>
    </form>
  </section>
</template>

<style scoped>
/* You can add any additional custom styles here if needed */
</style>
