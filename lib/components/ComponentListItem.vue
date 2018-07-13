<template>
    <div>
        <div class="name" @click="select()">{{directory.name}}</div>
    </div>
</template>
<style scoped>
.name {
    padding: 16px;
}
.children {
    padding: 16px;
}
</style>

<script>
export default {
    name: 'component-list-item',
    props: { isRoot: Boolean, directory: Object },
    methods: {
        select() {
            if (this.directory.children.story) {
                this.$emit('select', this.directory.children.story)
            } else {
                this.$emit('open', this.directory)
            }
        },
    },
}
</script>
