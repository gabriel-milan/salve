<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header class="app-header">
      <div class="title-wrapper">
        <h1 class="app-title">Salve</h1>
        <p class="app-subtitle">com criatividade</p>
      </div>
      <nav>
        <RouterLink to="/" class="nav-link" exact>Home</RouterLink>
      </nav>
    </header>
    <main class="app-content">
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #007bff;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2; /* Ensure the header is above the content */
}

.title-wrapper {
  display: flex;
  flex-direction: column; /* Stack title and subtitle vertically */
  align-items: center;
}

.app-title {
  font-size: 1.5rem;
  margin: 0;
}

.app-subtitle {
  font-size: 1rem;
  margin: 0;
  margin-left: 10px; /* Add margin to move the subtitle to the right */
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: normal;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
}

.app-content {
  padding-top: 80px;
  min-height: 100vh;
}

.content-wrapper {
  margin-top: -100px; /* Add negative margin to move the content up */
}

/* Media Query for Desktop */
@media (min-width: 768px) {
  .title-wrapper {
    flex-direction: row; /* Display title and subtitle side by side on desktop */
  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    margin-top: -200px; /* Add negative margin to move the content up */
  }
}
</style>
