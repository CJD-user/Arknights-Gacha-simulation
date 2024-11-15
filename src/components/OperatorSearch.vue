<template>
	<div class="OperatorSearch">
		<div class="mark" id="mark">

			<div class="parallax-page" @mousedown="isDragging = true" @mouseup="stopDragging" @mouseleave="stopDragging"
				@mousemove="onDrag" :style="{ perspective: '1000px' }">
				<div class="background-bottom"
					:style="{ transform: `translateZ(-3px) translateX(${layerOffset * 0}px)` }">
					<img src="../assets/img/UI_HOME_FRONT_BKG.png" class="backbottom" />
				</div>

				<div class="layer layer-background "
					:style="{ transform: `translateZ(-2px) translateX(${layerOffset * 12}px)` }">
					<div class="background-container">
						<img src="../assets/img/background.jpg" alt="Background 1" class="background" id="shadow-mirror"
							style="filter: blur(10px);" />
					</div>
				</div>

				<div class="layer layer-middle"
					:style="{ transform: `translateZ(0px) translateX(${layerOffset *18}px)` }">

					<div class="middle-box overlay-image">
						<img src="../assets/img/search003_00000.png" class="middle-box-img" id="shadow-mirror" />
					</div>
					<div class="middle-box text-top">
						<img src="../assets/img/search001_00000.png" class="middle-box-top" />
					</div>
					<div class="middle-box character-container">
						<div class="image-wrapper" :class="{ 'fade-in': imageLoaded }">
							<img v-if="CurrentCharacter" :src="CurrentCharacter" class="middle-box-chr"
								id="shadow-mirror" @load="imageLoaded = true" />
							<img v-else :src="currentCharacter.fullImg" class="middle-box-chr" id="shadow-mirror"
								@load="imageLoaded = true" />
						</div>
					</div>
					<div class="middle-box mrtext-container">
						<img src="../assets/img/logosearch.png" class="middle-box-logo" />
					</div>

				</div>



				<div class="layer layer-top" :style="{ transform: `translateZ(1px) translateX(${layerOffset *25}px)` }">
					<div class="middle-box box-button-container">
						<div class="middle-box-button text-1" style="width: 84%;" @click="claerdrawCount()"
							id="shadow-mirror">清除累计寻访记录
						</div>
						<div class="middle-box-button text-1" style="width: 84%;" @click="showOptions = true"
							id="shadow-mirror">更换本次UP干员
						</div>
						<div class="middle-box-button text-1" style="width: 84%;" @click="SearchRecord()"
							id="shadow-mirror">查看寻访记录</div>
					</div>
					<div>
						<div class="text-description-b ">
							<div class="drawCount">{{ drawCount }}</div>
							<div class="text-bottom"></div>
						</div>
						<div class="button-container" id="shadow-mirror">
							<div class="btn money sm">
								<div class="muti60" id="shadow-mirror" style="z-index: 1;">
									<div class="icon"></div>
									<div class="amount">X600</div>
								</div>
								<div class="sm-color"></div>
							</div>
							<div class="btn money sm">
								<div class="muti60" id="shadow-mirror" style="z-index: 1;">
									<div class="icon"></div>
									<div class="amount">X6000</div>
								</div>
								<div class="sm-color"></div>
							</div>
							<div class="btn  " @click="this.isSingleSearch=true">
								<div class="text s1">寻访一次</div>
							</div>
							<div class="btn  " @click="this.isTenSearch=true">
								<div class="text s10">寻访十次</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="status-layer" id="status-layer">
				<div class="top">
					<div class="line-left"></div>
					<div class="battery"></div>
					<div class="time" id="time">2024/10/13 12:12</div>
					<div class="line-right"></div>
				</div>
				<div class="bottom" id="shadow">
					<div class="status">
						<div class="item money" id="shadow-mirror">
							<div class="icon"></div>
							<div class="amount">{{arklongmenbi}}</div>
						</div>
						<div class="item jasper" id="shadow-mirror" @mouseenter="showTooltiphechengyu = true"
							@mouseleave="showTooltiphechengyu = false" @click="showModal = true">
							<div class="icon"></div>
							<div class="amount">{{ arkhechengyu }}</div>
							<div class="more" @click.stop="isexchangeHechengyu=true"></div>
							<span v-if="showTooltiphechengyu" class="tooltip">合成玉</span>
						</div>
						<div class="item stone" id="shadow-mirror" @mouseenter="showTooltipyuanshi = true"
							@mouseleave="showTooltipyuanshi = false">
							<div class="icon"></div>
							<div class="amount">{{ arkyuanshi }}</div>
							<div class="more" @click.stop="isexchangeHechengyu=true"></div>
							<span v-if="showTooltipyuanshi" class="tooltip">源石</span>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>



	<div>
		<Modal v-if="isModalVisible" @close="closeModal"></Modal>
	</div>

	<div v-if="showOptions" class="options-modal">
		<div class="modal-overlay" @click="this.showOptions=false"></div>
		<div class="options-container">
			<button @click="showOptions = false">关闭</button>
			<div class="character-options">
				<img v-for="(char, index) in characters" :key="index" :src="char.thumbnail" class="character-option"
					@click="changeCharacter(char)" id="shadow-mirror" />
			</div>
		</div>
	</div>

	<div v-if="isTenSearch" class="confirm-modal">
		<div class="modal-overlay" @click="this.isTenSearch=false" style="z-index: 9;"></div>
		<div class="confirm-container" style="z-index: 10;">
			<div class="confirm-backimg" style="z-index: 11;">
				<img src="../assets/img/Logo.png" />
			</div>
			<div class="confirm-cancel-text" style="z-index: 12;">
				<div class="confirm-text">是否消耗<span class="red">6000</span>合成玉寻访十次</div>
				<div class="confirm-cancel">
					<div @click="this.isTenSearch=false" class=" cancel">取消</div>
					<div @click="startTenDraw()" class=" confirm">确认</div>
				</div>
			</div>
		</div>
	</div>

	<div v-if="isSingleSearch" class="confirm-modal">
		<div class="modal-overlay" @click="this.isSingleSearch=false" style="z-index: 9;"></div>
		<div class="confirm-container" style="z-index: 10;">
			<div class="confirm-backimg" style="z-index: 11;">
				<img src="../assets/img/Logo.png" />
			</div>
			<div class="confirm-cancel-text" style="z-index: 12;">
				<div class="confirm-text">是否消耗<span class="red">600</span>合成玉寻访一次</div>
				<div class="confirm-cancel">
					<div @click="this.isSingleSearch=false" class=" cancel">取消</div>
					<div @click="startSingleDraw()" class=" confirm">确认</div>
				</div>
			</div>
		</div>
	</div>

	<div v-if="isexchangeHechengyu" class="exchange-modal">
		<div class="exchange-modal-content">
			<h3>兑换源石为合成玉</h3>
			<input type="number" v-model="inputYuanshi" placeholder="输入源石数量" />
			<div>
				<p>可兑换合成玉: {{ calculatedHechengyu }}</p>
			</div>
			<button @click="confirmExchange">确认兑换</button>
			<button @click="isexchangeHechengyu = false">取消</button>
		</div>
	</div>

</template>




<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import Modal from "../views/RecordModel.vue";
	export default {
		inheritAttrs: false,
		name: "OperatorSearch",
		components: {
			Modal
		},

		data() {
			return {
				isModalVisible: false,
				isDragging: false,
				lastMouseX: 0,
				layerOffset: 0,
				imageLoaded: false,

				loading: false,
				isTenSearch: false,
				isSingleSearch: false,

				showOptions: false, // 控制选择框显示 
				showTooltipyuanshi: false,
				showTooltiphechengyu: false,
				isexchangeHechengyu: false,
				inputYuanshi: 0,

			}
		},
		computed: {
			...mapState(['drawCount', 'results', 'totalResults', 'characters','temporaryDrawCount',
				'currentCharacter', 'fiveStarCharacters', 'fourStarCharacters', 'threeStarCharacters',
			]),
			...mapState('user', ['arkyuanshi', 'arkhechengyu', 'arklongmenbi']),
			CurrentCharacter() {
				return this.currentCharacter.fullImage;
			},
			// 从 Vuex store 中引入 characters 
			paginatedResults() {
				const start = (this.currentPage - 1) * this.pageSize;
				return this.totalResults.slice(start, start + this.pageSize);
			},
			totalPages() {
				return Math.ceil(this.totalResults.length / this.pageSize);
			},
			calculatedHechengyu() {
				return this.inputYuanshi * 160;
			},
		},
		mounted() {
			this.showTime();
			// 初始化鼠标位置
			document.addEventListener('mousemove', (event) => {
				this.lastMouseX = event.clientX;
			});
			console.log(this.temporaryDrawCount);

		},

		methods: {
			changeCharacter(charc) {
				this.imageLoaded = false;
				this.$store.commit('SET_CURRENT_CHARACTER', charc); // 更新当前干员
				this.showOptions = false; //关闭选择框 
				//console.log(charc);
				//console.log(charc.fullImage);
			
			},

			confirmExchange() {
				const requiredYuanshi = parseInt(this.inputYuanshi);

				if (requiredYuanshi > this.arkyuanshi) {
					alert('源石不足，无法进行交换');
					return;
				}
				this.$store.commit('user/updateYuanshi', this.arkyuanshi - requiredYuanshi);
				this.$store.commit('user/updateHechengyu', this.arkhechengyu + this.calculatedHechengyu);

				alert(`成功兑换 ${requiredYuanshi} 源石为 ${this.calculatedHechengyu} 合成玉`);

				this.isexchangeHechengyu = false;
				this.inputYuanshi = 0;
			},

			checkTime(i) {
				return (i < 10) ? "0" + i : i;
			},
			showTime() {
				setInterval(() => {
					const now = new Date();
					const year = now.getFullYear();
					const month = this.checkTime(now.getMonth() + 1);
					const day = this.checkTime(now.getDate());
					const hour = this.checkTime(now.getHours());
					const minute = this.checkTime(now.getMinutes());
					const str = `${year}/${month}/${day} ${hour}:${minute}`;

					if (str) {
						document.getElementById('time').textContent = str;
					} else {
						console.log("str为空")
					}
				}, 500);
			},
			startDragging(event) {
				// 防止文本选择  
				event.preventDefault();
				this.isDragging = true;
				this.lastMouseX = event.clientX; // 记录初始鼠标位置  
			},
			stopDragging() {
				this.isDragging = false;
				this.restoreLayers(); // 开始复原动画  
			},
			onDrag(event) {
				if (this.isDragging) {
					const deltaX = event.clientX - this.lastMouseX; // 计算移动量  
					this.layerOffset += deltaX * 0.3; // 根据移动量更新层偏移  
					this.lastMouseX = event.clientX; // 更新上一次鼠标位置  
				}
			},
			restoreLayers() {
				const restoreAnimation = () => {
					if (Math.abs(this.layerOffset) > 0.1) { // 如果偏移量大于某个阈值  
						this.layerOffset *= 0.88; // 逐渐降低偏移量  
						requestAnimationFrame(restoreAnimation); // 下一个动画帧  
					} else {
						this.layerOffset = 0; // 最终确保复原到 0  
					}
				};
				restoreAnimation(); // 启动复原动画  
			},
			...mapMutations(['clearOperatorSearchResults','updateTemporaryDrawCount','clearTemporaryDrawCount']),
			claerdrawCount() {
				if (this.drawCount) {
					this.clearOperatorSearchResults({
						drawCount: 0,
						totalResults: []
					});
				}
			},
			...mapMutations(['setOperatorSearchResults', 'addSearchCharacters']),
			...mapMutations('user', ['updateHechengyu', ]),
			async startSingleDraw() {
				if (this.arkhechengyu >= 600) {
					const newdrawCount = this.drawCount += 1;
					this.loading = true;
					const newresults = await this.performDraw(1);
					const newtotalRes = this.totalResults.concat(newresults);
					this.loading = false;
					const newtemporaryDrawCount = this.temporaryDrawCount+=1;
					this.updateTemporaryDrawCount(newtemporaryDrawCount);
					this.setOperatorSearchResults({
						drawCount: newdrawCount,
						results: newresults,
						totalResults: newtotalRes,
					});
					const newHechengyu = this.arkhechengyu -= 600;
					this.updateHechengyu(newHechengyu);

					this.$router.push('/OpSearchRes');
				} else {
					alert("没钱了!!!");
					this.isSingleSearch = false;
				}
			},
			async startTenDraw() {
				if (this.arkhechengyu >= 6000) {
					const newdrawCount = this.drawCount += 10;
					this.loading = true;
					const newresults = await this.performDraw(10);
					const newtotalRes = this.totalResults.concat(newresults);
					this.loading = false;
					const newtemporaryDrawCount = this.temporaryDrawCount+=10;
					this.updateTemporaryDrawCount(newtemporaryDrawCount);
					this.setOperatorSearchResults({
						drawCount: newdrawCount,
						results: newresults,
						totalResults: newtotalRes,
					});
					const newHechengyu = this.arkhechengyu -= 6000;
					this.updateHechengyu(newHechengyu);

					this.$router.push('/OpSearchRes');
				} else {
					alert("没钱了!!!");
					this.isTenSearch = false;
				}
			},
			async performDraw(times) {
				return new Promise(resolve => {
					setTimeout(() => {
						const results = [];
						for (let i = 0; i < times; i++) {
							results.push(this.drawCharacter());
						}
						resolve(results);
					}, 100);
				});
			},

			drawCharacter() {
				const drawCount = this.temporaryDrawCount;
				let sixStarProbability = 2; // 初始六星干员概率 //计算当前的六星干员概率 
				if (drawCount >= 50) {
					const increment = Math.floor(drawCount - 50) * 2;
					sixStarProbability += increment;
					if (sixStarProbability > 100) {
						sixStarProbability = 100; // 最大为100%
					}
				}

				const random = Math.random() * 100;

				// 判断是否获得六星干员 
				if (random < sixStarProbability) {
					const isChosen = Math.random() < 0.5;
					// 寻访完成后将六星概率重置为2%
					this.clearOperatorSearchResults(); // 重置 临时drawCount，可以根据需要调整 
					let SearchCharacter = isChosen ? this.currentCharacter : this.getRandomCharacter(this.characters);
					this.addSearchCharacters(SearchCharacter);

					return {
						name: isChosen ? this.currentCharacter.name : SearchCharacter.name,
						star: isChosen ? this.currentCharacter.star : SearchCharacter.star,
						halfimg: isChosen ? this.currentCharacter.halfimg : SearchCharacter.halfimg,
						rarity:'六星',
						thumbnail: isChosen ? this.currentCharacter.thumbnail : SearchCharacter.thumbnail,
					};
				}

				// 判断获得其他稀有度的干员 
				if (random < 10) { // 五星干员出率 
					let SearchCharacter = this.getRandomCharacter(this.fiveStarCharacters);
					this.addSearchCharacters(SearchCharacter);
					return {
						name: SearchCharacter.name,
						star: SearchCharacter.star,
						halfimg: SearchCharacter.halfimg,
						rarity:'五星',
						thumbnail:SearchCharacter.thumbnail,
					};
				} else if (random < 60) { // 四星干员出率 
					let SearchCharacter = this.getRandomCharacter(this.fourStarCharacters);
					this.addSearchCharacters(SearchCharacter);
					return {
						name: SearchCharacter.name,
						star: SearchCharacter.star,
						halfimg: SearchCharacter.halfimg,
						rarity:'四星',
						thumbnail:SearchCharacter.thumbnail,
					};
				} else { // 三星干员出率 
					let SearchCharacter = this.getRandomCharacter(this.threeStarCharacters);
					this.addSearchCharacters(SearchCharacter);

					return {
						name: SearchCharacter.name,
						star: SearchCharacter.star,
						halfimg: SearchCharacter.halfimg,
						rarity:'三星',
						thumbnail:SearchCharacter.thumbnail,

					};
				}
			},
			getRandomCharacter(characters) {
				const randomIndex = Math.floor(Math.random() * characters.length);
				return characters[randomIndex];
			},
			getRandomHalfimg(halfimgs) {
				// 随机选择一张图片  
				const randomIndex = Math.floor(Math.random() * halfimgs.length);
				return halfimgs[randomIndex];
			},
			SearchRecord() {
				this.isModalVisible = true;
				this.currentPage = 1; // 重置页码 
			},
			closeModal() {
				this.isModalVisible = false;
			},
			nextPage() {
				if (this.currentPage < this.totalPages) {
					this.currentPage += 1;
				}
			},
			prevPage() {
				if (this.currentPage > 1) {
					this.currentPage -= 1;
				}
			},


		},

	}
</script>

<style scoped>
	#shadow-mirror {
		filter: drop-shadow(0px 0px 18px rgba(0, 0, 0, 0.8));
	}

	#shadow {
		filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	}

	.mark {
		margin: 0;
		width: 100%;
		height: 100%;
		user-select: none;
		overflow: hidden;
		pointer-events: auto;
	}

	.parallax-page {
		width: 100vw;
		/* 占满整个视口宽度 */
		height: 100vh;
		/* 占满整个视口高度 */
		pointer-events: auto;
	}

	.layer {
		pointer-events: all;
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.1s ease;
		/* 平滑过渡动画 */
	}

	.background-bottom {
		z-index: 0;
		/* 设置层的顺序 */
		position: absolute;
		width: 100%;
		height: 100%;
		transform-origin: center;
	}

	.background-bottom img {

		width: 100%;
		height: 100%;
		filter: blur(8px);
	}

	.layer-background {
		z-index: 1;
		transform-origin: center;
		margin-top: 2.5%;
	}

	.background-container {
		transform-origin: center;
		width: 80%;
		height: 70%;
		overflow: hidden;
		background-color: dimgray;
	}

	.background {
		transform-origin: center;
		transform: scale(1.5);
	}

	.layer-middle {
		z-index: 3;
	}

	.mrtext-container {
		z-index: 0;
		display: flex;
		position: absolute;
	}


	.mrtext {
		font-family: '黑体', sans-serif;
		color: #fff;
		font-size: 50px;
		font-weight: 200;
		position: absolute;
		margin-right: 20px;
	}

	.layer-top {
		z-index: 3;
		pointer-events: auto;
	}

	.status-layer {
		z-index: 4;
	}

	.background-div-2 {
		width: 70%;

		position: absolute;
	}

	.layer-middle .middle-box {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		pointer-events: auto;

	}

	.overlay-image {
		z-index: 2;
	}

	.box-button-container {
		pointer-events: auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
		gap: 5px;
		margin-bottom: 11.2rem;
		margin-right: 69.85rem;
	}

	.middle-box-button {
		background-color: rgba(255, 255, 255, 0.9);
		/* 半透明白色背景 */
		border: none;
		padding: 10px 10px;
		/* 按钮内边距 */

		font-size: 16px;
		/* 字体大小 */

	}

	.middle-box-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
	}

	.middle-box-img {
		filter: brightness(110%);
		transform: translate(-50%, -50%);
		transform: scale(0.3);
		margin-right: 70rem;
		margin-bottom: 15rem;
	}

	.character-container {
		z-index: 1;

	}

	.image-wrapper {
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.middle-box-chr {
		transform-origin: center;
		transform: scale(0.5);
		margin-top: 2%;
		margin-right: 15%;
		opacity: 100%;

	}

	.fade-in {
		animation: fadeInSlide 0.4s ease forwards;
		/*0.4s 为动画时间 */
	}

	@keyframes fadeInSlide {
		0% {
			opacity: 0%;
			transform: scale(1.5);
			/* 开始时移出视口 */
		}

		100% {
			opacity: 100%;
			transform: scale(1);
			/* 完全进入视口 */
		}
	}

	.layer-top {
		z-index: 4;
		display: flex;
		flex-direction: column;

		justify-content: flex-end;

	}

	.middle-box-logo {
		transform: scale(0.7);
		opacity: 90%;
		margin-bottom: 12%;
		margin-left: 58%;
	}


	.text-description-b {
		margin-bottom: -10rem;
		margin-right: 42rem;

		width: 40rem;
		height: 14rem;

		display: flex;
		flex-direction: column-reverse;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
		gap: 0px;
		position: relative;

	}

	.text-top {
		z-index: 2;
	}

	.middle-box-top {
		transform: scale(0.45);
		margin-top: 16rem;
		margin-right: 50rem;
		filter: brightness(95%);
	}

	.drawCount {
		z-index: 2;
		margin-left: 32rem;
		margin-bottom: 0.7rem;
		color: #ffffff;
	}

	.text-bottom {
		z-index: 1;
		width: 100%;
		height: 60%;
		position: absolute;
		background-image: url(../assets/img/search002_00000.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(80%);
	}

	.button-container {
		margin-bottom: 7rem;
		margin-left: 51rem;

		width: 27.5rem;
		height: 10rem;
		display: flex;

		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
	}

	.btn {
		width: 50%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.s1 {
		width: 100%;
		height: 60%;
		background-color: azure;
	}

	.s10 {
		width: 100%;
		height: 60%;
		background-color: yellow;
	}

	.sm {

		display: flex;
		flex-direction: column-reverse;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
		position: relative;

	}

	.sm-color {
		width: 100%;
		height: 40%;
		background-color: #444444;
		position: absolute;
		z-index: 0;


	}

	.muti60 {
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center
	}

	.muti60 .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -446px -1103px;
		background-size: auto 5300%;
	}

	.muti60 .amount {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 33px;
		white-space: nowrap;
		margin: 0 10px
	}


	.status-layer {
		position: absolute;
		top: 1vh;
		right: 0;
		height: 6vh;
		width: 73vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: stretch;
		align-content: stretch;
		gap: 10px
	}

	.top {
		height: 35%;
		width: auto;
		margin: 0 0 0 80px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.bottom {}

	.top .time {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 18px;
		white-space: nowrap;
		margin: 0 10px
	}

	.top .battery {
		margin-left: 10px;
		height: 20px;
		width: 34px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 0px -34px;
		background-size: auto 4500%;
	}

	.top .line-left {
		width: 60px;
		height: 3px;
		margin-top: 8px;
		background-color: #fff;
	}

	.top .line-right {
		width: 500px;
		height: 3px;
		margin-top: 8px;
		background-color: #fff;
	}

	.status {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: stretch;
		align-content: stretch;
		gap: 10px;
		transform: scale(0.9);
	}

	.bottom .status .item {
		height: 100%;
		margin: 0 30px 0 0;
		display: flex;
		flex-flow: row nowrap;
		
	}

	.bottom .status .item.money .icon {
		width: 80px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -1225px -355px;
		background-size: auto 6600%;
	}

	.bottom .status .item.jasper .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -446px -1103px;
		background-size: auto 5300%;
	}

	.bottom .status .item.stone .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -1040px -464px;
		background-size: auto 5200%;
	}

	.bottom .status .item .amount {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 33px;
		white-space: nowrap;
		margin: 0 10px
	}

	.bottom .status .item .more {
		width: 36px;
		height: 36px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -732px -595px;
		background-size: auto 5800%;
	}


	.text {
		font-family: 'Noto Serif SC', serif;
		color: black;
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		padding: 13px;
		transition: transform 0.2s ease-in-out;
		/* 平滑过渡效果 */
	}

	.text-1 {
		font-family: 'Noto Serif SC', serif;
		color: black;
		font-size: 1rem;
		font-weight: 700;
		text-align: center;
		padding: 13px;
		transition: transform 0.2s ease-in-out;
		/* 平滑过渡效果 */
	}


	.text:hover {
		animation: scaleUp 0.2s ease-in-out forwards;
		/* 应用动画 */

	}

	@keyframes scaleUp {
		0% {
			font-size: 2.5rem;
			/* 初始大小 */

		}

		100% {
			font-size: 3rem;
			/* 放大到 1.08 倍 */
			color: #FF6666;
		}
	}

	.results {
		max-height: 300px;
		/*设定最大高度 */
		overflow-y: auto;
		/* 当内容超出时滚动 */
	}

	.pagination {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.options-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		user-select: none;
		justify-content: center;
		align-items: center;
	}


	.options-container {
		background: white;
		padding: 20px;
		background: rgba(0, 0, 0, 0.7);
		width: 70%;
		height: 70%;
		user-select: none;
		z-index: 101;
		border: 0.5px solid white;

	}

	.character-options {
		width: 100%;
		height: 95%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.character-option {
		width: 100px;
		/*头像宽度 */
		height: 100px;
		/*头像高度 */
		margin: 5px;
		cursor: pointer;
		border: 2px solid transparent;
		/* 默认边框透明 */
		transition: border 0.3s;
	}

	.character-option:hover {
		border: 2px solid blue;
		/* 鼠标悬停时显示蓝色边框 */
	}

	.modal-overlay {
		width: 100%;
		height: 100%;
		background-color: #444444;
		user-select: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 100;
	}

	.gold {
		color: #FFCC00;
	}

	.red {
		color: #CC0033;
	}

	.blue {
		color: #0099FF;
	}

	.green {
		color: #66CC66;
	}

	.purple {
		color: #CC00FF;
	}

	.sky {
		color: #33FFFF;
	}

	#canvas-dust {
		pointer-events: none;
		z-index: 120;
	}

	.confirm-modal {
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.confirm-container {
		width: 100%;
		height: 40%;
		background: rgba(255, 255, 255, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		position: relative;
	}

	.confirm-backimg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		position: absolute;
		overflow: hidden;
	}

	.confirm-backimg img {
		transform: scale(2);
		opacity: 0.5;

	}

	.confirm-cancel-text {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.confirm-container .confirm-text {
		width: 100%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Noto Serif SC', serif;
		color: black;
		font-size: 2.5rem;
		font-weight: 700;
	}

	.confirm-container .confirm-cancel {
		width: 100%;
		height: 20%;
		display: flex;
	}

	.confirm-container .confirm-cancel-text .confirm-cancel .cancel {
		height: 100%;
		width: 50%;
		background-color: gray;
		font-family: 'Noto Serif SC', serif;
		color: black;
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.confirm-container .confirm-cancel-text .confirm-cancel .confirm {
		height: 100%;
		width: 50%;
		background-color: #FFCC00;
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tooltip {
		position: absolute;
		background: #333;
		color: white;
		padding: 5px 10px;
		border-radius: 4px;
		font-size: 12px;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
		font-size: 20px;
	}
	.exchange-modal {  
	    position: fixed;  
	    top: 0;  
	    left: 0;  
	    right: 0;  
	    bottom: 0;  
	    background-color: rgba(0, 0, 0, 0.5);  
	    display: flex;  
	    justify-content: center;  
	    align-items: center;  
	}  
	
	.exchange-modal-content {  
	    background: rgba(0, 0, 0, 0.7);  
	    padding: 20px;  
	    text-align: center;  
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
		font-size: 20px;
		border: 1px solid;
	}  
	
	.exchange-modal-content input {  
		
	    margin-bottom: 10px;  
	}  
</style>