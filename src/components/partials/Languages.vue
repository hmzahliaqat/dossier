<script setup></script>

<template>
  <section class="testimonials">
    <h3 class="h3 testimonials-title">Languages & Frameworks</h3>

    <ul class="testimonials-list has-scrollbar">
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Replace with PHP logo image -->
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
              alt="PHP logo"
              data-testimonials-avatar
              width="60"
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>PHP</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              PHP (Hypertext Preprocessor) is a widely-used open-source scripting language,
              particularly suited for web development. It can be embedded into HTML and is used to
              create dynamic and interactive websites. PHP powers major platforms like WordPress,
              Facebook, and Wikipedia, offering robust functionality and ease of integration with
              databases like MySQL.
            </p>
          </div>
        </div>
      </li>
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Correct Laravel logo image -->
            <img
              src="https://laravel.com/img/logomark.min.svg"
              alt="Laravel logo"
              data-testimonials-avatar
              width="60"
              height="60"
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Laravel</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              Laravel is a robust PHP framework that provides an elegant syntax for web application
              development. It simplifies common tasks such as routing, authentication, and caching.
              Laravel promotes clean, readable code and is highly popular for building scalable and
              secure web applications. With its rich ecosystem, including tools like Laravel Forge
              and Laravel Envoyer, Laravel is a powerful choice for modern web development.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Correct Vue.js logo image -->
            <img
              src="https://vuejs.org/images/logo.png"
              alt="Vue.js logo"
              data-testimonials-avatar
              width="60px"
              height="60px"
            />
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Vue.js</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              Vue.js is a progressive JavaScript framework used for building user interfaces. It is
              designed to be incrementally adoptable, making it easy to integrate with other
              projects or scale up to a full-fledged single-page application. Vue.js provides an
              intuitive API, excellent documentation, and powerful features like two-way data
              binding, a component-based architecture, and a virtual DOM for enhanced performance.
              Vue.js is a top choice for developers looking for a flexible and efficient framework
              for building modern web apps.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Pinia logo SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              viewBox="0 0 256 331"
            >
              <defs>
                <linearGradient id="logosPinia0" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%">
                  <stop offset="0%" stop-color="#52ce63" />
                  <stop offset="100%" stop-color="#51a256" />
                </linearGradient>
                <linearGradient id="logosPinia1" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%">
                  <stop offset="0%" stop-color="#52ce63" />
                  <stop offset="100%" stop-color="#51a256" />
                </linearGradient>
                <linearGradient id="logosPinia2" x1="50%" x2="50%" y1="0%" y2="58.811%">
                  <stop offset="0%" stop-color="#8ae99c" />
                  <stop offset="100%" stop-color="#52ce63" />
                </linearGradient>
                <linearGradient id="logosPinia3" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%">
                  <stop offset="0%" stop-color="#ffe56c" />
                  <stop offset="100%" stop-color="#ffc63a" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logosPinia0)"
                d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799s-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125"
                transform="rotate(-38 72.877 106.136)"
              />
              <path
                fill="url(#logosPinia1)"
                d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415s-35.989 32.542-32.334 69.717s15.201 61.92 45.567 64.905"
                transform="rotate(52 178.34 119.085)"
              />
              <path
                fill="url(#logosPinia2)"
                d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013S138.531 3.745 129.232 3.745S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013"
                transform="rotate(7 128.858 77.673)"
              />
              <path
                fill="url(#logosPinia3)"
                d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482s-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462s46.105 91.482 103.002 91.482"
              />
              <ellipse cx="165.427" cy="216.677" fill="#eaadcc" rx="14.717" ry="6.845" />
              <ellipse
                cx="57.273"
                cy="212.57"
                fill="#eaadcc"
                rx="14.717"
                ry="6.845"
                transform="rotate(7 57.273 212.57)"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Pinia</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              Pinia is a state management library for Vue.js, designed to be simple, fast, and
              modular. It offers a new approach to managing state, with features like stores,
              actions, and plugins that integrate seamlessly into Vue applications. Pinia is the
              successor of Vuex and provides a more streamlined API with enhanced performance and
              developer experience.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Livewire SVG logo -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              viewBox="0 0 128 128"
            >
              <path
                style="fill-rule: evenodd; fill: #fb70a9; fill-opacity: 1"
                d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #4e56a6; fill-opacity: 1"
                d="M40.844 78.145v22.668c0 4.066-3.301 7.363-7.371 7.363a7.365 7.365 0 0 1-7.371-7.364V73.45c1.375-2.523 2.945-4.707 5.78-4.707 4.61 0 6.223 5.79 8.962 9.403Zm27.843 1.183v35.844a8.185 8.185 0 0 1-8.187 8.183c-4.523 0-8.191-3.664-8.191-8.183v-40.57c1.543-2.973 3.132-5.86 6.39-5.86 5.16 0 6.563 7.242 9.989 10.586Zm26.211-.66v26.023c0 4.067-3.3 7.364-7.37 7.364-4.071 0-7.372-3.297-7.372-7.364V72.707c1.281-2.195 2.809-3.965 5.364-3.965 4.84 0 6.375 6.38 9.378 9.926Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #000; fill-opacity: 0.298039"
                d="M40.844 85.094c-1.309-1.602-2.856-2.79-5.094-2.79-5.316 0-6.293 6.696-9.648 9.712V63.145a7.365 7.365 0 0 1 7.37-7.364c4.071 0 7.372 3.297 7.372 7.364Zm27.843.515c-1.394-1.855-3.023-3.304-5.496-3.304-5.914 0-6.457 8.285-10.882 10.578v-12.77c0-4.52 3.668-8.183 8.191-8.183a8.185 8.185 0 0 1 8.188 8.183Zm26.211-1.433c-1.136-1.117-2.48-1.871-4.265-1.871-5.73 0-6.418 7.777-10.477 10.343V66.734a7.371 7.371 0 0 1 14.742 0Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #fb70a9; fill-opacity: 1"
                d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #e24ca6; fill-opacity: 1"
                d="M97.273 88.984c13.676-20.332 14.028-42.879 1.059-67.652 9.613 9.844 15.547 23.348 15.547 38.25 0 8.61-1.98 16.75-5.508 23.992-2.004 2.91-3.531 6.5-7.61 6.5a5.947 5.947 0 0 1-3.488-1.09Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #fff; fill-opacity: 1"
                d="M58.89 73.117c18.15 0 25.79-10.52 25.79-25.46 0-14.942-11.547-28.692-25.79-28.692-14.245 0-25.792 13.75-25.792 28.691 0 14.942 7.64 25.461 25.793 25.461Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #030776; fill-opacity: 1"
                d="M61.625 37.836c0 5.89-4.332 10.668-9.672 10.668-5.344 0-9.672-4.777-9.672-10.668 0-5.89 4.328-10.668 9.672-10.668 5.34 0 9.672 4.777 9.672 10.668Zm0 0"
              />
              <path
                style="fill-rule: evenodd; fill: #fff; fill-opacity: 1"
                d="M55.176 35.375c0 2.719-2.164 4.922-4.836 4.922s-4.836-2.203-4.836-4.922 2.164-4.922 4.836-4.922 4.836 2.203 4.836 4.922Zm0 0"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Livewire</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              Livewire is a full-stack framework for Laravel that makes building dynamic interfaces
              simple, without leaving the comfort of Laravel. It allows developers to build modern,
              reactive user interfaces with Blade templates and PHP, without the need for a separate
              JavaScript framework. Livewire automatically updates the DOM through AJAX requests,
              offering a smooth user experience while maintaining the simplicity of server-side
              rendering. It’s a powerful tool for developers who want to create dynamic, real-time
              applications in Laravel.
            </p>
          </div>
        </div>
      </li>
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- MySQL logo SVG -->
            <svg
              width="90"
              height="90"
              viewBox="-18.458 -22.75 191.151 191.151"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-18.458 6.58h191.151v132.49H-18.458V6.58z" fill="none" />
              <path
                d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
                fill="#5d87a1"
              />
              <path
                d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
                fill="#f8981d"
              />
              <path
                d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
                fill="#5d87a1"
              />
              <path
                d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
                fill="#f8981d"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>MySQL</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              MySQL is one of the most popular relational database management systems (RDBMS). It is
              widely used for web applications and known for its speed, reliability, and ease of
              use. MySQL supports a wide variety of database engines, which provide flexibility and
              scalability. It is a core component of the LAMP stack (Linux, Apache, MySQL,
              PHP/Perl/Python) and has a strong community, making it an excellent choice for both
              small projects and large-scale enterprise applications.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- HTML logo SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="60px"
              height="60px"
            >
              <path
                fill="#E44D26"
                d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
              />
              <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
              <path
                fill="#EBEBEB"
                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
              />
              <path
                fill="#fff"
                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>HTML</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              HTML (Hypertext Markup Language) is the standard language used to create and design
              web pages. It is the foundation of all web content and structures content with a
              system of tags. HTML is critical for structuring text, links, images, and other
              elements on a webpage.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- CSS logo SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="60px"
              height="60px"
            >
              <path
                fill="#1572B6"
                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
              />
              <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
              <path
                fill="#fff"
                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
              />
              <path
                fill="#EBEBEB"
                d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
              />
              <path
                fill="#fff"
                d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
              />
              <path
                fill="#EBEBEB"
                d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>CSS</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              CSS (Cascading Style Sheets) is a language used to describe the presentation of a
              document written in HTML. CSS controls the layout, design, colors, fonts, and overall
              style of web pages, making them visually appealing. It is an essential tool for
              creating responsive, modern web designs.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <!-- Sass logo SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="60px"
              height="60px"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#CB6699"
                d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Sass</h4>

          <div class="testimonials-text" data-testimonials-text>
            <p>
              Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is
              interpreted or compiled into CSS. Sass extends CSS by adding features like variables,
              nested rules, mixins, and functions. It makes writing and maintaining complex
              stylesheets easier and more efficient, enabling cleaner and more organized code.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- SVG Logo (Tailwind Logo) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 154">
              <defs>
                <linearGradient
                  id="logosTailwindcssIcon0"
                  x1="-2.778%"
                  x2="100%"
                  y1="32%"
                  y2="67.556%"
                >
                  <stop offset="0%" stop-color="#2298bd" />
                  <stop offset="100%" stop-color="#0ed7b5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#logosTailwindcssIcon0)"
                d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Tailwind</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              Tailwind CSS is a utility-first CSS framework that provides low-level utility classes
              to build custom designs without having to leave your HTML. It's highly customizable,
              enabling developers to rapidly create complex, responsive layouts with ease while
              keeping the code clean and maintainable.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- SVG Logo (JavaScript) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
              <path fill="#f7df1e" d="M0 0h256v256H0z" />
              <path
                d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>JavaScript</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              JavaScript is a versatile and powerful programming language used to create dynamic and
              interactive content on the web. It enables developers to build rich user experiences
              by manipulating the DOM, handling events, and making asynchronous requests to the
              server. With frameworks and libraries like React, Angular, and Vue, JavaScript is one
              of the core languages for web development.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- SVG Logo (jQuery) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 512 116"
              class="w-16 h-16"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#1a1918"
                  d="m489.718 8.646l21.42.118s-39.824 53.964-43.076 58.362c-1.056 1.424-2.66 2.96-3.474 4.864c-2.057 4.786-4.169 15.285-4.169 15.285l-19.599.098s3.05-10.944 2.924-16.773c-.11-5.092-2.71-10.178-4.168-15.285c-1.474-5.17-3.475-15.286-3.475-15.286h20.15l2.779 11.117z"
                />
                <path
                  fill="#1a1918"
                  d="M449.157 20.027c3.953 2.383 6.379 15.529 6.379 15.529s-20.684.305-31.94.305h-9.727l-11.812 51.414h-18.064s11.242-55.874 13.896-66.004c.86-3.28 5.892-2.717 14.389-2.717h13.569c8.762 0 19.003-1.119 23.31 1.473m-84.097 25.04s.563-3.3-1.91-7.122c-2.113-3.258-4.064-4.016-9.623-4.19c-15.695-.493-15.39 11.138-15.39 11.138zm17.022-13.32c2.3 8.297-2.084 27.792-2.084 27.792s-22.894-.382-35.434 0c-3.899.119-8.566-.424-9.727 1.39c-1.633 2.542.597 6.455 2.487 8.108c2.175 1.903 6.412 2.12 7.935 2.313c10.178 1.293 31.48.334 31.48.334l-3.69 16.34s-30.103 1.51-45.16-2.084c-2.973-.708-5.76-2.139-7.643-4.168c-.514-.555-.96-1.312-1.446-1.966c-.388-.522-1.52-2.237-2.028-3.593c-3.439-9.164.403-26.72 4.169-36.128c.437-1.09.986-2.473 1.564-3.648c.722-1.465 1.333-3.119 1.91-3.995c.388-.604.869-.993 1.272-1.563c.465-.674 1.006-1.327 1.507-1.91c1.39-1.612 2.967-2.752 4.864-4.168c6.273-4.698 17.626-8.345 31.265-6.949c5.135.528 12.89 2.362 16.675 7.643c1.014 1.41 1.515 4.21 2.084 6.253M299.229 18.49l17.516-.103s-9.762 46.307-14.737 68.888h-20.15c-14.082 0-26.623 1.744-31.959-8.338c-5.176-9.789-.236-25.887 2.084-36.824c1.64-7.74 5.094-23.56 5.094-23.56l18.148-.166s-5.128 24.63-7.262 36.928c-.764 4.405-2.34 8.553-.694 11.81c1.563 3.1 3.752 3.322 10.421 3.475c2.113.05 9.033 0 9.033 0zm-81.985 33.35c1.834-6.516 4.509-13.582 4.169-19.454c-.368-6.28-5.634-11.998-9.032-13.2c-10.234-3.613-19.815 1.438-23.623 5.558c-4.926 5.336-6.594 11.569-8.338 20.15c-1.298 6.37-2.362 13.095 0 18.063c4.182 8.783 17.224 6.865 31.266 6.949c2.084-5.586 3.807-11.86 5.558-18.066m24.318-25.706c2 14.548-5.676 30.606-10.964 44.57c5.392.487 10.117-.075 10.457.327c.354.521-3.614 16.668-4.997 16.71c-4.279.111-18.459.229-24.372.229c-19.295 0-37.345 1.257-46.55-8.337c-3.738-3.898-6.323-10.583-6.949-15.286c-1.042-7.851.264-16.495 2.085-23.622c1.647-6.435 3.758-12.507 6.948-18.066C175.328 8.507 189.432-1.998 213.075.427c4.586.472 11.172 2.48 15.286 4.863c.284.167 1.279.959 1.507 1.098c5.559 3.537 10.624 11.978 11.694 19.746m-85.369-7.56c-1.167 5.315-2.334 11.34-3.564 16.592h-19.454c1.507-5.822 2.661-11.61 4.169-16.675c6.225 0 12.013.083 18.85.083M132.48 40.03h18.76c-2.453 13.576-7.31 35.475-11.117 50.719c-2.383 9.54-3.974 16.501-10.422 21.538c-.577.452-.91.237-1.39.695c-1.188 1.133-6.684 2.447-9.726 2.779c-4.947.536-10.54.07-16.62-.055c1.591-5.815 3.391-12.798 4.809-18.01c14.82 1.794 15.195-12.214 18.064-25.706c1.66-7.796 6.691-28.834 7.642-31.96"
                />
                <g fill="#21609b">
                  <path
                    d="m88.708 75.465l-.402 1.041c-6.85 13.34-18.989 21.525-36.303 21.886c-8.094.166-15.806-1.91-20.844-4.169C20.287 89.34 11.142 80.28 6.148 70.601c-7.164-13.875-8.456-33.177 6.44-47.593c.23 0-1.807 3.126-1.577 3.126l-.41 1.334C-.133 61.075 32.938 89.874 65.086 86.58c7.726-.791 17.578-5.022 23.622-11.115"
                  />
                  <path
                    d="M69.254 61.568c8.088.056 16.536-3.724 21.539-9.032c-4.377 11.11-17.05 18.252-34.044 15.98c-14.23-1.904-27.785-16.223-29.181-30.57c-1.021-10.443 2.618-16.675 8.615-24.234c-2.084 3.953-2.863 7.003-3.057 8.948c-2.278 22.588 18.044 38.79 36.128 38.908"
                  />
                  <path
                    d="M89.98 33.513c-1.257 2.884-8.496 8.33-11.693 9.01c-12.659 2.697-20.766-3.306-25.013-10.136c-.631-1.021-1.798-3.807-2.007-4.516c-1.647-5.6-.89-14.07 4.023-18.454c-1.48 4.17-1.696 9.011-.917 12.159c.472 1.904 1.91 5.226 3.349 7.316C60.34 32.7 62 33.625 65.364 35.646c1.515.91 3.14 1.64 3.842 1.841c3.189.938 9.922 3.412 20.775-3.974"
                  />
                </g>
              </g>
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>jQuery</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              jQuery is a fast, small, and feature-rich JavaScript library. It simplifies things
              like HTML document traversal and manipulation, event handling, and animation. jQuery
              makes it much easier to create dynamic and interactive websites with less code, and it
              is widely used by developers around the world.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- Git SVG Logo -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 256 256"
              class="w-16 h-16"
            >
              <path
                fill="#de4c36"
                d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.8 19.8 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.7 19.7 0 0 1 6.421-4.281V94.196a19.4 19.4 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Git</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              Git is a free and open-source distributed version control system that tracks changes
              in source code during software development. It allows multiple developers to work on
              the same project without interfering with each other's work, and it offers powerful
              tools for branching, merging, and versioning, making it essential for modern
              development workflows.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- GitHub SVG Logo -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 256 250"
              class="w-16 h-16"
            >
              <path
                fill="#161614"
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>GitHub</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              GitHub is a platform for version control and collaboration, allowing developers to
              work together on projects. It uses Git as its underlying version control system,
              providing a web-based interface for managing code repositories. GitHub simplifies
              collaborative coding, and its features include pull requests, issues, and wikis to
              help developers communicate and track progress effectively.
            </p>
          </div>
        </div>
      </li>

      <li class="testimonials-item">
        <div class="content-card p-4 shadow-lg rounded-lg bg-white" data-testimonials-item>
          <figure class="testimonials-avatar-box mb-4 flex justify-center">
            <!-- Visual Studio Code SVG Logo -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 256 254"
              class="w-16 h-16"
            >
              <defs>
                <linearGradient id="logosVisualStudioCode0" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#fff" />
                  <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
                <path
                  id="logosVisualStudioCode1"
                  d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z"
                />
              </defs>
              <mask id="logosVisualStudioCode2" fill="#fff">
                <use href="#logosVisualStudioCode1" />
              </mask>
              <path
                fill="#0065a9"
                d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36"
                mask="url(#logosVisualStudioCode2)"
              />
              <path
                fill="#007acc"
                d="m246.135 226.816l-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36"
                mask="url(#logosVisualStudioCode2)"
              />
              <path
                fill="#1f9cf0"
                d="M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z"
                mask="url(#logosVisualStudioCode2)"
              />
              <path
                fill="url(#logosVisualStudioCode0)"
                fill-opacity="0.25"
                d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z"
                mask="url(#logosVisualStudioCode2)"
              />
            </svg>
          </figure>

          <h4 class="h4 testimonials-item-title" data-testimonials-title>Visual Studio Code</h4>

          <div class="testimonials-text text-gray-700 text-base" data-testimonials-text>
            <p>
              Visual Studio Code (VS Code) is a free, open-source code editor developed by
              Microsoft. It supports a wide range of programming languages and is highly
              customizable through extensions. VS Code offers features like IntelliSense, debugging,
              Git integration, and a robust marketplace for plugins, making it a popular choice
              among developers for both small and large projects.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
