<script setup>

</script>

<template>
                <header>
                    <h2 class="h2 article-title">Portfolio</h2>
                </header>

                <section class="projects">
                    <ul class="filter-list">
                        <li class="filter-item"><button class="active" data-filter-btn>All</button></li>
                        <li class="filter-item"><button data-filter-btn>Web Design</button></li>
                        <li class="filter-item"><button data-filter-btn>Applications</button></li>
                        <li class="filter-item"><button data-filter-btn>Web Development</button></li>
                    </ul>

                    <div class="filter-select-box">
                        <button class="filter-select " data-select>
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
                    </div>

                    <ul class="project-list">
                        <li class="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure class="project-img">
                                   <a href="https://palevioletred-alpaca-194376.hostingersite.com/" target="_blank">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                  </a>
                                    <img  src="@/assets/projects/quantumSpin-home.jpg" alt="finance" loading="lazy">
                                </figure>

                                <h3 class="project-title">Quantum Spin</h3>
                                <p class="project-category">Web Development</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/bNrcM2Wt/project-2.png" alt="orizon" loading="lazy">
                                </figure>

                                <h3 class="project-title">Orizon</h3>
                                <p class="project-category">Web Development</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/jSJVqYsq/project-3.jpg" alt="fundo" loading="lazy">
                                </figure>

                                <h3 class="project-title">Fundo</h3>
                                <p class="project-category">Web Design</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="applications">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/dtpXxNGb/project-4.png" alt="brawlhalla" loading="lazy">
                                </figure>

                                <h3 class="project-title">Brawlhalla</h3>
                                <p class="project-category">Applications</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/43T0JKLw/project-5.png" alt="dsm." loading="lazy">
                                </figure>

                                <h3 class="project-title">DSM.</h3>
                                <p class="project-category">Web Design</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/qR1DX1kZ/project-6.png" alt="metaspark" loading="lazy">
                                </figure>

                                <h3 class="project-title">Metaspark</h3>
                                <p class="project-category">Web Design</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/Kj4q9tjc/project-7.png" alt="summary" loading="lazy">
                                </figure>

                                <h3 class="project-title">Summary</h3>
                                <p class="project-category">Web Development</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="applications">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/rw2j4B1w/project-8.jpg" alt="task manager" loading="lazy">
                                </figure>

                                <h3 class="project-title">Task Manager</h3>
                                <p class="project-category">Applications</p>
                            </a>
                        </li>

                        <li class="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure class="project-img">
                                    <div class="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/7LxNsSQv/project-9.png" alt="arrival" loading="lazy">
                                </figure>

                                <h3 class="project-title">Arrival</h3>
                                <p class="project-category">Web Development</p>
                            </a>
                        </li>
                    </ul>
                </section>
</template>
<style scoped>

</style>
