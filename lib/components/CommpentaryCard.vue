<template>
    <div class="commpentary-card">
        <h2>{{title}}</h2>
        <div class="desc">{{desc}}</div>
		<div class="commpentary-body">
            <slot />
		</div>
    </div>
</template>
<style scoped>
.commpentary-body {
    margin-bottom: 16px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    padding: 24px;
    background-color: white;
}

h2 {
    font-family: var(--font-family-long);
    font-size: 40px;
    font-weight: 100;
    margin: 0 0 12px;
    line-height: 1em;
    color: var(--color-blue-400);
    font-feature-settings: var(--font-feature-settings);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.02em;
}

.desc {
    margin-bottom: 30px;
    color: var(--color-grey-800);
    font-weight: 200;
    font-family: var(--font-family-long);
}
</style>
<script>
export default {
    props: {
        desc: String,
        title: String,
    },
}
</script>
