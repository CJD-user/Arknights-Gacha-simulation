<template>

	<div class="op-search-result">
		<div class="resultBk ">
			<img src="../assets/img/OperatorBackground_00000.jpg" style="width: 100%;height: 100%;" />
		</div>
		<div class="search-result">
			<div id="time" class="text" style="width: 100%;
    height: 4%;color: aliceblue;display: none;"></div>
			<div class="results-container">

				<div v-for="(result, index) in results" :key="index" class="result-box"
					:class="[flippedCards[index] ? '' : 'flipped',getResultClass(result.rarity)]" id="shadow-mirror"
					@click="flipCard(index)">
					<div class="card-inner" >
						<div class="front" id="shadow">
							<div class="text" style="z-index: 2;width: 100%;height: 100%;position: relative;" id="shadow-mirror">
								<div class="name-container" style="width: 100%;height: 50%; 
								display: flex;justify-content: center;">{{ result.name }}</div>
								<div style="width: 100%;height: 50%;display: flex;justify-content: center;align-items: flex-end;">
									<img :src="result.star"  style="transform-origin: 50% 100%; transform: scale(0.5);"/>
								</div>
							</div>
							<img v-if="result.name === '随机六星角色'" :src="result.halfimg" alt="Character Image"
								class="character-image" />
							<img v-if="result.name === 'UP六星角色'" :src="currentCharacter.halfimg" alt="Current Character"
								class="character-image" />
							<img v-else :src="result.halfimg" class="character-image" />
							<img src="../assets/img/OperatorCardBackground_00000.jpg" class="character-backgroundimage" />
						</div>
						<div class="back" id="shadow">
							<img src="../assets/img/cardBk.jpg" class="cardbk" />
						</div>
					</div>
				</div>
			</div>
			<div v-if="!allFlipped" style=" width: 100%;
    height: 8%; color: aliceblue;display: flex;justify-content: center;align-items:center;z-index: 10;"
				class="text back-button click-tip">点击任意卡牌翻转!</div>
			<button v-if="allFlipped" @click="goBack" style="position: 
			absolute; top: 20px; right: 20px; color: white;z-index: 10;" class="text skip-button">
				back
			</button>
			<button v-if="!allFlipped" @click="revealAllCards"
				style="position: absolute; top: 20px; right: 20px; color: white;z-index: 10;" class="text skip-button">
				skip
			</button>
			<button v-if="allFlipped" @click="shareResults" style=" width: 100%;
    height: 8%; position: absolute;top: 92%;background-color:
	 rgb(0, 0, 0,0.6);z-index: 11;" class="text share-button">分享结果</button>
		</div>
	</div>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				flippedCards: [], // 用于追踪翻转的卡片  
				allFlipped: false,

			}
		},

		computed: {
			...mapState(['drawCount', 'results', 'currentCharacter', 'characters']),
		},
		mounted() {
			this.flippedCards = Array(this.results.length).fill(false);
		},
		methods: {
			goBack() {
				this.$router.push('/OperatorSearch')
			},
			flipCard(index) {
				if (!this.flippedCards[index]) { // 确保只有未翻转的卡片可以翻转  
					this.flippedCards[index] = true; // 将卡片标记为已翻转  
					//console.log(this.results[index])
					this.allFlipped = this.flippedCards.every(card => card);
				}
			},
			revealAllCards() {
				this.results.forEach((_, index) => {
					this.flipCard(index); // 翻转每张卡片  
				});
			},
			/* getCharacterName(index) {
				// 假设 characters 数组中每个元素的 index 属性匹配 results 中的 index。  
				return this.characters ? this.characters.name : '未知干员';
			}, */
			getResultClass(rarity) {
				switch (rarity) {
					case '六星':
						return 'six-star';
					case '五星':
						return 'five-star';
					case '四星':
						return 'four-star';
					case '三星':
						return 'three-star';
					default:
						return '';
				}
			},
			shareResults() {
				const resultsText = this.results.map(result => `${result.name} - ${result.rarity}`).join('\n');
				const shareData = {
					title: '我的抽卡记录',
					text: resultsText,
					url: window.location.href // 当前页面的链接  
				};

				if (navigator.share) {
					navigator.share(shareData)
						.then(() => console.log('分享成功'))
						.catch((error) => console.log('分享失败', error));
				} else {
					// 处理不支持分享的情况，例如显示一个提示框  
					alert('当前浏览器不支持分享功能，请手动复制结果。');
				}
			},

		},
	}
</script>

<style scoped>
	#shadow-mirror {
		filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	}
	#shadow {
		filter: drop-shadow(6px 7px 6.6px rgba(0, 0, 0, 0.8));
	}

	.op-search-result {
		user-select: none;
		text-align: center;
		margin: 0;
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.resultBk {
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 0;
		position: absolute;


	}

	.search-result {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		z-index: 1;
		
	}

	.text {
		font-family: 'Noto Serif SC', serif;
		font-size: 20px;
		font-weight: bold;

	}

	.results-container {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		
		z-index: 0;
		pointer-events: auto;
		position: absolute;

	}


	.result-box {

		width: 10%;
		/*盒子的宽度 */
		height: 100%;
		/*盒子的高度 */

		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		overflow: hidden;
		position: relative;
		

		font-size: 16px;
		/*文字大小 */
		color: white;
		/*文字颜色 */
		box-shadow: 0 0 1 5px rgba(0, 0, 0, 0.3);
		/*盒子阴影 */
		perspective: 1000px;
		
	}

	.result-box
	.card-inner {
		width: 100%;
		height: 40%;
		position: relative;
		transform-style: preserve-3d;
		/* 3D效果 */
		transition: transform 0.6s;
		/* 过渡效果 */
	}

	.result-box.flipped .card-inner {
		transform: rotateY(180deg);
		/* 翻转效果 */
	}
	

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		/* 隐藏翻转面的背面 */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.back {	
		transform: rotateY(180deg);
		/* 背面旋转180度 */
	}

	/* 不同稀有度的背景和光效 */
	.six-star{
		background: url(../assets/img/resultstarbacksix_00000.png);
		/* 六星背景色 */
	}
	.five-star {
		background: url(../assets/img/resultstarbackfive_00000.png);
	}

	.four-star {
		background: url(../assets/img/resultstarbackfour_00000.png);
	
	}

	.three-star {
		background: url(../assets/img/resultstarbackthree_00000.png);
		
	}
	
	.text {

		font-family: 'Noto Serif SC', serif;
		font-size: 20px;
		font-weight: bold;
		color: white;
	}



	.character-image {
		width: auto;
		height: 100%;
		transform-origin: center;

		z-index: 1;
		position: absolute;
	}
	.character-backgroundimage{
		width: auto;
		height: 100%;
		z-index: 0;
		position: absolute;
	}

	.back-button {
		background-color: rgba(0, 0, 0, 0.7);

		color: white;
		font-size: 20px;
		cursor: pointer;
	}

	.cardbk {
		transform-origin: 50.1% 50%;
		transform: scale(0.16);
		position: absolute;


	}

	.skip-button {
		width: 60px;
		height: 50px;
		background-color: rgba(0, 0, 0, 0.7);
		/* 背景透明 */
		cursor: pointer;
		/* 鼠标悬停时显示手指图标 */
		font-weight: 300;

	}

	.click-tip {

		font-size: 24px;
		/* 字体大小 */
		color: white;
		/* 字体颜色 */
		opacity: 0;
		/* 初始不透明度为0 */
		animation: fadeInOut 1.5s infinite;
		/* 使用自定义动画 */
	}

	.share-button {
		width: 100px;
		height: 30px;
		justify-content: center;
		align-items: center;
	}

	/* 定义动画效果 */
	@keyframes fadeInOut {
		0% {
			opacity: 0;
			/* 不透明度为0 */
			color: white;
			/* 初始颜色 */
		}

		25% {
			opacity: 1;
			/* 不透明度渐变到1（完全可见） */
			color: rgba(255, 255, 255, 1);
			/* 设置为白色 */
		}

		50% {
			opacity: 0;
			/* 不透明度回到0 */
			color: rgba(255, 255, 255, 0.5);
			/* 颜色变为半透明 */
		}

		100% {
			opacity: 0;
			/* 最终保持为0 */
		}
	}
	
</style>