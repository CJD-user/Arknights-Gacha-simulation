<!-- HomeView.vue -->
<template>
	<div id="app">
	 <Loader/> 
		<Header class="header" />
		<ViewBox class="viewbox" />
	</div>
</template>

<script setup>
	import Loader from '../components/Loader.vue';
	import Header from '../components/Header.vue';
	import ViewBox from '../components/ViewBox.vue';
</script>

<style scoped>
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

	.viewbox {}
</style>