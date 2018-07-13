<template>
    <div class="component-list">
        <!-- <div v-for="story in stories" :key="story.name" @click="$emit('select',story)">{{story.name}}</div> -->
        <div class="root">
            <div class="name" v-for="dir in directories.children" :key="dir.name" @click="selectRoot(dir)">
                <typo size="10" weight="500">{{dir.name}}</typo>
            </div>
        </div>
        <div class="dir-list" v-if="current">
            <div class="parent" v-if="current.parent" @click="selectRoot(current.parent)">
                <font-awesome-icon class="return-icon" size="xs" icon="arrow-left" />
                <typo size="12">{{current.dir.name}}</typo>
            </div>
            <component-list-item @open="selectRoot($event, current.dir)" @select="selectStory" :selectedStory="currentStory" v-for="dir in current.dir.children" :key="dir.name" :directory="dir" :isRoot="true" />
        </div>
        
    </div>
</template>
<style scoped>
.component-list {
    border-right: 1px solid var(--color-grey-100);
    background-color: var(--color-grey-50);
    display: flex;
    height: 100%;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
.root {
    align-items: stretch;
    background: black;
    color: white;
}
.parent {
    height: 50px;
    display: flex;
    align-items: center;
    background: #eee;
    justify-content: center;
}

.return-icon {
    margin-right: 8px;
}

.name {
    text-align: center;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #333;
}
.dir-list {
    width: 160px;
}
</style>
<script>
import ComponentListItem from './ComponentListItem'
import Typo from './Typo'
export default {
    components: { ComponentListItem, Typo },
    props: {
        stories: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            current: null,
            currentStory: null,
        }
    },

    methods: {
        selectStory(story) {
            this.currentStory = story
            this.$emit('select', story)
        },
        selectRoot(dir, parent) {
            dir.children.sort((a, b) => {
                if (a.children[0].story) {
                    return 1
                } else if (b.children[0].story) {
                    return -1
                }
                return 0
            })
            this.current = {
                parent: parent,
                dir: dir,
            }
        },
    },

    computed: {
        directories() {
            const dirs = {
                children: [],
            }
            this.stories.forEach(story => {
                let buf = dirs.children
                story.name.split('/').forEach(dir => {
                    if (!buf.find(d => d.name === dir)) {
                        buf.push({
                            name: dir,
                            children: [],
                        })
                    }
                    buf = buf.find(d => d.name === dir).children
                })
                buf.push({ story })
            })
            return dirs
        },
    },
}
</script>
