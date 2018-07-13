<template>
    <div class="color-box" :style="{backgroundColor: color}"><slot />{{text}}</div>
</template>
<style scoped>
.color-box {
    width: 100px;
    height: 100px;
}
</style>
<script>
export default {
    props: {
        color: {
            type: String,
            default: () => 'black',
        },
        text: String,
    },
    name: 'color-box',
}
</script>
