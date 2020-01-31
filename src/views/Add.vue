<template>
  <div class="about">
    <AddManga v-on:add-manga="AddManga" />
  </div>
</template>

<script>
import AddManga from '../components/AddManga';

export default {
  name: 'Add',
  components: {
    AddManga
  },
  methods: {
    AddManga(newManga) {
      this.manga = [...this.mangas, newManga];
    }
  } 
}
</script>

