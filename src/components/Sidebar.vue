<template>
  <div>
    <button class="menu-toggle" @click="toggleMenu">
      <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
    </button>

    <aside :class="['sidebar', { open: isOpen || isDesktop }]">
      <nav>
        <ul class="direcao">
          <li><router-link to="/" @click="closeMenu">Sobre</router-link></li>
          <li><router-link to="/projetos" @click="closeMenu">Projetos</router-link></li>
        </ul>
        <ul class="social">
          <li><a href="https://github.com/naymaisa" target="_blank"><i class="bi bi-github"></i></a></li>
          <li><a href="https://linkedin.com/in/nayaramaisa" target="_blank"><i class="bi bi-linkedin"></i></a></li>
          <li><a href="https://www.youtube.com/@CodandocomNay" target="_blank"><i class="bi bi-youtube"></i></a></li>
          <li><a href="https://www.tiktok.com/@codandocomnay" target="_blank"><i class="bi bi-tiktok"></i></a></li>
          <li><a href="https://www.instagram.com/codandocomnay/" target="_blank"><i class="bi bi-instagram"></i></a></li>
          <a
  href="mailto:nayaramaisa.stn@gmail.com?subject=Contato%20pelo%20portfólio&body=Olá%2C%20Nayara!%20Vi%20seu%20portfólio%20e...">
  <i class="bi bi-envelope-at-fill"></i>
</a>

        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const isDesktop = ref(window.innerWidth > 768)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  if (!isDesktop.value) isOpen.value = false
}

const handleResize = () => {
  isDesktop.value = window.innerWidth > 768
  if (isDesktop.value) isOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100px;
  background-color: #0d0d0d;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1.5rem;
}

.sidebar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.sidebar .social a {
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.sidebar .direcao :hover{
  
  color: #7c3aed;
}
.sidebar .social a:hover i {
  transform: scale(1.5);
  color: #7c3aed;
}

.sidebar .social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 2001;
  display: none;
}


@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .sidebar {
    width: 150px;
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
