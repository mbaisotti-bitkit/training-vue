import App from "@/App.vue";
import { createApp } from "vue";
import router from ".";
import bookingStore from "@/store/mainStore.js"
import LoadingVue from "vue3-loading-overlay";
import LoadPage from "@/utility/LoadPage.vue";

const app = createApp(App)
app.use(router)
app.component("LoadingVue", LoadingVue).component("LoadPage", LoadPage)
app.mount("#app")