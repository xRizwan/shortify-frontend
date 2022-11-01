<template>
  <main>
    <Input v-model="url" placeholder="Enter a url"/>
    <Button text="Shorten!" @on-click="handleClick()" />
  </main>
</template>

<script lang="ts">
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      url: ""
    }
  },
  components: {Input, Button},
  methods: {
    async handleClick() {
      console.log(this.url)
    }
  },
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
input {
  margin-right: 10px;
}
</style>