<template>
    <div class="manga-item" v-bind:class="{'is-complete' : manga.completed}">
        <p>
            <input type="checkbox" v-on:change="lastChapter">
            {{ manga.title }}
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
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    color: rgb(218, 56, 56);
}

.is-complete {
    color: green;
}

.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}

</style>