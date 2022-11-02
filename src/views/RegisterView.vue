<template>
  <main>
    <section class="column center">
      <Input placeholder="Enter Username"/>
      <Input placeholder="Enter Password"/>
      <Button text="Sign Up!" class="btn"/>
    </section>
  </main>
</template>

<script lang="ts">
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'RegisterView',
  components: {Input, Button},
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}
input {
  margin-bottom: 10px;
}

.row {
  display: flex;
  flex-direction: row;
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
