<template>
  <div id="app">
    <Header />
    <Mangas v-bind:mangas="mangas"
            v-on:del-manga="deleteManga"
    />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Mangas from './components/Mangas';
  
export default {
  name: 'app',
  components: {
    Header,
    Mangas
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
</style>
