<template>
    <div class="component-info" v-if="component && propList.length > 0">
        <div class="props" v-for="prop in propList" :key="prop.name">
            <div class="row">
                <div><typo size="p-4" weight="bold">prop-name</typo></div>
                <div><typo size="p-1" weight="400">{{prop.name}}</typo></div>
            </div>
            <div class="row">
                <div><typo size="p-4" weight="bold">type</typo></div>
                <div><typo size="p-1" weight="400">{{prop.type}}</typo></div>
            </div>
            <div class="row" v-if="prop.isRequire">
                <div><typo size="p-4" weight="bold">require</typo></div>
                <div><typo size="p-1" weight="400">true</typo></div>
            </div>
            <div class="row" v-if="prop.default">
                <div><typo size="p-4" weight="bold">default</typo></div>
                <div><typo size="p-1" weight="400">{{prop.default}}</typo></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.component-info {
    border: 1px solid #e0e0e0;
    padding: 8px 16px;
}

.props {
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
}

.props:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.row {
    line-height: 1em;
    margin-right: 32px;
}
</style>
<script>
import Typo from './Typo'
function isEmpty(value) {
    return typeof value === 'undefined' || value === null
}

function parseType(propType) {
    if (isEmpty(propType.type)) {
        return typeToString(propType)
    } else {
        return typeToString(propType.type)
    }
}

function typeToString(type) {
    if (type instanceof Array) {
        return type.map(d => d.name).join(',')
    }
    return type.name
}

export default {
    components: { Typo },
    props: {
        component: Object,
    },
    computed: {
        propList() {
            const props = this.component.props
            return Object.keys(props || {}).map(name => ({
                name: name,
                isRequire: !isEmpty(props[name].isReuire),
                type: parseType(props[name]),
                default: isEmpty(props[name].default) ? null : props[name].default(),
            }))
        },
    },
}
</script>
