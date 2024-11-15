 <template>
 	<div id="app">
 		<Back class="back" />
 		<OperatorSearch class="opSearch" />
 	</div>
 </template>

 <script setup>
 	import Back from "../components/Back.vue"
 	import OperatorSearch from "../components/OperatorSearch.vue"
 </script>

 <style scoped>
 

 	.back {
 		position: absolute;
 		z-index: 10;
		
 	}
 </style>