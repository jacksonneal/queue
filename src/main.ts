import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Tooltip from "primevue/tooltip";
import Dialog from "primevue/dialog";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./style/global.css";

const app: any = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component("Button", Button);
app.component("Dialog", Dialog);
app.directive("tooltip", Tooltip);
app.mount("#app");
