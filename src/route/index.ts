import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import Aqiqah from "../pages/Aqiqah/Aqiqah.vue";
import AqiqahDetail from "../pages/Aqiqah/AqiqahDetail.vue";
import PenyediaAqiqah from "../pages/Aqiqah/PenyediaAqiqah.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/aqiqah", component: Aqiqah },
  { path: "/aqiqah/:id", component: AqiqahDetail },
  { path: "/penyedia-aqiqah", component: PenyediaAqiqah },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
