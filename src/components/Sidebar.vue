<template>
  <aside class="sidebar">
    <nav>
      <ul class="direcao">
        <li><router-link to="/">Sobre</router-link></li>
        <li><router-link to="/projetos">Projetos</router-link></li>
      </ul>
      <ul class="social">
        <li><a href="https://github.com/naymaisa" target="_blank"><i class="bi bi-github"></i></a></li>
        <li><a href="https://linkedin.com/in/nayaramaisa" target="_blank"><i class="bi bi-linkedin"></i></a></li>
        <li><a href="https://www.youtube.com/@CodandocomNay" target="_blank"><i class="bi bi-youtube"></i></a></li>
        <li><a href="https://www.tiktok.com/@codandocomnay" target="_blank"><i class="bi bi-tiktok"></i></a></li>
        <li><a href="https://www.instagram.com/codandocomnay/" target="_blank"><i class="bi bi-instagram"></i></a></li>
        <li><a href="mailto:nayaramaisa.stn@gmail.com" target="_blank"><i class="bi bi-envelope-at-fill"></i></a></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 12px;

  height: 100vh;
  width: 100px;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
}

.main-content {
  margin-left: 100px;

  flex: 1;
  padding: 2rem;
}

.sidebar .direcao a {
  transition: transform 0.3s ease, color 0.3s ease;
}

.sidebar .direcao a:hover {
  color: #7c3aed;

}


.sidebar nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
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

.main-content {
  flex: 1;
  padding: 2rem;
}

</style>
