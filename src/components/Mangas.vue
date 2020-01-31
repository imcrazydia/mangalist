<template>
    <div>
        <h1>Mangas</h1>

        <div v-bind:key="manga.id" v-for="manga in mangas">
            <MangaItem v-bind:manga="manga"
                       v-on:del-manga="$emit('del-manga', manga.id)" 
            />
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