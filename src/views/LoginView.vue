<template>
  <main>
    <UserForm heading="Login" button="Login" :handleSubmit="handleClick" />
  </main>
</template>

<script lang="ts">
import UserForm from '../components/UserForm.vue';
import { useUserStore } from '../stores/user';
import { useToast } from 'vue-toastification';

export default {
  setup(){
    const user = useUserStore()
    const toast = useToast()

    return {user, toast}
  },
  name: 'LoginView',
  components: {UserForm},
  methods: {
    async handleClick(user: any){
      const response = await this.user.login(user)
      if (response)
        this.$router.push("/")
    },
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
}
</style>
