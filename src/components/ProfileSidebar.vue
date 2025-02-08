<script setup>
import { useModuleSettings } from '@/composables/modules'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const { isUserSidebar, isAdminSidebar } = useModuleSettings()
</script>

<template>
  <aside class="sidebar" data-sidebar>
    <div v-if="isUserSidebar(route.name)">
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" alt="avatar" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard Hanrick">Hamza Liaqat</h1>
          <p class="title">Full-Stack Developer</p>
        </div>

        <button class="info-more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div class="sidebar-info-more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:richard@example.com" class="contact-link">hmzah.liaqat@gmail.com</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+12133522795" class="contact-link">+92 348 8926639</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">Sep 17, 1999</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Rawalpindi, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/hamza-liaqat-8b19471b3/"
              target="_blank"
              class="social-link"
              ><ion-icon name="logo-linkedin"></ion-icon
            ></a>
          </li>
          <li class="social-item">
            <a href="https://github.com/hmzahliaqat" target="_blank" class="social-link"
              ><ion-icon name="logo-github"></ion-icon
            ></a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/hmzah_liaqat/" target="_blank" class="social-link"
              ><ion-icon name="logo-instagram"></ion-icon
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isAdminSidebar(route.name)" class="sidebar-nav">
      <!-- <div class="sidebar-info">

            </div> -->

      <div class="sidebar-info-more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <!-- <p class="contact-title">Email</p> -->
              <RouterLink to="/dashboard/profile">
                <a class="contact-link">Profile</a>
              </RouterLink>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <!-- <p class="contact-title">Phone</p> -->

              <a class="contact-link">Resume</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <!-- <p class="contact-title">Phone</p> -->

              <a href="tel:+12133522795" class="contact-link">Projects</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <!-- <p class="contact-title">Birthday</p> -->

              <time datetime="1982-06-23">Advanced</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <!-- <p class="contact-title">Location</p> -->

              <address>Rawalpindi, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/hamza-liaqat-8b19471b3/"
              target="_blank"
              class="social-link"
              ><ion-icon name="logo-linkedin"></ion-icon
            ></a>
          </li>
          <li class="social-item">
            <a href="https://github.com/hmzahliaqat" target="_blank" class="social-link"
              ><ion-icon name="logo-github"></ion-icon
            ></a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/hmzah_liaqat/" target="_blank" class="social-link"
              ><ion-icon name="logo-instagram"></ion-icon
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
