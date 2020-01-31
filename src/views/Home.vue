<template>
  <div id="app">
    <Header />

    <AddManga v-on:add-manga="AddManga" />

    <Mangas v-bind:mangas="mangas"
            v-on:del-manga="deleteManga"
    />
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Mangas from '../components/Mangas';
import AddManga from '../components/AddManga';
  
export default {
  name: 'home',
  components: {
    Header,
    Mangas,
    AddManga
  },
  data() {
    return {
      mangas: [
        {
          id: 1,
          title: "Shield Hero",
          completed: false
        },
        {
          id: 2,
          title: "Iron ladies",
          completed: false
        },
        {
          id: 3,
          title: "Solo leveling",
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteManga(id) {
      this.mangas = this.mangas.filter(manga => manga.id !== id);
    },
    AddManga(newManga) {
      this.manga = [...this.mangas, newManga];
    }
  }
}

</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .buttons {
    display: inline-block;
    border: none;
    background-color: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .buttons:hover {
    background-color: #666;
  }
</style>
