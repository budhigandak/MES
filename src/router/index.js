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
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "booking",
      component: PresentationView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PresentationView,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PresentationView,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: PresentationView,
    }
    
  ],
});

export default router;
