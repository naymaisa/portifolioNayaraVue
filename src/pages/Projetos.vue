<template>
  <section class="projetos-container">
    <h2>Meus Projetos</h2>
    <div class="filtro-container">
      <div class="filtro-dropdown" @click="toggleDropdown" tabindex="0" @blur="fecharDropdown">
        <div class="dropdown-header">
          {{ categoriaSelecionada === 'todos' ? 'Todos os projetos' : categoriaSelecionada }}
          <span class="seta">&#9662;</span>
        </div>
        <ul v-if="dropdownAberto" class="dropdown-opcoes">
          <li @click="filtrarCategoria('todos')">Todos os projetos</li>
          <li v-for="cat in categoriasUnicas" :key="cat" @click="filtrarCategoria(cat)">{{ cat }}</li>
        </ul>
      </div>
    </div>

    <div class="projetos-grid">
      <div v-for="projeto in projetosFiltrados" :key="projeto.id" class="projeto-card">
        <img :src="projeto.imagens[0]" :alt="projeto.titulo" />
        <h3>{{ projeto.titulo }}</h3>
        <p>{{ projeto.descricaoCurta }}</p>
        <button @click="abrirModal(projeto)" class="btn-ver-mais">Ver mais</button>
      </div>
    </div>

    <div class="modal" :class="{ show: modalAberto }" @click="fecharModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="fecharModal">&times;</span>
        <h2>{{ projetoSelecionado?.titulo }}</h2>

        <div v-if="projetoSelecionado" class="carousel">
          <button class="prev" @click="prevImagem">&#10094;</button>
          <img :src="projetoSelecionado.imagens[imagemAtualIndex]" :alt="projetoSelecionado.titulo" />
          <button class="next" @click="nextImagem">&#10095;</button>
        </div>

        <p>{{ projetoSelecionado?.descricaoDetalhada }}</p>

        <div class="modal-buttons">
          <a v-if="projetoSelecionado?.codigoUrl" :href="projetoSelecionado.codigoUrl" target="_blank" class="btn">
            <i class="bi bi-github"></i> Código
          </a>
          <a v-if="projetoSelecionado?.siteUrl" :href="projetoSelecionado.siteUrl" target="_blank" class="btn">
            <i class="bi" :class="projetoSelecionado.siteUrl.includes('youtube.com') ? 'bi-youtube' : 'bi-globe'"></i>
            {{ projetoSelecionado.siteUrl.includes('youtube.com') ? 'Vídeo' : 'Site' }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import projetosJson from '../assets/projetos.json'

interface Projeto {
  id: number
  titulo: string
  categoria: string
  descricaoCurta: string
  descricaoDetalhada: string
  imagens: string[]
  codigoUrl?: string
  siteUrl?: string
}

const projetos = ref<Projeto[]>([])
const projetosFiltrados = ref<Projeto[]>([])
const categoriaSelecionada = ref<string>('todos')
const dropdownAberto = ref<boolean>(false)
const categoriasUnicas = ref<string[]>([])

const projetoSelecionado = ref<Projeto | null>(null)
const modalAberto = ref<boolean>(false)
const imagemAtualIndex = ref<number>(0)

const toggleDropdown = () => dropdownAberto.value = !dropdownAberto.value
const fecharDropdown = () => setTimeout(() => dropdownAberto.value = false, 200)

const filtrarCategoria = (categoria: string) => {
  categoriaSelecionada.value = categoria
  projetosFiltrados.value = categoria === 'todos'
    ? projetos.value
    : projetos.value.filter(p => p.categoria === categoria)
  dropdownAberto.value = false
}

const abrirModal = (projeto: Projeto) => {
  projetoSelecionado.value = projeto
  imagemAtualIndex.value = 0
  modalAberto.value = true
}
const fecharModal = () => modalAberto.value = false
const prevImagem = () => imagemAtualIndex.value = (imagemAtualIndex.value - 1 + (projetoSelecionado.value?.imagens.length || 0)) % (projetoSelecionado.value?.imagens.length || 1)
const nextImagem = () => imagemAtualIndex.value = (imagemAtualIndex.value + 1) % (projetoSelecionado.value?.imagens.length || 1)

onMounted(() => {
  projetos.value = projetosJson
  projetosFiltrados.value = projetos.value
  categoriasUnicas.value = [...new Set(projetos.value.map(p => p.categoria))]
})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css");

.filtro-dropdown {
  position: relative;
  width: 250px;
  user-select: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.dropdown-header {

  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seta {
  transition: transform 0.3s ease;
}

.filtro-dropdown:focus-within .seta {
  transform: rotate(180deg);
}

.dropdown-opcoes {
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
  background-color: #000;
  border: 1px solid #7c3aed;
  border-radius: 8px;
  position: absolute;
  width: 100%;
  z-index: 10;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-opcoes li {
  padding: 12px 16px;
  border-bottom: 1px solid #7c3aed;
  transition: background-color 0.3s ease;
}

.dropdown-opcoes li:last-child {
  border-bottom: none;
}

.dropdown-opcoes li:hover {
  background-color: #7c3aed;
  color: white;
}

.filtro-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}


.projetos-container {
  padding: 2rem;
  color: white;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.projeto-card {

  border-radius: 12px;
  padding: 1rem;
  text-align: center;
}

.projeto-card img {
  max-width: 100%;
  border-radius: 8px;
}

button.btn-ver-mais {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #7c3aed;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

h3 {
  color: #7c3aed;
}

p {
  font-size: 14px;
  color: #ccc;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.modal.show {
  display: flex;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  position: relative;
  color: white;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
}


.carousel {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.carousel img {
  max-width: 90%;
  border-radius: 8px;
}

.carousel button {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #7c3aed;
  cursor: pointer;
}

.modal-buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-buttons .btn {
  background: #7c3aed;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: white;
  text-decoration: none;
}

</style>
