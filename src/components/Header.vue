<template>
  <header class="header">
    <div class="nav">
      <div class="left shadow">Shorten urls!</div>
    </div>
    <router-link to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="130" height="80" />
    </router-link>
    <div class="nav">
      <router-link class="link" to="/register">
        <div class="right shadow">Signup</div>
      </router-link>
      <router-link class="link" to="/login">
        <div class="right shadow">Login</div>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
export default {
  name: 'Header',
  components: {RouterLink}
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
}

.nav {
  align-self: center;
  display: flex;
}

.shadow {
  text-shadow: 0px 0px 5px var(--m-color);
}
.shadow:hover {
  text-shadow: 0px 0px 5px var(--m-color-hover);
}
.left {
  margin-left: 10px;
}

.right {
  margin-right: 10px;
}

.link {
  text-decoration: none;
}
.link:visited{
  color: #2c3e50;
}
</style>