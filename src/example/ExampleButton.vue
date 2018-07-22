<template>
<div>
    <button @click="$emit('click')"><slot></slot></button>
</div>
</template>
<script>
export default {
    name: 'example-button',
}
</script>
