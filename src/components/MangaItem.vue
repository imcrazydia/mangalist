<template>
    <div class="manga-item" v-bind:class="{'is-complete' : manga.completed}">
        <p>
            <input type="checkbox" v-on:change="lastChapter">
            {{ manga.title }}
            <button @click="$emit('del-manga', manga.id)" class="del">X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "MangaItem",
    props: ["manga"],
    methods: {
        lastChapter() {
            this.manga.completed = !this.manga.completed;
        }
    }
}
</script>

<style scoped>
.manga-item {
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    color: rgb(218, 56, 56);
}

.is-complete {
    color: green;
    background-color: #dfdfdf;
}

.del {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    float: right;
}

</style>