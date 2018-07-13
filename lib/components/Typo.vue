<template>
    <span class="typo" :style="{fontSize:size+'px', fontWeight:weight}" ><slot /></span>
</template>
<style scoped>
.typo {
    font-size: 14px;
    line-height: inherit;
    font-weight: 400;
    font-family: -apple-system, 'Hiragino Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
<script>
export default {
    props: {
        size: {
            type: [Number, String],
            default: () => 14,
        },
        weight: {
            type: [Number, String],
            default: () => 300,
        },
    },
}
</script>
