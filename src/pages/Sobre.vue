<template>
  <div class="about-container">
    <div class="about-text">
      <h1>
        Olá! Eu sou a <span style="color:#7c3aed;">Nayara Maisa</span>
      </h1>
      <p>Desenvolvedora FullStack Java</p>
      <p>
        Atuo com foco em Java e tecnologias web.
        <br />
        Atualmente curso Análise e Desenvolvimento de Sistemas na PUC Minas e
        trabalho como freelancer no desenvolvimento de aplicações web completas, incluindo jogos educativos, e-commerces e
        sistemas integrados.
        <br />
        Utilizo no dia a dia Java, JavaScript, TypeScript, Node.js, React, Vue.js, HTML/CSS,
        MongoDB e Postman.
        <br />
        Tenho vivência internacional em Portugal e compartilho conteúdos sobre programação no meu canal no
        YouTube
      </p>

      <div class="icons-grid">
  <i class="devicon-java-plain colored" title="Java"></i>
  <i class="devicon-angularjs-plain colored" title="Angular"></i>
  <i class="devicon-typescript-plain colored" title="TypeScript"></i>
  <i class="devicon-javascript-plain colored" title="JavaScript"></i>
  <i class="devicon-react-original colored" title="React"></i>
  <i class="devicon-nodejs-plain colored" title="Node.js"></i>
<i class="devicon-vuejs-plain colored" title="Vue.js"></i>

  <div class="break-line"></div>

  
  <i class="devicon-mongodb-plain colored" title="MongoDB"></i>
  <i class="devicon-postgresql-plain colored" title="PostgreSQL"></i>
  <i class="devicon-html5-plain colored" title="HTML5"></i>
  <i class="devicon-css3-plain colored" title="CSS3"></i>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg"
    alt="Cypress"
    title="Cypress"
    class="custom-icon"
  />
    <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    alt="Postman"
    title="Postman"
    class="custom-icon"
  />
<img
  src="https://junit.org/junit5/assets/img/junit5-logo.png"
  alt="JUnit"
  title="JUnit"
  class="custom-icon"
/>




<i class="devicon-jest-plain colored" title="Jest"></i>
</div>

    </div>

    <div class="about-photo">
      <img src="/src/assets/nayara2.png" alt="Minha Foto" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 8rem 2rem 2rem 2rem;
  margin-left: 200px;
}

.about-text {
  flex: 1;
  padding: 2rem;
}

.about-photo img {
  width: 300px;
  max-width: 90vw;
  border-radius: 20px;
  object-fit: cover;
}

.icons-grid {
  margin-top: 32px;
  background-color: #1a1a1a79;
  border-radius: 20px;
  box-shadow: 0 0 10px #7c3aed;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.break-line {
  flex-basis: 100%;
  height: 0;
}

.icons-grid i {
  font-size: 48px;
  transition: transform 0.3s ease;
}

.icons-grid i:hover {
  transform: scale(1.2);
}


@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    margin-left: 0;
    text-align: center;
  }

  .about-photo img {
    margin: 0 auto;
    width: 250px;
  }

  .about-text {
    padding: 1rem;
  }

  .icons-grid {
    padding: 1rem;
    gap: 1.5rem;
  }

  .icons-grid i {
    font-size: 36px;
  }
}
.icons-grid img.custom-icon {
  height: 48px;
  width: 48px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.icons-grid img.custom-icon:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .icons-grid img.custom-icon {
    height: 36px;
    width: 36px;
  }
}

</style>
