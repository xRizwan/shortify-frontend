<template>
  <header class="header">
    <div class="nav big">
      <div class="left shadow">Shorten urls!</div>
    </div>
    <router-link to="/">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.png"
        width="130"
        height="80"
      />
    </router-link>
    <div class="nav end">
      <router-link data-cy="signup" class="link" to="/register">
        <div :hidden="!!user.token" class="right shadow">Signup</div>
      </router-link>
      <router-link data-cy="login" class="link" to="/login">
        <div :hidden="!!user.token" class="right shadow">Login</div>
      </router-link>
      <router-link data-cy="all" class="link" to="/all">
        <div :hidden="user.token === ''" class="right shadow">My Urls</div>
      </router-link>
      <div
        data-cy="logout"
        :hidden="user.token === ''"
        class="right shadow pointer"
        @click="logOut"
      >
        LogOut
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";

export default {
  setup() {
    const user = useUserStore();
    return { user };
  },
  name: "NavigationHeader",
  components: { RouterLink },
  methods: {
    logOut() {
      this.user.logout();
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  box-shadow: 0px 0px 5px var(--m-color);
}

.nav {
  align-self: center;
  display: flex;
  width: 200px;
}

.end {
  justify-content: end;
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
.link:visited {
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  .big {
    display: none;
  }
  .logo {
    margin-left: 10px;
    width: 80px;
    height: 50px;
  }
}
</style>
