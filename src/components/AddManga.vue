<template>
    <div>
        <form @submit="addManga">
            <input type="text" v-model="title" name="title" placeholder="Add Manga">
            <input type="submit" value="Submit" class="buttons">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid';

export default {
    name: "AddManga",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addManga(e) {
            e.preventDefault();

            const newManga = {
                title: this.title,
                completed: false
            }
            //Send up to parent
            this.$emit('add-manga', newManga);

            this.title = '';
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }

</style>