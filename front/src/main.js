import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", component: Home },
  ,
  {
    path: "/skills",
    name: "SkillIndex",
    component: () => import("/src/views/Skills/SkillIndex.vue"),
  },
  {
    path: "/skills/create",
    name: "SkillCreate",
    component: () => import("/src/views/Skills/SkillCreate.vue"),
  },
  {
    path: "/skills:id/edit",
    name: "SkillEdit",
    component: () => import("/src/views/Skills/SkillEdit.vue"),
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
