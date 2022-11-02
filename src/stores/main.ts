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
    async postURL() {
      const response = await fetch(`${API_BASE}api/shortify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long: this.$state.long }),
      });

      if (response.status === 200) {
        console.log(response.status);

        const data = (await response.json()) as any;
        this.$state.long = data?.long;
        this.$state.short = data?.short;

        console.log(data);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  },
});
