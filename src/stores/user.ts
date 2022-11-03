import { API_BASE } from "@/helper";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();

const TOKEN_KEY = "user@token";

type User = {
  username: string;
  password: string;
};

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    token: localStorage.getItem(TOKEN_KEY) || "",
  }),
  getters: {},
  actions: {
    async login(body: User): Promise<Boolean> {
      const form = new FormData();
      form.append("username", body.username);
      form.append("password", body.password);

      const response = await fetch(`${API_BASE}login`, {
        method: "POST",
        body: form,
      });

      if (response.status !== 200) {
        toast.error("Failed to login.");
        return false;
      }

      const data = await response.json();

      this.username = body.username;
      this.token = data.access_token;

      localStorage.setItem(TOKEN_KEY, data.access_token);

      toast.success("Logged in!");
      return true;
    },
    async signup(body: User): Promise<Boolean> {
      const response = await fetch(`${API_BASE}api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        toast.error("Something went wrong, please try again later.");
        return false;
      }

      toast.success("User created successfully.");
      return true;
    },
    logout() {
      localStorage.removeItem(TOKEN_KEY);
      this.token = "";
    },
  },
});
