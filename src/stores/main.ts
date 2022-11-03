import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
export const API_BASE = import.meta.env.VITE_API_BASE;

const toast = useToast();

export const useMainStore = defineStore("main", {
  state: () => ({
    short: "",
    long: "",
  }),
  getters: {
    shorturl: (state) => `${API_BASE}${state.short}`,
    showurl: (state) => (state.short ? true : false),
  },
  actions: {
    async postURL(token: string | null) {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["authorization"] = "Bearer " + token;
      }

      const response = await fetch(`${API_BASE}api/shortify`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ long: this.$state.long }),
      });

      if (response.status === 200) {
        const data = (await response.json()) as any;
        this.$state.long = data?.long;
        this.$state.short = data?.short;
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  },
});
