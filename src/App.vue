<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

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
          completed: true
        }
      ]
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
