import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

// Инициализирай AOS след mount
AOS.init({
  duration: 800,
  once: true,
});

router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 300);
});
