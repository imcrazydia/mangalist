<template>
    <div>
        <p>{{ manga.title }}</p>
    </div>
</template>

<script>
export default {
    name: "MangaItem",
    props: ["manga"]
}
</script>

<style scoped>
.manga-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete {
    text-decoration: line-through;
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