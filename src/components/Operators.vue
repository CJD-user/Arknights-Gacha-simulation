<template>
	<div class="OperatorsView">
		<div class="OperatorsView-back">
			<img src="../assets/img/OperatorBackground_00000.jpg" />
			<div id="time"></div>
		</div>

		<div class="StarClassification shadow-mirror">
			<div class="starlevel" @click="selectTag('all')" :class="{ active: selectedTag == 'all' }">
				<div class="img-container">
					<img src="../assets/img/Logo.png"
						style="margin: -40px -80px; width: 160px; height: auto; opacity: 0.5;" />
				</div>
				<div class="text" style="z-index: 1;">全部干员</div>
			</div>
			<div class="starlevel" @click="selectTag('六星干员')" :class="{ active: selectedTag == '六星干员' }">
				<div class="text">六星干员</div>
			</div>
			<div class="starlevel" @click="selectTag('五星干员')" :class="{ active: selectedTag == '五星干员' }">
				<div class="text">五星干员</div>
			</div>
			<div class="starlevel" @click="selectTag('四星干员')" :class="{ active: selectedTag == '四星干员' }">
				<div class="text">四星干员</div>
			</div>
			<div class="starlevel" @click="selectTag('三星干员')" :class="{ active: selectedTag == '三星干员' }">
				<div class="text">三星干员</div>
			</div>
		</div>

		<div class="shadow-mirror" id="back" @click="goBack()">
			<img class="shadow-mirror" src="../assets/img/back.png" style="width: 4vw;" />
		</div>

		<div class="cardsbox" @mousedown.prevent="startDrag" @mouseup="stopDrag" @mouseleave="stopDrag"
			@mousemove="onMouseMove">
			<div class="cards-container shadow-mirror" :style="{ transform: `translateX(${offset}px)` }"
				v-if="filteredCharacters.length">
				<Card v-for="(result, index) in filteredCharacters" :key="index" :halfImg="result.halfimg"
					:name="result.name" :cardtop="result.cardtop" :star="result.star" />
			</div>
			<div v-else style="font-family: 'Noto Serif SC', serif; color: black; font-size: 1.5rem; font-weight: 700; 
				display: flex; justify-content: center; align-items: center;">
				<div style="margin-top: 25%;">博士还没拥有干员,快快去进行寻访吧!!!</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex';
	import Card from './OperatorCard.vue';

	export default {
		components: {
			Card,
		},
		data() {
			return {
				gachaResults: [],
				isDragging: false,
				startX: 0,
				offset: 0,
				velocity: 0,
				selectedTag: 'all',
			};
		},
		computed: {
			...mapState(['SearchCharacters']),
			...mapGetters(['uniqueSearchCharacters']),
			filteredCharacters() {
				// 根据选中的标签过滤干员  
				if (this.selectedTag == 'all') {
					return this.uniqueSearchCharacters;
				}
				return this.uniqueSearchCharacters.filter(character => character.starlevel == this.selectedTag);
			},
			totalCardWidth() {
				return this.filteredCharacters.length ? (this.filteredCharacters.length / 2 + this.filteredCharacters
					.length % 2) * 206 : 0; // 假设每个卡片宽度为 210px  
			},
			containerWidth() {
				return window.innerWidth; // 假设容器宽度为窗口宽度  
			},
		},
		mounted() {
			// console.log(this.SearchCharacters);  
			// console.log(this.uniqueSearchCharacters);  
		},
		beforeDestroy() {},
		methods: {
			goBack() {
				this.$router.push('/');
			},
			selectTag(tag) {
				this.selectedTag = tag; // 更新选中的标签  
				/* console.log(this.uniqueSearchCharacters);
				console.log(this.filteredCharacters);
				console.log(this.selectedTag);
				console.log(this.uniqueSearchCharacters.filter(character => character.starlevel == this.selectedTag)); */
			},
			startDrag(event) {
				this.isDragging = true;
				this.startX = event.clientX;
				this.velocity = 0; // 重置滑动速度  
			},
			stopDrag() {
				this.isDragging = false;

				const maxOffset = 0; // 右边界  
				const minOffset = this.totalCardWidth - this.containerWidth < 0 ? 0 : this.containerWidth - this
					.totalCardWidth; // 左边界  

				// 施加惯性反弹  
				if (this.offset > maxOffset) {
					this.offset = maxOffset; // 恢复到右边界  
				} else if (this.offset < minOffset) {
					this.offset = minOffset; // 恢复到左边界  
				} else {
					this.offset += this.velocity; // 应用惯性  
					this.velocity *= 0.95; // 逐渐减速  
				}
			},
			onMouseMove(event) {
				if (this.isDragging) {
					const currentX = event.clientX;
					const dx = currentX - this.startX; // 计算滑动距离  
					const speedFactor = 2; // 可以修改这个值来改变滑动速度  
					this.offset += dx * speedFactor; // 更新偏移值  
					this.velocity = dx; // 更新速度  
					this.startX = currentX; // 更新起始位置  

					const maxOffset = 0; // 右边界  
					const minOffset = this.totalCardWidth - this.containerWidth < 0 ? 0 : this.containerWidth - this
						.totalCardWidth; // 左边界  

					// 限制偏移量  
					if (this.offset > maxOffset) {
						this.offset = maxOffset;
					}
					if (this.offset < minOffset) {
						this.offset = minOffset;
					}
				}
			}
		},
	};
</script>

<style scoped>
	.OperatorsView {
		width: 100vw;
		height: 100vh;
		margin: 0;
		user-select: none;
		position: relative;
		overflow: hidden;
	}

	.OperatorsView-back {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
	}

	.OperatorsView-back img {
		width: 100%;
		height: 100%;
		transform-origin: 50% 50%;
		transform: scale();
	}

	#back {
		position: absolute;
		margin-top: 1vh;
		margin-left: 1vw;
		width: 20vw;
		height: 7.5vh;
		background-color: #303030;
		z-index: 2;
		display: flex;
		justify-content: flex-start;
	}

	.StarClassification {
		margin-top: 10px;
		margin-left: 50%;
		display: flex;
		position: absolute;
		width: 750px;
		height: 63px;
		z-index: 3;
		flex-direction: row;
		flex-wrap: nowrap;

	}

	.starlevel {
		width: 20%;
		height: 100%;
		background-color: #303030;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

	}

	.img-container {
		width: 100%;
		height: 100%;
		z-index: 0;
		position: absolute;
		overflow: hidden;
	}

	.starlevel {
		transition: background-color 0.3s, color 0.3s;
	}

	.starlevel:hover,
	.starlevel.active{
		background-color: white;

	}

	.starlevel::after {
		content: "";
		display: block;
		width: 100%;
		height: 4px;
		background-color: transparent;
		transition: background-color 0.3s;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.starlevel:hover::after {
		background-color: deepskyblue;
	}
	.starlevel.active::after {  
	    background-color: deepskyblue; 
	}


	.StarClassification .starlevel .text {
		font-family: 'Noto Serif SC', serif;
		color: darkgrey;
		font-size: 18px;
		font-weight: 500;
	}

	.starlevel:hover .text,
	.starlevel.active .text{
		font-size: 20px;
		font-weight: 600;
		color: deepskyblue;
		transition: color 0.3s, font-size 0.3s, font-weight 0.3s;
	}
	
	.shadow-mirror {
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));

	}

	.cardsbox {
		user-select: none;
		width: 100%;
		height: 100%;
		z-index: 1;
		position: relative;
	}

	.cards-container {
		margin-left: 10px;
		margin-top: 80px;
		width: max-content;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: flex-start;
		gap: 8px;
		transition: transform 0.2s;


	}
</style>