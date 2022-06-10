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
      props: true,
      component: () => import("../views/MagazineView.vue"),
    },
    {
      path: "/magazine/:id",
      name: "product",
      component: () =>
        import("../components/Magazine/Product/ProductComponent.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      props: true,
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/car",
      name: "car",
      component: () => import("../views/CarView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/issued",
      name: "issued",
      component: () => import("../components/Order/IssuedComponent.vue"),
    },
  ],
});

export default router;
