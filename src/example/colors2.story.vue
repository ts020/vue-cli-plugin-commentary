<template>
    <div>
        <div class="box">
            <div class="color red" />
            <div class="color blue" />
            <div class="color green" />
        </div>
    </div>
</template>
<style scoped>
.box {
    display: flex;
    width: 100%;
}

.color {
    width: 100px;
    height: 100px;
    margin-right: 16px;
}
.red {
    background-color: red;
}
.green {
    background-color: green;
}
.blue {
    background-color: blue;
}
</style>
<script>
export default {
    story: 'atoms/colors',
}
</script>
