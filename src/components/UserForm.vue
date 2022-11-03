<template>
  <form class="column center" @submit="handleClick">
    <div class="heading">{{heading}}</div>
    <Input v-model="username" placeholder="Enter Username"/>
    <Input v-model="password" type="password" autocomplete placeholder="Enter Password"/>
    <Button text="Sign Up!" class="btn"/>
  </form>
</template>
  
<script lang="ts">
  import Input from '../components/Input.vue';
  import Button from '../components/Button.vue';

  export default {
    name: 'RegisterView',
    props: {
      handleSubmit: {type: Function, default: (username: string, password: string) => null},
      heading: {type: String, default: "Form"}
    },
    data(){
      return {
        username: "",
        password: "",
      }
    },
    components: {Input, Button},
    methods: {
      async handleClick(e: any){
        e.preventDefault()
  
        const user = {
          username: this.username,
          password: this.password
        }

        console.log('here')
        
        this.handleSubmit(user)
      },
    }
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
  