<template>
  <header class="header">
    <div class="nav">
      <div class="nav-item-left">Shorten urls!</div>
    </div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="130" height="80" />
    <div class="nav">
      <div class="nav-item-right">Signup</div>
      <div class="nav-item-right">Login</div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
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

.nav-item-left {
  margin-left: 10px
}

.nav-item-right {
  margin-right: 10px
}
</style>