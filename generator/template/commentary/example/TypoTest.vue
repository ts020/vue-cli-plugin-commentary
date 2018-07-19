<template>
    <span class="typo" :class="typoClass"><slot></slot></span>
</template>
<style scoped>
.typo {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Hiragino Sans', 'Helvetica Neue', sans-serif;
}
.t-1 {
    font-size: 40px;
    font-weight: 400;
}

.t-2 {
    font-size: 20px;
    font-weight: 400;
}

.t-text-1 {
    font-size: 16px;
    font-weight: 400;
}

.t-text-2 {
    font-size: 14px;
    font-weight: 400;
}

.t-text-3 {
    font-size: 12px;
    font-weight: 400;
}

.t-text-4 {
    font-size: 10px;
    font-weight: 400;
}

.ellipse {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width: 100%;
}

.bold {
    font-weight: 700;
}

.thin {
    font-weight: 100;
}
</style>
<script>
export default {
    props: {
        type: { type: String },
        ellipse: { type: [Boolean, String] },
        bold: { type: [Boolean, String] },
        thin: { type: [Boolean, String] },
    },
    name: 'typo-test',
    computed: {
        typoClass() {
            return {
                ['t-' + this.type]: true,
                ellipse: this.ellipse,
                bold: this.bold,
                thin: this.thin,
            }
        },
    },
}
</script>
