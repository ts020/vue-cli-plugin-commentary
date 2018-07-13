<template>
    <div class="component-list-item">
        <div class="name" :selected="selected" @click="select()">
            <font-awesome-icon class="icon" v-if="isDirectory" size="xs" icon="sitemap" />
           <typo size="12">{{directory.name}}</typo>
        </div>
    </div>
</template>
<style scoped>
.component-list-item {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.icon {
    margin-right: 8px;
}
.name {
    padding: 8px;
    margin: 8px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}

[selected] {
    background: black;
    color: white;
}
</style>

<script>
import Typo from './Typo'
export default {
    components: { Typo },
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
        isDirectory() {
            return !this.directory.children[0].story
        },
        selected() {
            const story = this.directory.children[0].story
            if (!this.selectedStory || !story) return false
            return this.selectedStory === story
        },
    },
}
</script>
