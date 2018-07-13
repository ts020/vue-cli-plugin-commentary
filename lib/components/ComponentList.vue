<template>
    <div class="component-list">
        <!-- <div v-for="story in stories" :key="story.name" @click="$emit('select',story)">{{story.name}}</div> -->
        <div class="root">
            <div class="name" v-for="dir in directories.children" :key="dir.name" @click="selectRoot(dir)">{{dir.name}}</div>
        </div>
        <div class="dir-List" v-if="current">
            <div class="parent" v-if="current.parent" @click="selectRoot(current.parent)"> return</div>
            <component-list-item @open="selectRoot($event, current.dir)" @select="$emit('select', $event)" v-for="dir in current.dir.children" :key="dir.name" :directory="dir" :isRoot="true" />
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
    padding: 16px;
    text-align: center;
}

.name {
    padding: 16px;
    text-align: center;
}
</style>
<script>
import ComponentListItem from './ComponentListItem'
export default {
    components: { ComponentListItem },
    props: {
        stories: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            current: null,
        }
    },

    methods: {
        selectRoot(dir, parent) {
            console.log(parent)
            this.current = {
                parent: parent,
                dir: dir,
            }
        },
    },

    computed: {
        directories() {
            const dirs = {
                children: {},
            }
            this.stories.forEach(story => {
                let buf = dirs.children
                story.name.split('/').forEach(dir => {
                    if (!buf[dir]) {
                        buf[dir] = {
                            name: dir,
                            children: {},
                        }
                    }
                    buf = buf[dir].children
                })
                buf.story = story
            })
            return dirs
        },
    },
}
</script>
