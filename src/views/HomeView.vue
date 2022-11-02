<template>
  <main>
    <section class="t150">
      <Input v-model="main.long" placeholder="Enter a url"/>
      <Button text="Shorten!" @on-click="handleClick()" />
    </section>
    <section class="t20" v-show="main.showurl">
      <div class="r10 short">{{main.shorturl}}</div>
      <Button text="Copy!" @on-click="handleClick()" />
    </section>
  </main>
</template>

<script lang="ts">
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { useMainStore } from '../stores/main'
import validURL from 'valid-url'

export default {
  setup() {
    const main = useMainStore()
    return { main }
  },
  name: 'HomeView',
  components: {Input, Button},
  methods: {
    async handleClick() {
      const valid = validURL.isUri(this.main.long)
      if (valid) {
        this.main.postURL()
      }
    }
  },
}
</script>

<style scoped>
.r10 {
  margin-right: 10px;
}
.t20 {
  margin-top: 20px;
}
.t150 {
  margin-top: 150px;
}
section {
  display: flex;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin-right: 10px;
}
.short {
  border: 1px solid rgb(255, 165, 30);
  background: white;
  border-radius: 8px;
  padding: 10px;

  width: 240px;
  box-sizing: content-box;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 
}
.short::-webkit-scrollbar {
  display: none;
}
</style>