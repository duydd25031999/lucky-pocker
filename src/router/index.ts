import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VoteRoomView from "../views/VoteRoomView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/vote/:roomId",
    name: "vote-room",
    component: VoteRoomView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
