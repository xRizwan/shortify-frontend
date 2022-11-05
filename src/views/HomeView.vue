<template>
  <main>
    <section class="row">
      <Input data-cy="url-input" v-model="main.long" placeholder="Enter a url"/>
      <Button data-cy="shorten-button" text="Shorten!" @on-click="handleClick()" />
    </section>
    <section class="column" v-show="main.showurl">
      <p class="r10 t20 center">Here's the shortened URL!</p>
      <div class="t20 row container">
        <div data-cy="short-url" class="r10 container__short">{{main.shorturl}}</div>
        <Button data-cy="copy-button" text="Copy!" @on-click="copyUrl" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { useMainStore } from '../stores/main'
import { useUserStore } from '../stores/user'
import { useToast } from 'vue-toastification'
import validURL from 'valid-url'
import { errorToastOptions, successToastOptions } from '../helper'

export default {
  setup() {
    const main = useMainStore()
    const toast = useToast();
    const user = useUserStore() 
    return { main, toast, user }
  },
  name: 'HomeView',
  components: {Input, Button},
  methods: {
    async handleClick() {
      const valid = validURL.isUri(this.main.long)
      if (valid) {
        this.main.postURL(this.user.token)
      } else {
        this.toast.error("Invalid URL.", errorToastOptions)
      }
    },
    async copyUrl() {
      await navigator.clipboard.writeText(this.main.shorturl)
      this.toast.success("Copied to Clipboard!", successToastOptions)
    }
  },
  mounted(){
    this.main.reset()
  },
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}
input {
  margin-right: 10px;
}

.r10 {
  margin-right: 10px;
}
.t20 {
  margin-top: 20px;
}
.center {
  text-align: center;
}
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.container {
  justify-content: center;
}
.container__short {
  font-size: 12px;
  background: white;

  border-radius: 8px;
  width: 220px;
  padding: 10px;
  box-sizing: content-box;
  
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  
  border: 1px solid var(--m-color);
  text-shadow: 0px 0px 5px var(--m-color);
}
.container__short::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 400px) {
  input {
    width: auto;
  }
}
</style>