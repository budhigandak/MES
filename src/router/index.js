import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/about-us",
      name: "about",
      component: PresentationView,
    },
    {
      path: "/contact-us",
      name: "contactus",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "booking",
      component: PresentationView,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: PresentationView,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: PresentationView,
    }
  ],
});

export default router;
