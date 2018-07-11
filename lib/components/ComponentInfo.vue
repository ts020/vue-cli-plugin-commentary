<template>
    <div class="component-info" v-if="component">
        <div class="name">{{component.name}}</div>
        <div class="props" v-for="prop in propList" :key="prop.name">
            <div class="prop-name">name: {{prop.name}}</div>
            <div class="prop-type">type: {{prop.type}}</div>
            <div class="prop-require" v-if="prop.isRequire">require: true</div>
            <div class="prop-detault" v-if="prop.default">default: {{prop.default}}</div>
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
                default: isEmpty(props[name].default) ? null : props[name].default(),
            }))
        },
    },
}
</script>
