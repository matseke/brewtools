import { createWebHistory, createRouter } from "vue-router";
import Hops from "../pages/Hops.vue";
import Fermentables from "../pages/Fermentables.vue";
import HopsDetailView from "../views/HopsDetailView.vue";

const routes = [
  {
    path: "/hops",
    name: "Hops",
    component: Hops,
    children: [
        {
          path: ":id",
          props: true,
          component: HopsDetailView,
        }
      ]
},
  {
    path: "/fermentables",
    name: "Fermentables",
    component: Fermentables,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;