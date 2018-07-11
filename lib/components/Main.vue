<template>
	<div class="commentary" >
		<div class="global-navigation" v-if="!isFull">
            <div v-for="story in stories" :key="story.name" @click="selectStory(story)">{{story.name}}</div>
		</div>
		<div class="contents-block" :class="{'is-full':isFull}">
            <template v-if="current">
                <component-info :component="current.component" />
			    <component v-for="story in current.subStories" :key="story.name" :is="story.view" />
            </template>
		</div>
		<div class="full" @click="isFull=!isFull">
			<font-awesome-icon :icon="isFull ? 'compress' : 'expand'" />
		</div>
	</div>
</template>

<style scoped>
.commentary {
    display: flex;
    width: 100%;
    height: 100%;
}

.global-navigation {
    border-right: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-50);
    width: 180px;
}

.contents-block {
    flex: 1;
}

.contents-block.is-full {
    left: 0;
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
import { getStories } from '../story'
export default {
    components: { ComponentInfo },
    data() {
        return {
            isFull: false,
            stories: getStories(),
            current: null,
        }
    },
    methods: {
        selectStory(story) {
            console.log(story)
            this.current = story
        },
    },
}
</script>
