// router.js 
 import { createRouter, createWebHashHistory } from 'vue-router'; 
import HomeView from '../views/HomeView.vue';  
import OperatorSearchView from '../views/OperatorSearchView.vue';  
import OpSearchRes from "../views/OpSearchRes.vue";
import Operators from "../views/OperatorsView.vue";
// router.js  


const routes = [  
	 { path: '/', redirect: '/Home' },
  { path: '/Home', component: HomeView },  
  { path: '/OperatorSearch', component: OperatorSearchView },  
   { path: '/OpSearchRes', component: OpSearchRes,},
   { path: '/Operators', component: Operators},
];  

const router = createRouter({  
  history: createWebHashHistory(),  
  routes,  
});  

export default router;