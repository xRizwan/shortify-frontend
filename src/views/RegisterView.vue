<template>
  <main>
    <UserForm
      heading="Sign Up!"
      button="Register"
      :handleSubmit="handleClick"
    />
  </main>
</template>

<script lang="ts">
import UserForm from "../components/UserForm.vue";
import { useUserStore } from "../stores/user";
import { useToast } from "vue-toastification";
import type { User } from "../typing";

export default {
  setup() {
    const user = useUserStore();
    const toast = useToast();

    return { user, toast };
  },
  name: "RegisterView",
  components: { UserForm },
  methods: {
    async handleClick(user: User) {
      const response = await this.user.signup(user);
      if (response) this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
}
</style>
