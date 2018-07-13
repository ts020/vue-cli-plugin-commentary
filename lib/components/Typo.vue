<template>
    <span class="typo" :style="{fontSize:fontSize+'px', fontWeight:weight}" ><slot /></span>
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
            type: String,
            default: () => 'p-1',
        },
        weight: {
            type: [Number, String],
            default: () => 300,
        },
    },
    computed: {
        fontSize() {
            if (this.size === 'h-1') {
                return 64
            }
            if (this.size === 'h-2') {
                return 32
            }
            if (this.size === 'h-3') {
                return 24
            }
            if (this.size === 'h-4') {
                return 20
            }

            if (this.size === 'p-1') {
                return 16
            }
            if (this.size === 'p-2') {
                return 14
            }
            if (this.size === 'p-3') {
                return 12
            }
            if (this.size === 'p-4') {
                return 10
            }
            return 14
        },
    },
}
</script>
