<template>
    <div>
        <div class="box">
            <color-box color="red" />
            <color-box color="blue" />
            <color-box color="green" />
        </div>
    </div>
</template>
<style scoped>
.box {
    display: flex;
    width: 100%;
}
</style>
<script>
import ColorBox from './ColorBox'
export default {
    components: { ColorBox },
}
</script>
