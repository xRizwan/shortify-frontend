import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const API_BASE = import.meta.env.VITE_API_BASE;
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
      const response = await fetch(`${API_BASE}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        toast.error("Failed to login.");
        return false;
      }

      const data = await response.json();

      this.username = body.username;
      this.token = data.access;

      toast.success("Loggin in!");
      return true;
    },
    async signup(body: User): Promise<Boolean> {
      const response = await fetch(`${API_BASE}users`, {
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

      const data = await response.json();

      this.username = body.username;
      this.token = data.access;

      toast.success("User created successfully.");
      return true;
    },
  },
});
