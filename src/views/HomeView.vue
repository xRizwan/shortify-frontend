<template>
  <main class="t150">
    <section class="row">
      <Input v-model="main.long" placeholder="Enter a url"/>
      <Button text="Shorten!" @on-click="handleClick()" />
    </section>
    <section class="column" v-show="main.showurl">
      <p class="descText r10 t20">Here's the shortened URL!</p>
      <div class="t20 row">
        <div ref="container" class="r10 short">{{main.shorturl}}</div>
        <Button text="Copy!" @on-click="copyUrl" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { useMainStore } from '../stores/main'
import { useToast } from 'vue-toastification'
import validURL from 'valid-url'
import useClipboard from 'vue-clipboard3'

export default {
  setup() {
    const main = useMainStore()
    const toast = useToast();
    const { toClipboard } = useClipboard();
    return { main, toast, toClipboard }
  },
  name: 'HomeView',
  components: {Input, Button},
  methods: {
    async handleClick() {
      const valid = validURL.isUri(this.main.long)
      if (valid) {
        this.main.postURL()
      } else {
        this.toast.error("Invalid URL.")
      }
    },
    async copyUrl() {
      this.toClipboard(this.main.shorturl)
      this.toast.success("Copied to Clipboard!")
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
.descText {
  text-align: center;
}
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
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
  font-size: 12px;
  border: 1px solid rgb(255, 165, 30);
  background: white;
  border-radius: 8px;
  padding: 10px;

  width: 220px;
  box-sizing: content-box;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 

  text-shadow: 0px 0px 5px rgb(255, 165, 30);
}
.short::-webkit-scrollbar {
  display: none;
}
</style>