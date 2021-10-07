import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
// Header ı application seviyesinde import ettik, her yerden erişebiliriz artık
import Header from "@/components/Shared/Header.vue";

const app = createApp(App);
app.component("Header", Header);
app.mount("#app");
