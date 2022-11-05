<template>
  <form class="column center" @submit="handleClick">
    <div class="heading">{{heading}}</div>
    <Input v-model="username" data-cy="username-input" placeholder="Enter Username"/>
    <Input v-model="password" data-cy="password-input" type="password" autocomplete placeholder="Enter Password"/>
    <Button data-cy="submit-button" :text="button" class="btn"/>
  </form>
</template>
  
<script lang="ts">
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import type { User } from '../typing';

export default {
  name: 'RegisterView',
  props: {
    handleSubmit: {type: Function, default: () => null},
    heading: {type: String, default: "Form"},
    button: {type: String, default: "Submit"},
  },
  data(){
    return {
      username: "",
      password: "",
    }
  },
  components: {Input, Button},
  methods: {
    async handleClick(e: Event){
      e.preventDefault()

      const user: User = {
        username: this.username,
        password: this.password
      }
      this.handleSubmit(user)
    },
  },
  mounted() {
    this.username = "";
    this.password = "";
  },
}
</script>
  
<style scoped>
  input {
    margin-bottom: 10px;
  }
  
  .heading {
    font-size: 20px;
    margin-bottom: 20px;
    text-shadow: 0px 0px 5px var(--m-color);
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .center {
    align-items: center;
  }
  .btn {
    width: 80px;
    height: 30px;
  }
  </style>
  