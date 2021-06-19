import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Arrivals",
        component: () => import("../components/core-ui/schedules/arrivals-component.vue"),
      },
      {
        path: "/departures",
        name: "Departures",
        component: () => import("../components/core-ui/schedules/departures-component.vue"),
      },
      {
        path: "/connections",
        name: "Connections",
        component: () => import("../components/core-ui/schedules/connections-component.vue"),
      },
    ]
  },
  {
    path: "/flights/arrivals",
    name: "FlightArrivals",
    component: () => import("../views/flights/arrivals.vue")
  },
  {
    path: "/flights/departures",
    name: "FlightDepartures",
    component: () => import("../views/flights/departures.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
