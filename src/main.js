import { createApp } from 'vue';  
import App from './App.vue';  
import router from '../src/router/router.js';  
import store from '../src/store/store.js'; 


// 导入全局样式  
import './assets/css/normalize.css'; 



import './assets/js/src/jquery.3.3.1.min.js?v=1.0';
import './assets/js/src/jquery.pjax.js?v=1.0';
import html2canvas from 'html2canvas';

import './assets/js/src/parallax.3.1.0.min.js?v=1.0'; 



const app = createApp(App);  
app.use(store);
app.use(router); // 使用 router  
app.use(html2canvas);
app.mount('#app');  
