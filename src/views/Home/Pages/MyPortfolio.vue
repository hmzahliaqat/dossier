<script setup></script>
<template>
  <header>
    <h2 class="h2 article-title">Portfolio</h2>
  </header>
  <section class="projects">
    <!-- <ul class="filter-list">
          <li class="filter-item"><button class="active" data-filter-btn>All</button></li>
          <li class="filter-item"><button data-filter-btn>Web Design</button></li>
          <li class="filter-item"><button data-filter-btn>Applications</button></li>
          <li class="filter-item"><button data-filter-btn>Web Development</button></li>
        </ul> -->

    <!-- mobile category select -->
    <!-- <div class="filter-select-box">
      <button class="filter-select" data-select>
        <div class="select-value" data-select-value>Select Category</div>

        <div class="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>

      <ul class="select-list">
        <li class="select-item"><button data-select-item>All</button></li>
        <li class="select-item"><button data-select-item>Web Design</button></li>
        <li class="select-item"><button data-select-item>Applications</button></li>
        <li class="select-item"><button data-select-item>Web Development</button></li>
      </ul>
    </div> -->

    <ul class="project-list">
      <!-- charter -->
      <li class="project-item active" data-filter-item data-category="web development">
        <a href="https://charter-center.com/" target="_blank">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img src="@/assets/projects/charter.jpeg" alt="charter" loading="lazy" />
          </figure>

          <h3 class="project-title">Charter</h3>
          <p class="project-category">Web Development</p>
        </a>
      </li>

      <!-- Interapptive -->
      <li class="project-item active" data-filter-item data-category="applications">
        <a href="https://redesign.interapptive.news/" target="_blank">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img src="@/assets/projects/interapptive.jpeg" alt="interapptive" loading="lazy" />
          </figure>

          <h3 class="project-title">Interapptive</h3>
          <p class="project-category">Web Development</p>
        </a>
      </li>

      <!-- Survey Rocks  -->
      <li class="project-item active" data-filter-item data-category="web design">
        <a
          href="https://acc-app.surveyrocks.io/cb473193-e283-406f-8552-84ecc105f746"
          target="_blank"
        >
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img src="@/assets/projects/survey-rocks.jpeg" alt="survey" loading="lazy" />
          </figure>

          <h3 class="project-title">Survey Rocks</h3>
          <p class="project-category">Web Development</p>
        </a>
      </li>

      <!-- <li class="project-item active" data-filter-item data-category="web design">
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img src="https://i.postimg.cc/qR1DX1kZ/project-6.png" alt="metaspark" loading="lazy" />
          </figure>

          <h3 class="project-title">Metaspark</h3>
          <p class="project-category">Web Design</p>
        </a>
      </li> -->
    </ul>
  </section>
</template>
<style scoped></style>
