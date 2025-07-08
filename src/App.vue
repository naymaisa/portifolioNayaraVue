<template>
  <div class="app-container">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #0d0d0d;
  color: #ffffff;
}



a {
  color: #a259ff;
  text-decoration: none;
}

</style>
