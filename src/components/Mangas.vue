<template>
    <div>
        <h1>Mangas</h1>

        <div v-bind:key="manga.id" v-for="manga in mangas">
            <MangaItem v-bind:manga="manga" />
        </div>
    </div>
</template>

<script>
import MangaItem from './MangaItem';

export default {
    name: "Mangas",
    components: {
        MangaItem
    },
    props: ["mangas"]
}
</script>

<style scoped>

</style>