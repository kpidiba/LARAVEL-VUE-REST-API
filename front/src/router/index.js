import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skills",
    name: "SkillIndex",
    component: () => import("../views/Skills/SkillIndex.vue"),
  },
  {
    path: "/skills/create",
    name: "SkillCreate",
    component: () => import("../views/Skills/SkillCreate.vue"),
  },
  {
    path: "/skills",
    name: "SkillEdit",
    component: () => import("../views/Skills/SkillEdit.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
