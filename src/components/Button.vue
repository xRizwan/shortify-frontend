<template>
  <button class="btn" v-bind="$attrs" v-on:click="$emit('on-click')">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    text: {type: String, default: "Submit", required: false},
  },
  emits: ['on-click']
}
</script>

<style scoped>

.btn {
  border-radius: 5px;
  background: blanchedalmond;
  border: 1px solid var(--m-color);
  box-shadow: 0px 0px 10px var(--m-color);
  text-shadow: 0px 0px 5px var(--m-color);
}

.btn:active {
  opacity: 0.8;
  transform: scale(0.96);
}
.btn:hover {
  box-shadow: 0px 0px 15px var(--m-color);;
}
</style>