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
          component: () => import("../components/Magazine/AllComponent.vue"),
        },
        {
          path: "shirt",
          component: () => import("../components/Magazine/ShirtComponent.vue"),
        },
        {
          path: "swimwear",
          component: () =>
            import("../components/Magazine/SwimwearComponent.vue"),
        },
        {
          path: "dress",
          component: () => import("../components/Magazine/DressComponent.vue"),
        },
        {
          path: "switshot",
          component: () =>
            import("../components/Magazine/SwitshotComponent.vue"),
        },
      ],
    },
  ],
});

export default router;
