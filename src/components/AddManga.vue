<template>
    <div>
        <form @submit="addManga">
            <input type="text" v-model="title" name="title" placeholder="Add Manga">
            <br>
            <input type="text" v-model="chapters" placeholder="Chapters">
            <br>
            <input type="text" v-model="image" name="image" placeholder="image url">
            <br>
            <input type="submit" value="Submit" class="buttons">
        </form>
    </div>
</template>

<script>

export default {
    name: "AddManga",
    data() {
        return {
            title: '',
            chapters: '',
            image: ''
        }
    },
    methods: {
        addManga(e) {
            e.preventDefault();

            const newManga = {
                title: this.title,
                chapters: this.chapters,
                image: this.image,
                completed: false
            }
            //Send up to parent
            this.$emit('add-manga', newManga);

            this.title = '';
            this.chapters = '';
            this.image = '';
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
    }

    input[type="text"] {
        padding: 10px;
        margin-bottom: 10px;
        margin-left: 5em;
        margin-right: 5em;

        margin: 0px 5em 10px 5em;
    }

    input[type="submit"] {
        margin-left: 80em;
        margin-right: 5em;
    }

</style>