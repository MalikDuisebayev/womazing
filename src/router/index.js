import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/magazine",
      name: "magazine",
      component: () => import("../views/MagazineView.vue"),
      children: [
        {
          path: "all",
          component: () => import("../components/Magazine/Gallery.vue"),
        },
        {
          path: "shirt",
          component: () => import("../components/Magazine/Shirt.vue"),
        },
        {
          path: "swim",
          component: () => import("../components/Magazine/Swim.vue"),
        },
        {
          path: "dress",
          component: () => import("../components/Magazine/Dress.vue"),
        },
        {
          path: "swit",
          component: () => import("../components/Magazine/Swit.vue"),
        },
      ],
    },
  ],
});

export default router;
