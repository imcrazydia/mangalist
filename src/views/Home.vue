<template>
  <div id="app">

    <Mangas v-bind:mangas="mangas"
            v-on:del-manga="deleteManga"
    />
  </div>
</template>

<script>
import Mangas from '../components/Mangas';
  
export default {
  name: 'home',
  components: {
    Mangas
  },
  data() {
    return {
      mangas: [
        {
          id: 1,
          title: "The Rising of the Shield Hero",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fthe-rising-of-the-shield-hero%2Fimages%2F5%2F53%2FLN_Vol_19_JP.jpg%2Frevision%2Flatest%3Fcb%3D20190107233641&f=1&nofb=1",
          chapters: "62",
          completed: false
        },
        {
          id: 2,
          title: "Iron ladies",
          image: "https://mangadex.org/images/manga/32020.jpg?1554500106",
          chapters: "298",
          completed: false
        },
        {
          id: 3,
          title: "Solo leveling",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsolo-leveling%2Fimages%2F0%2F07%2FSolo_Leveling_Webtoon_cover.png%2Frevision%2Flatest%3Fcb%3D20190324041910&f=1&nofb=1",
          chapters: "103",
          completed: false
        },
        {
          id: 4,
          title: "I'm Destined For Greatness!",
          image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffile-thumb.anyacg.co%2FW600%2F83%2F4b%2F834b9ba22cf9b7c720d707ee73bb6c0fd2ede98e_115125_687_960.jpg&f=1&nofb=1",
          chapters: "13",
          completed: false
        },
        {
          id: 5,
          title: "The God of High School",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8c%2Ff5%2Fe9%2F8cf5e956d002a6c2c753c83647700136--high-school-god.jpg&f=1&nofb=1",
          chapters: "449",
          completed: false
        },
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
