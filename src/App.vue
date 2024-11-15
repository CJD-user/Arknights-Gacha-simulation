<template>
	 
    <router-view></router-view> <!-- 这里将渲染当前路由对应的组件 -->  

</template>  

<script setup>  

</script>  



<!-- <template>  
  <div id="app">  
   <Loader/>
    <Header class="header"/>  
    <ViewBox class="viewbox"/>  
	</div>
</template>  

<script setup>  
import Loader from './components/Loader.vue';  
import Header from './components/Header.vue';  
import ViewBox from './components/ViewBox.vue';  


</script>  

<style>  
#app {  
  position: relative;  
}  

.header {  
  position: absolute;   
  top: 0; 
  left: 0; 
  width: 100%;  
  z-index: 10; 
}  

.viewbox {  
  margin-top: 3.75rem;   
}  
</style> 
 -->

<!-- 
 
 <template>
	 <div id="app">
		 <Back class="back"/>
		 <OptorSearch class="opSearch"/>
		 
	 </div>
 </template>
 
 <script setup>
	 import Back from "./components/Back.vue"
	 import OptorSearch from "./components/OperatorSearch.vue"
 </script>
 
 <style scoped>
	 #app {
	   position: relative;  
	 }  
	 .back {
		position: absolute;
		z-index: 10;  
	 }
	 .opSearch {
		 margin-top: 7.5vh;
	 }
 </style> -->