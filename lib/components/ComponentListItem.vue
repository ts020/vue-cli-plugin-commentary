<template>
    <div>
        <div class="name" :selected="selected" @click="select()">{{directory.name}}</div>
    </div>
</template>
<style scoped>
.name {
    padding: 16px;
}
.children {
    padding: 16px;
}
[selected] {
    background: black;
    color: white;
}
</style>

<script>
export default {
    name: 'component-list-item',
    props: { selectedStory: Object, directory: Object },
    methods: {
        select() {
            const story = this.directory.children[0].story
            if (story) {
                this.$emit('select', story)
            } else {
                this.$emit('open', this.directory)
            }
        },
    },
    computed: {
        selected() {
            const story = this.directory.children[0].story
            if (!this.selectedStory || !story) return false
            return this.selectedStory === story
        },
    },
}
</script>
