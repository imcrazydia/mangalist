<template>
    <div class="manga-item" v-bind:class="{'is-complete' : manga.completed}">
        <p>
            <span class="manga-info">
                <input type="checkbox" v-on:change="lastChapter">
            {{ manga.title }} 
            <br>
            <span style="color: #000;">Chapters: {{ manga.chapters }}</span>
            <br>
            </span>
            <img :src="manga.image" :alt="manga.title" class="manga-cover"> 
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
    border-bottom: 2px #000 dotted;
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

.manga-cover {
    width: 100px;
}

 /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.manga-info {
    position: absolute;
    margin-top: 6.5em;
    left: 32%;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.manga-info {
    position: absolute;
    left: 20%;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.manga-info {
    position: absolute;
    left: 17%;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
.manga-info {
    position: absolute;
    left: 13%;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.manga-info {
    position: absolute;
    left: 8%;
}
} 

</style>