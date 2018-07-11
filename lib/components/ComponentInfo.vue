<template>
    <div class="component-info" v-if="component">
        <div class="name">{{component.name}}</div>
        <div class="props" v-for="prop in propList" :key="prop.name">
            <div class="prop-name">name: {{prop.name}}</div>
            <div class="prop-type">require: {{prop.type}}</div>
            <div class="prop-require">type: {{prop.isRequire ? 'require': 'any'}}</div>
        </div>
    </div>
</template>
<style scoped>
</style>
<script>
function isEmpty(value) {
    return typeof value === 'undefined' || value === null
}
export default {
    props: {
        component: Object,
    },
    computed: {
        propList() {
            const props = this.component.props
            return Object.keys(props).map(name => ({
                name: name,
                isRequire: !isEmpty(props[name].isReuire),
                type: isEmpty(props[name].type) ? props[name].name : props[name].type.name,
            }))
        },
    },
}
</script>
