<script setup>
const toggleSidebar = () => {
  const sidebarElement = document.getElementById('sidebar-info-more')
  const isVisible = sidebarElement.style.display === 'block'
  sidebarElement.style.display = isVisible ? 'none' : 'block'
}
</script>

<template>
  <aside class="sidebar" data-sidebar>
    <div>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="@/assets/profile/profile2.jpeg" class="rounded-md" alt="avatar" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard Hanrick">Hamza Liaqat</h1>
          <p class="title">Full-Stack Developer</p>
        </div>

        <button @click="toggleSidebar" class="info-more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <!-- Sidebar content -->
      <div class="sidebar-info-more" id="sidebar-info-more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a href="mailto:hmzah.liaqat@gmail.com" class="contact-link"
                >hmzah.liaqat@gmail.com</a
              >
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
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://github.com/hmzahliaqat" target="_blank" class="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/hmzah_liaqat/" target="_blank" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
@media (max-width: 1250px) {
  .sidebar-info-more {
    display: none;
  }
}
</style>
