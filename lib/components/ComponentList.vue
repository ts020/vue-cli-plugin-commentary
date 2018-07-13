<template>
    <div class="component-list">
        <!-- <div v-for="story in stories" :key="story.name" @click="$emit('select',story)">{{story.name}}</div> -->
        <div class="root">
            <div class="name" v-for="dir in directories.children" :key="dir.name" @click="selectRoot(dir)" :selected="dir.name === selectedDir">
                <img class="name-icon" v-if="$commentary.icons[dir.name]" :src="$commentary.icons[dir.name]" />
                <typo size="p-4" weight="500">{{dir.name}}</typo>
            </div>
        </div>
        <div class="dir-list" v-if="current">
            <div class="parent" v-if="current.parent" @click="selectDir(current.parent)">
                <div class="return-button">
                    <font-awesome-icon class="return-icon" size="xs" icon="arrow-left" />
                    <typo size="p-3">{{current.dir.name}}</typo>
                </div>
            </div>
            <component-list-item @open="selectDir($event, current.dir)" @select="selectStory" :selectedStory="currentStory" v-for="dir in current.dir.children" :key="dir.name" :directory="dir" :isRoot="true" />
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
    background: #fafafa;
    color: black;
}
.parent {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.return-button {
    width: 100%;
    margin: 8px;
    text-align: center;
    border-radius: 20px;
    padding: 8px;
    line-height: 12px;
}

.return-button:hover {
    background: #e0e0e0;
}

.return-icon {
    margin-right: 8px;
}

.name {
    text-align: center;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.name:hover {
    background: #e8e8e8;
}

.name[selected] {
    background: #e0e0e0;
    pointer-events: none;
}

.name-icon {
    max-width: 40px;
    max-height: 40px;
    margin-bottom: 8px;
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
            selectedDir: null,
        }
    },

    methods: {
        selectStory(story) {
            this.currentStory = story
            this.$emit('select', story)
        },
        selectRoot(dir) {
            this.selectedDir = dir.name
            this.selectDir(dir)
        },
        selectDir(dir, parent) {
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
