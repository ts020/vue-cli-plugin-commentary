<template>
    <div class="commentary" >
        <div class="list" v-show="!isFull">
            <component-list :stories="$commentary.stories" @select="selectStory($event)" />
        </div>
        <div class="contents-block" :class="{'is-full':isFull}">
            <template v-if="current">
                <component :is="current.component" />
                <component-info :component="current.component" class="component-info" />
                <component-card v-for="story in current.subStories" :key="story.name" :story="story" :component="current.component" />
            </template>
        </div>
        <div class="full" @click="isFull=!isFull">
            <font-awesome-icon :icon="isFull ? 'compress' : 'expand'" />
        </div>
    </div>
</template>
<style>
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
<style scoped>
.commentary {
    display: flex;
    width: 100%;
    height: 100%;
}

.contents-block {
    flex: 1;
    padding: 16px;
}

.component-info {
    margin: 32px 0;
}
.full {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background-color: var(--color-blue-grey-800);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s;
}

.full:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
</style>
<script>
import ComponentInfo from './ComponentInfo'
import ComponentCard from './ComponentCard'
import ComponentList from './ComponentList'
export default {
    components: { ComponentInfo, ComponentCard, ComponentList },
    data() {
        return {
            isFull: false,
            current: null,
        }
    },
    methods: {
        selectStory(story) {
            this.current = story
        },
    },
}
</script>
