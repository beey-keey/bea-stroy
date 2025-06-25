import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AboutUs from "../views/AboutUs.vue";
import ConstructionServices from "../views/ConstructionServices.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/services",
    name: "ConstructionServices",
    component: ConstructionServices,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Винаги скролирай най-горе
    return { top: 0 };
  },
});

export default router;
