<template>
  <button class="btn" v-on:click="$emit('on-click')">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    text: String,
  },
  emits: ['on-click']
}
</script>

<style scoped>
.btn {
  border: 1px solid rgb(255, 165, 30);
  border-radius: 5px;
  background: blanchedalmond;
}
.btn:active {
  opacity: 0.8;
  transform: scale(0.96);
}
</style>