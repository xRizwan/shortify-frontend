import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast, { POSITION } from "vue-toastification";
import type { ToastOptions } from "vue-toastification/dist/types/types";
import App from "./App.vue";
import router from "./router";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

const app = createApp(App);

const options: ToastOptions = {
  timeout: 3000,
  position: POSITION.BOTTOM_RIGHT,
};

app.use(Toast, options);

app.use(createPinia());
app.use(router);

app.mount("#app");
