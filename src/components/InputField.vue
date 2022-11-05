<template>
  <input
    type="text"
    v-bind="$attrs"
    :value="modelValue"
    @input="handleInput($event)"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    handleInput(e: Event) {
      this.$emit("update:modelValue", (e?.target as HTMLInputElement).value);
    },
  },
};
</script>

<style scoped>
input {
  padding: 12px;
  width: 250px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid var(--m-color);
  text-shadow: 0px 0px 5px var(--m-color);
}
</style>
