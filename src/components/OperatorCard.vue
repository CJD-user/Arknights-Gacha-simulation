<template>
	<div class="card">
		<div class="card-back-container">
			<img class="card-back" :src="cardBackSrc" alt="Card Back" />
		</div>
		<div class="character-image-container">
			<img class="character-image" :src="halfImg" alt="Character" />
			<!-- <div v-else>图片加载失败</div> -->
		</div>
		<div class="card-face-container">
			<img class="card-face" :src="cardtop" alt="Card Face" />
		</div>
		<div class="card-title">
			<div class="card-stars">
				<img :src="star" alt="Star" style="transform-origin: 50% -10%; transform: scale(0.45);margin-right: 25px;"/>
			</div>
			<div class="text-container" v-if="name" id="shadow">
				{{ name }}
			</div>
			<div v-else>干员加载失败</div>
		</div>
	</div>
</template>

<script>
	import cardBackground from "../assets/img/OperatorCardBackground_00000.jpg"

	export default {
		props: {
			halfImg: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			cardtop: {
				type:String,
				required:true,
			},
			star: {
				type:String,
				required:true,
			},
		},
		data() {
			return {
				cardBackSrc: cardBackground,
			};
		},
		mounted() {
			//console.log(this.cardtop);
		},
		created() {

		},
		methods: {

		},

	};
</script>

<style scoped>
	#shadow {
		filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	}
	.card {
		user-select: none;
		position: relative;
		width: 180px;
		height: 360px;
		margin: 10px;
		perspective: 1000px;
	}

	.card .card-back-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.card-back-container img {
		position: absolute;
		transform-origin: 50% 50%;
		transform: scale(0.9);
		width: 100%;
		height: 100%;

	}

	.card .character-image-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.character-image-container img {
		position: absolute;
		transform-origin: 50% 50%;
		transform: scale(0.9);
		width: 100%;
		height: 100%;

	}

	.card .card-face-container {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.card-face-container img {
		position: absolute;
		transform-origin: 50% 50%;
		transform: scale(1);
		width: 100%;
		height: 100%;

	}

	.card .card-title {
		width: 100%;
		height: 100%;
		position: relative;
		top: 10px;
		left: 20px;
		color: white;
		display: flex;
		z-index: 5;
		
		/* 根据需求调整样式 */
	}

	.card-stars {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		
		position: absolute;

	}

	.text-container {
		width: 100%;
		height: 97%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		font-family: 'Noto Sans SC', sans-serif;
		font-weight: 500;
		font-size: 22px;
	}
</style>