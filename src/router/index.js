import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FilmDetails from "../views/FilmDetails.vue";
import CharacterDetails from "../views/CharacterDetails.vue";
import PlanetDetails from "../views/PlanetDetails.vue";

//Set to JSON Server address and Port
Vue.prototype.SwapiURL = "https://swapi.dev/api/";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/filmDetails/:FilmTitle",
    name: "filmDetails",
    component: FilmDetails
  },
  {
    path: "/characterDetails/:characterID",
    name: "characterDetails",
    component: CharacterDetails
  },
  {
    path: "/planetDetails/:planetId",
    name: "planetDetails",
    component: PlanetDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
