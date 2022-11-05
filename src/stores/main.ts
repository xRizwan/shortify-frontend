import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { API_BASE, errorToastOptions, makeUrl } from "@/helper";

const toast = useToast();

export const useMainStore = defineStore("main", {
  state: () => ({
    short: "",
    long: "",
  }),
  getters: {
    shorturl: (state) => makeUrl(state.short),
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
        this.$state.long = "";
        this.$state.short = data?.short;
      } else {
        toast.error(
          "Something went wrong, please try again later.",
          errorToastOptions
        );
      }
    },
    reset() {
      this.short = "";
      this.long = "";
    },
  },
});
