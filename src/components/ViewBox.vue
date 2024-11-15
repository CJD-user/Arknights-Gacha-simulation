<template>

	<div id="view-box" class="view-box">
		<div id="mark" class="mark" data-pointer-events="true">
			<div id="bg-layer" class="layer" data-depth="0.0">
				<img id="bg-img" class="cover" src="../assets/img/UI_HOME_FRONT_BKG.png" />
			</div>

			<div id="char-arts-layer" class="layer" data-depth="0.03">
				<div class="char perspective box"
					:style="{ transform: `translate(${characterX}px, ${characterY}px) scale(${characterScale})` }">
					<img v-if="CurrentCharacter" :src="CurrentCharacter" class="middle-box-chr" id="shadow-mirror"
						@load="imageLoaded = true" />
					<img v-else :src="MaincurrentCharacter.fullImg" class="middle-box-chr" id="shadow-mirror"
						@load="imageLoaded = true" />
				</div>
			</div>

			<div id="level-box-container-layer" class="layer" data-depth="0.1">
				<div class="level-box" id="level-box-adapter">
					<div class="level-logo"></div>
					<div class="user-level">
						<div class="level-chart">
							<div class="chart-bg" id="chart-bg"></div>
							<div class="chart-pr" id="chart-pr"></div>
							<div class="level-num" id="level-num">
								<div id="shadow">{{arklv}}</div>
							</div>
						</div>
					</div>
					<div class="user-info">
						<div class="name-container">
							<div class="name" id="shadow">{{arkname}}</div>
						</div>
						<div class="id" id="shadow">ID:{{arkid}}</div>
					</div>
				</div>
			</div>

			<div id="left-menu-layer" class="layer" data-depth="0.2">
				<div class="left menu box">
					<div class="container" id="left-mune-adapter">
						<div class="top">
							<div class="dialog">
								<span>{{ arkvoice }}</span>
							</div>
						</div>
						<div class="bottom">
							<div class="left" @click="nextImage">
								<div class="activity-img" :style="backgroundStyle"></div>
							</div>
							<div class="right">
								<div class="pos-1">
									<div class="friends" @click="showSettingsModal = true">
										<div class="icon"></div>
										<div class="text">好友</div>
									</div>
								</div>
								<div class="pos-2">
									<div class="information">
										<div class="icon"></div>
										<div class="text">情报</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="right-menu-layer" class="layer" data-depth="0.2">
				<div class="right menu box">
					<div class="popup" id="right-mune-popup-adapter"></div>
					<div class="container" id="right-mune-adapter">
						<div class="pos-1">
							<div class="top" id="shadow">
								<div class="line-left"></div>
								<div class="battery"></div>
								<div class="time" id="time" ref="time">2024/10/13 12:12</div>
								<div class="line-right"></div>
							</div>
							<div class="bottom">
								<div class="bg"></div>
								<div class="status" id="shadow">
									<div class="item money">
										<div class="icon"></div>
										<div class="amount">{{arklongmenbi}}</div>
									</div>
									<div class="item jasper" @mouseenter="showTooltiphechengyu = true"
										@mouseleave="showTooltiphechengyu = false">
										<div class="icon"></div>
										<div class="amount">{{ arkhechengyu }}</div>
										<div class="more" @click="showSettingsModal = true"></div>
										<span v-if="showTooltiphechengyu" class="tooltiphechengyu">合成玉</span>
									</div>
									<div class="item stone" @mouseenter="showTooltipyuanshi = true"
										@mouseleave="showTooltipyuanshi = false">
										<div class="icon"></div>
										<div class="amount">{{ arkyuanshi }}</div>
										<div class="more" @click="showSettingsModal = true"></div>
										<span v-if="showTooltipyuanshi" class="tooltipyuanshi">源石</span>
									</div>
								</div>
							</div>
						</div>
						<div class="pos-2">
							<div class="intellect">
								<div class="icon"></div>
								<div class="content">
									<div class="figure">
										<div class="value">150</div>
										<div class="total">/150</div>
									</div>
									<div class="battle">
										<div class="text">作战</div>
										<div class="current">当前</div>
										<div class="level">全部完成</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pos-3">
							<div class="team" @mouseenter="showCharacter = true" @mouseleave="showCharacter = false">
								<div class="icon"></div>
								<div v-if="showCharacter" class="text" @click="showCharacterChage=true"> 角色展示</div>
								<div v-else class="text">编队</div>
							</div>
							<div class="member">
								<div class="icon"></div>
								<div class="text" @click="goToOperators()">干员</div>
								<div class="desc">角色管理</div>
							</div>
							<div class="blank"></div>
						</div>
						<div class="pos-4">
							<div class="shop" @mouseenter="showChangeCharacterPosition = true"
								@mouseleave="showChangeCharacterPosition = false">
								<div class="icon"></div>
								<div v-if="showChangeCharacterPosition" class="text"
									@click="ShowChangeCharacterPosition=true"> 调整位置</div>
								<div v-else class="text">采购中心</div>
							</div>
							<div class="gamble">
								<div class="top">
									<div class="icon"></div>
									<div class="text">招募</div>
								</div>
								<div class="bottom">
									<div class="left">
										<div class="icon"></div>
										<div class="text">公开招募</div>
									</div>
									<div class="right" @click="goToOpSearch()">
										<div class="icon"></div>
										<div class="text">干员寻访</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pos-5">
							<div class="task" @mouseenter="resetData = true" @mouseleave="resetData = false">
								<div class="icon"></div>
								<div v-if="resetData" class="text" @click="showResetData=true">重置数据</div>
								<div v-else class="text">任务</div>
							</div>
							<div class="infrastructure">
								<div class="icon"></div>
								<div class="text">基建</div>
								<div class="beta"></div>
							</div>
							<div class="warehouse">
								<div class="icon"></div>
								<div class="text">仓库</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<canvas ref="canvas" id="canvas-dust"></canvas>
		</div>
	</div>

	<div v-if="showCharacterChage" class="options-modal">
		<div class="modal-overlay" @click="this.showCharacterChage=false"></div>
		<div class="options-container">
			<button @click="showCharacterChage = false">关闭</button>
			<button @click="selectTag('all')" :class="{ 'active-button': selectedTag == 'all' }">所有干员</button>
			<button @click="selectTag('六星干员')" :class="{ 'active-button': selectedTag == '六星干员' }">六星干员</button>
			<button @click="selectTag('五星干员')" :class="{ 'active-button': selectedTag == '五星干员' }">五星干员</button>
			<button @click="selectTag('四星干员')" :class="{ 'active-button': selectedTag == '四星干员' }">四星干员</button>
			<button @click="selectTag('三星干员')" :class="{ 'active-button': selectedTag == '三星干员' }">三星干员</button>
			<div class="character-options" v-if="filteredCharacters.length">
				<img v-for="(char, index) in filteredCharacters" :key="index" :src="char.thumbnail"
					class="character-option" @click="changeCharacter(char)" id="shadow-mirror" />

			</div>
			<div v-else>
				<div style="width: 100%;height: 100%; font-family: 'Noto Serif SC', serif;color: white;
			font-size: 1.5rem;font-weight: 500;display: flex;justify-content: center;align-items: center;">博士还没拥有干员,快快去进行寻访吧!!!
				</div>
			</div>
		</div>

	</div>

	<div v-if="ShowChangeCharacterPosition" class="position-control-layer">
		<div @click="ShowChangeCharacterPosition = false" style="margin-top: -10px;
		display: flex;justify-content: flex-end;">×</div>
		<div class="control">

			<label>X 位置: {{ characterX }}</label>
			<input type="range" min="-200" max="200" v-model="characterXInput" @input="updateCharacterPositionX" />

			<label>Y 位置: {{ characterY }}</label>
			<input type="range" min="-200" max="200" v-model="characterYInput" @input="updateCharacterPositionY" />

			<label>缩放: {{ characterScale }}</label>
			<input type="range" min="0.5" max="3" step="0.1" v-model="characterScaleInput"
				@input="updateCharacterScale" />
		</div>
	</div>

	<Personal :isVisible="showSettingsModal" @close="showSettingsModal = false" />

	<div v-if="showResetData" class="confirm-modal">
		<div class="modal-overlay" @click="this.isSingleSearch=false" style="z-index: 9;"></div>
		<div class="confirm-container" style="z-index: 10;">
			<div class="confirm-backimg" style="z-index: 11;">
				<img src="../assets/img/Logo.png" />
			</div>
			<div class="confirm-cancel-text" style="z-index: 12;">
				<div class="confirm-text">您确定要重置<span class="red">所有</span>数据吗?此操作不可逆!!!</div>
				<div class="confirm-cancel">
					<div @click="this.showResetData=false" class=" cancel">取消</div>
					<div @click="ResetData()" class=" confirm">确认</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import Personal from './Personal.vue';
	import {
		mapMutations,
		mapState
	} from 'vuex';
	import {
		mapGetters
	} from 'vuex';
	export default {
		components: {
			Personal
		},
		name: "ViewBox",
		data() {
			return {
				width: 300,
				height: 300,
				dustQuantity: 50,
				dustArr: [],
				ctx: null,
				animationInterval: null,
				showTooltipyuanshi: false,
				showTooltiphechengyu: false,
				showCharacter: false,
				showCharacterChage: false,
				imageLoaded: false,
				showChangeCharacterPosition: false,
				ShowChangeCharacterPosition: false,
				showSettingsModal: false,
				resetData: false,
				showResetData: false,
				selectedTag: 'all',
				backgroundPositions: [{
						x: '-14px',
						y: '-38px'
					},
					{
						x: '-14px',
						y: '-180px'
					},
					{
						x: '-14px',
						y: '-322px'
					},
					{
						x: '-14px',
						y: '-464px'
					},
				],
				currentIndex: 0,
			};
		},
		computed: {
			...mapState(['SearchCharacters', 'currentCharacter', 'MaincurrentCharacter',
				'characterX', 'characterY', 'characterScale',
			]),
			...mapState('user', ['arkyuanshi', 'arkhechengyu', 'arkname', 'arkid', 'arklv', 'arkvoice', 'arklongmenbi']),
			...mapGetters(['uniqueSearchCharacters']),
			CurrentCharacter() {
				return this.MaincurrentCharacter.fullImage;
			},
			filteredCharacters() {
				// 根据选中的标签过滤干员  
				if (this.selectedTag == 'all') {
					return this.uniqueSearchCharacters;
				}
				return this.uniqueSearchCharacters.filter(character => character.starlevel == this.selectedTag);
			},
			backgroundStyle() {
				const pos = this.backgroundPositions[this.currentIndex];
				return {
					backgroundPosition: `${pos.x} ${pos.y}`
				};
			}
		},
		mounted() {
			const canvas = document.getElementById('canvas-dust');
			this.ctx = canvas.getContext('2d');
			this.resize();
			this.build();
			window.addEventListener('resize', this.resize);

			this.initialize();
			window.addEventListener('resize', this.updateDimensions);

			setInterval(() => {
				this.nextImage();
			}, 3000); 
		

	},
	beforeDestroy() {
			clearInterval(this.animationInterval);
			window.removeEventListener('resize', this.resize);

			window.removeEventListener('resize', this.updateDimensions);
		},
		watch: {
			characterX(newVal) {
				this.characterXInput = newVal;
				console.log(this.characterX)
			},
			characterY(newVal) {
				this.characterYInput = newVal;
			},
			characterScale(newVal) {
				this.characterScaleInput = newVal;
			}
		},

		methods: {
			nextImage() {
				// 切换到下一张背景  
				this.currentIndex = (this.currentIndex + 1) % this.backgroundPositions.length;
			},
			selectTag(tag) {
				this.selectedTag = tag; // 更新选中的标签  

			},
			changeCharacter(charc) {
				this.imageLoaded = false;
				this.$store.commit('SET_MAIN_CHARACTER', charc); // 更新当前干员
				this.showCharacterChage = false; //关闭选择框 
				//console.log(charc);
				//console.log(charc.fullImage);

			},
			...mapMutations(['setCharacterPositionX', 'setCharacterPositionY', 'setCharacterScale']),
			updateCharacterPositionX() {
				this.setCharacterPositionX(this.characterXInput);
			},
			updateCharacterPositionY() {
				this.setCharacterPositionY(this.characterYInput);
			},
			updateCharacterScale() {
				this.setCharacterScale(this.characterScaleInput);
			},
			ResetData() {
				alert("┭┮﹏┭┮ 重置成功 ┭┮﹏┭┮");
				this.$store.dispatch('clearLocalStorage');
				this.$store.dispatch('user/resetUserInfo');
				this.showResetData = false;
				this.$router.push('/');
			},
			build() {
				this.resize();
				if (this.ctx) {
					const points = this.getPoint(this.dustQuantity);
					for (const point of points) {
						const dustObj = new Dust();
						this.buildDust(point[0], point[1], dustObj);
						this.dustArr.push(dustObj);
					}
					this.animationInterval = setInterval(this.play, 80);
				}
			},
			play() {
				if (this.ctx) {
					this.ctx.clearRect(0, 0, this.width, this.height);
				}
				for (const dust of this.dustArr) {
					if (dust.x < 0 || dust.y < 0) {
						dust.x = this.width;
						dust.y = Math.floor(Math.random() * window.innerHeight);
						this.buildDust(dust.x, dust.y, dust);
					} else {
						dust.x -= dust.vx;
						dust.y -= dust.vy;
						this.buildDust(dust.x, dust.y, dust);
					}
				}
			},
			buildDust(x, y, dust) {
				if (x) dust.x = x;
				if (y) dust.y = y;
				if (this.ctx) {
					this.ctx.beginPath();
					this.ctx.shadowBlur = dust.shadowBlur;
					this.ctx.shadowColor = dust.color;
					this.ctx.shadowOffsetX = dust.shadowX;
					this.ctx.shadowOffsetY = dust.shadowY;
					this.ctx.ellipse(dust.x, dust.y, dust.radiusX, dust.radiusY, dust.rotation, 0, Math.PI * 2);
					this.ctx.closePath();
					this.ctx.fillStyle = dust.color;
					this.ctx.fill();
				}
			},
			resize() {
				const canvas = document.getElementById('canvas-dust');
				this.width = window.innerWidth;
				this.height = window.innerHeight;
				this.dustQuantity = Math.floor((this.width + this.height) / 30);
				if (canvas) {
					canvas.width = this.width;
					canvas.height = this.height;
				}
			},
			getPoint(number = 1) {
				const point = [];
				for (let i = 0; i < number; i++) {
					const x = Math.floor(Math.random() * window.innerWidth);
					const y = Math.floor(Math.random() * window.innerHeight);
					point.push([x, y]);
				}
				return point;
			},
			goToOpSearch() {
				this.$router.push('/OperatorSearch');

			},
			goToOperators() {
				this.$router.push('/Operators');
			},
			initialize() {
				this.screenRotateAlert();
				this.screenAdapter();
				this.bgParallaxInit();
				this.hideLoader();
				this.showTime();
			},

			hideLoader() {
				const loaderLayer = document.getElementById('loader-layer');
				if (loaderLayer) {
					loaderLayer.style.display = 'none';
				}
			},

			bgParallaxInit() {
				const coverElement = document.getElementById('bg-img');
				const cover = {
					t: coverElement,
					w: coverElement.naturalWidth,
					h: coverElement.naturalHeight,
				};

				//console.log(cover); // 输出 cover 对象以验证  
				this.updateMarkHeight();

				const updateBackground = () => {
					const mark = document.getElementById('mark');
					const _w = mark.offsetWidth;
					const _h = mark.offsetHeight;

					const e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;
					let x, y, i;

					if (_w >= _h) {
						i = _w / e * 50;
						y = i;
						x = i * _w / _h;
					} else {
						i = _h / e * 50;
						x = i;
						y = i * _h / _w;
					}

					document.getElementById('bg-layer').style.cssText = `  
			          width: ${_w + x}px;  
			          height: ${_h + y}px;  
			          margin-left: ${-0.5 * x}px;  
			          margin-top: ${-0.5 * y}px;  
			        `;

					cover.t.style.width = `${_w + x}px`;
					cover.t.style.height = `${_h + y}px`;

					if (!cover.w) {
						cover.w = cover.t.clientWidth;
						cover.h = cover.t.clientHeight;
					}

					const id = cover.t;
					const w = cover.w;
					const h = cover.h;
					const _height = id.parentNode.clientHeight;
					const _width = id.parentNode.clientWidth;
					const ratio = h / w;

					if (_height / _width > ratio) {
						id.style.height = `${_height}px`;
						id.style.width = `${_height / ratio}px`;
					} else {
						id.style.width = `${_width}px`;
						id.style.height = `${_width * ratio}px`;
					}

					id.style.left = `${(_width - parseInt(id.style.width)) / 2}px`;
					id.style.top = `${(_height - parseInt(id.style.height)) / 2}px`;
				};

				updateBackground();
				const scene = document.getElementById('mark');
				const parallaxInstance = new Parallax(scene);
			},

			updateMarkHeight() {
				const mark = document.getElementById('mark');
				if (mark) {
					mark.style.height = `${window.innerHeight}px`;
				}
			},

			screenAdapter() {
				const sw = Math.max(window.innerHeight, window.innerWidth);
				const sh = Math.min(window.innerHeight, window.innerWidth);
				const tsw = 1366,
					tsh = 653,
					r = 7 / 4;
				let _w = sw / tsw;
				let _h = sh / tsh;

				if (sw / sh < r) {
					document.querySelectorAll('.char.perspective.box').forEach(box => {
						box.style.width = `${window.innerWidth * 0.6}px`;
						box.style.transform = `translateY(calc((80vh - 460px * ${_w}) * 0.5))`;
					});
					document.querySelectorAll(
							'#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter')
						.forEach(adapter => {
							adapter.style.transform = `scale(${_w})`;
						});

					document.querySelector('.right.menu.box').style.marginRight = `${-80 * _w}px`;
					document.querySelector('.left.menu.box').style.transform =
						`perspective(30em) rotateY(10deg) scale(0.9) translateY(calc((-80vh + 460px * ${_w}) * 0.5))`;
					document.querySelector('.right.menu.box').style.transform =
						`perspective(30em) rotateY(-10deg) scale(0.9) translateY(calc((-80vh + 460px * ${_w}) * 0.5))`;
				} else {
					document.querySelectorAll('.char.perspective.box').forEach(box => {
						box.style.width = `${window.innerHeight / 0.8}px`;
					});
					document.querySelectorAll(
							'#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter')
						.forEach(adapter => {
							adapter.style.transform = `scale(${_h})`;
						});
					document.querySelector('.right.menu.box').style.marginRight = `${-80 * _h}px`;
				}
			},

			screenRotateAlert() {
				if (typeof GYST !== 'undefined') {
					GYST.landScape({
						mode: 'landscape'
					});
				}
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

			checkTime(i) {
				return (i < 10) ? "0" + i : i;
			},

			updateDimensions() {
				this.updateMarkHeight(); // 更新 `mark` 的高度  
				this.screenAdapter(); // 调整屏幕适配
			},

		},
	};

	// Dust class definition  
	class Dust {
		constructor() {
			this.x = 50;
			this.y = 50;
			this.vx = Math.random() * 5 + 5;
			this.vy = Math.random() * 5;
			this.color = '#fff';
			this.shadowBlur = Math.random() * 3;
			this.shadowX = (Math.random() * 2) - 1;
			this.shadowY = (Math.random() * 2) - 1;
			this.radiusX = Math.random() * 3;
			this.radiusY = Math.random() * 3;
			this.rotation = Math.PI * Math.floor(Math.random() * 2);
		}
	}
</script>

<style scoped>
	/*!
	 * Author: Mashiro
	 * Site: https://2heng.xin
	 * License: MIT
	 */
	@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC:500,700,900|Noto+Serif+SC:500,700,900&display=swap&subset=chinese-simplified');

	/* normalize */

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	img,
	main,
	menu,
	nav,
	section,
	summary {
		display: block
	}

	html,
	body {
		width: 100%;
		height: 100%;
		overflow: hidden
	}

	a {
		color: #0084FF;
		text-decoration: none;
		cursor: pointer
	}

	a:hover {
		text-decoration: underline;
	}

	/* header */
	header {
		position: fixed;
		height: 100%;
		z-index: 1;
		pointer-events: none
	}


	.social-link {
		display: inline-block;
		height: 3vh;
		width: 3vh;
	}

	/* view box layout */
	.view-box {
		margin: 0;
		width: 100vw;
		height: 100vh;
		user-select: none;
		overflow: hidden;
	}

	.mark {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.cover {
		position: absolute;
		transform: translate(-50%, -50%);
		transform: scale(1.5);
		object-fit: cover;
	}

	#char-arts-layer {}

	#level-box-container-layer {
		margin-top: 30vh;
		height: 100vh;
		display: flex;
		justify-content: flex-start;
		/* 左对齐 */
		align-items: center;
		/* 垂直居中 */
	}

	.level-box {

		height: 196px;
		width: 400px;
		transform: scale(1);
		/*  adapter */
		transform-origin: center left;

	}

	.level-logo {
		position: absolute;
		margin-left: -5vw;
		height: 196px;
		width: 230px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 550px 828px;
		filter: brightness(30%);
	}

	.user-level {
		position: absolute;
		margin-top: 89px;
		height: 34px;
		width: 300px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -20px -238px;
		background-size: auto 3650%;

	}

	.chart-bg {
		position: absolute;
		margin: -79px auto auto 54px;
		height: 115px;
		width: 115px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 0px -295px;
		background-size: auto 1103%;
	}

	.chart-pr {
		position: absolute;
		margin: -79px auto auto 54px;
		height: 115px;
		width: 115px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 488px -398px;
		background-size: auto 1103%;
	}

	.level-num {
		width: 80px;
		height: 50px;

		font-family: '黑体', sans-serif;
		color: #fff;
		font-size: 50px;
		font-weight: 500;
		position: absolute;
		margin: -60px 73px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.user-info .name-container {
		font-family: '黑体', sans-serif;
		color: #fff;
		font-size: 33px;
		font-weight: 200;
		position: absolute;
		font-weight: 500;
		margin: 134px 10px;
		width: 200px;
		height: 50px;

		display: flex;
		justify-content: center;


	}

	.name-container .name {}

	.user-info .id {
		font-family: '黑体', sans-serif;
		color: #fff;
		font-size: 15px;
		font-weight: 1;
		position: absolute;
		margin: 171px 70px;

		width: 100%;
		font-weight: 200;

	}



	.layer {
		position: relative;
	}



	.layer {
		pointer-events: none
	}

	.menu.box {
		pointer-events: initial
	}

	/* left perspective */
	/* prefix */
	#left-menu-layer {
		bottom: 0 !important;
		top: auto !important;
		margin-left: 1vw;
	}

	.left.menu.box {
		width: 50vw;
		height: 98vh;
		margin: 0 auto auto 2vh;
		transform: perspective(30em) rotateY(10deg) scale(0.9);
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-end;
	}

	.left.menu.box .container {
		height: 200px;
		width: 420px;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		transform: scale(1);
		/* adapter */
		transform-origin: bottom left;
	}

	.left.menu.box .container .top {
		height: 40%;
		width: 100%
	}

	.left.menu.box .container .bottom {
		height: 60%;
		width: 100%;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	.left.menu.box .container .bottom .left {
		padding: 5px;
		width: 60%;
		height: 100%
	}

	.left.menu.box .container .bottom .right {
		width: 40%;
		height: 100%
	}

	.left.menu.box .container .bottom .right .pos-1 {
		height: 50%;
		width: 100%;
	}

	.left.menu.box .container .bottom .right .pos-2 {
		height: 50%;
		width: 100%;
	}

	.left.menu.box .container .top .dialog {
		background-color: rgba(0, 0, 0, .7);
		padding: 10px 5px;
		margin: 0 5px;
		width: calc(100% - 20px);
		height: 57px;
		font-family: 'Noto Sans SC', sans-serif;
		color: #fff;
		font-size: 13px;
		font-weight: 500;
		line-height: 57px;
	}

	.left.menu.box .container .top .dialog span {
		display: inline-block;
		vertical-align: middle;
		line-height: initial;
	}

	.left.menu.box .container .top .dialog::before {
		content: "VOICE";
		background-color: rgba(255, 255, 255, .7);
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 10px;
		font-weight: 500;
		color: #000;
		position: absolute;
		margin: -18px -10px;
		width: 100px;
		padding: 0 5px;
		line-height: initial;
	}

	.left.menu.box .container .bottom .left::before {
		content: "";
		height: 24px;
		width: 140px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -147px 1913px;
		background-size: auto 6000%;
		position: absolute;
		margin: -5px;
	}

	.left.menu.box .container .bottom .left .activity-img {
		height: 115px;
		width: 251px;
		background: url(../assets/img/UI_HOME_ACTIVITY_BANNER_ZONE.png);
		transition: background-position 0.5s ease-in-out;
		background-size: 238%;
	}

	.left.menu.box .container .bottom .right .pos-1 .friends {
		background-color: #424242;
		opacity: .9;
		margin: 5px 5px 2.5px 5px;
		width: calc(100% - 10px);
		height: calc(100% - 7.5px);
	}


	.left.menu.box .container .bottom .right .pos-1 .friends .icon {
		height: 35px;
		width: 35px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -69px -26px;
		background-size: auto 1800%;
		position: absolute;
		margin: 8px;
	}

	.left.menu.box .container .bottom .right .pos-1 .friends .text {
		font-family: 'Noto Serif SC', serif;
		color: #fff;
		font-size: 25px;
		font-weight: 900;
		text-align: right;
		padding: 13px;
	}

	.left.menu.box .container .bottom .right .pos-2 .information {
		background-color: #e9e9e9;
		opacity: .9;
		margin: 2.5px 5px 5px 5px;
		width: calc(100% - 10px);
		height: calc(100% - 7.5px);
	}

	.left.menu.box .container .bottom .right .pos-2 .information .icon {
		height: 35px;
		width: 35px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -195px -897px;
		background-size: auto 1750%;
		position: absolute;
		margin: 8px;
		filter: invert(30%);
	}

	.left.menu.box .container .bottom .right .pos-2 .information .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 25px;
		font-weight: 900;
		text-align: right;
		padding: 13px;
	}

	/* right perspective */
	/* prefix */
	#right-menu-layer {
		right: 0.3vw !important;
		left: auto !important;
		bottom: 0 !important;
		top: auto !important
	}

	.right.menu.box {
		width: 783px;
		height: 640px;
		/*
		margin: 0 auto auto calc(51vw - 40px);
		*/
		float: right;
		margin: 0 -80px auto auto;
		transform: perspective(30em) rotateY(-10deg) scale(0.9);
	}

	.right.menu.box .popup {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.5);
		height: 100%;
		width: 100%;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		display: none
	}


	.right.menu.box .container {
		height: 640px;
		width: 783px;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		transform: scale(1);
		/* adapter */
		transform-origin: bottom right;
	}

	.right.menu.box .container .pos-1 {
		height: 80px;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
	}

	.right.menu.box .container .pos-1 .top {
		height: 35%;
		width: auto;
		margin: 0 0 0 80px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.right.menu.box .container .pos-1 .top .time {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 18px;
		white-space: nowrap;
		margin: 0 10px
	}

	.right.menu.box .container .pos-1 .top .battery {
		margin-left: 10px;
		height: 20px;
		width: 34px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 0px -34px;
		background-size: auto 4500%;
	}

	.right.menu.box .container .pos-1 .top .line-left {
		width: 60px;
		height: 3px;
		margin-top: 8px;
		background-color: #fff;
	}

	.right.menu.box .container .pos-1 .top .line-right {
		width: 500px;
		height: 3px;
		margin-top: 8px;
		background-color: #fff;
	}

	.right.menu.box .container .pos-1 .bottom {
		height: 65%;
	}

	.right.menu.box .container .pos-1 .bottom .bg {
		background-color: rgba(0, 0, 0, .2);
		margin-top: 5px;
		height: 40px;
		width: 100%
	}

	.right.menu.box .container .pos-1 .bottom .status {
		position: absolute;
		margin: -45px 0 0 60px;
		height: 50px;
		width: 100%;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		gap: 20px;

	}

	.right.menu.box .container .pos-1 .bottom .status .item {
		height: 100%;
		margin: 0 10px 0 0;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;

	}

	.right.menu.box .container .pos-1 .bottom .status .item .icon {}

	.right.menu.box .container .pos-1 .bottom .status .item.money .icon {
		width: 80px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -1225px -355px;
		background-size: auto 6600%;
	}

	.right.menu.box .container .pos-1 .bottom .status .item.jasper .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -446px -1103px;
		background-size: auto 5300%;
	}

	.right.menu.box .container .pos-1 .bottom .status .item.stone .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -1040px -464px;
		background-size: auto 5200%;
	}

	.right.menu.box .container .pos-1 .bottom .status .item .amount {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 33px;
		white-space: nowrap;
		margin: 0 10px
	}

	.right.menu.box .container .pos-1 .bottom .status .item .more {
		width: 36px;
		height: 36px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -732px -595px;
		background-size: auto 5800%;
	}

	.right.menu.box .container .pos-2 {
		height: 200px;
	}

	.right.menu.box .container .pos-2 .intellect {
		background-color: #fdfdfb;
		opacity: .9;
		height: calc(100% - 20px);
		width: 800px;
		margin: 8px 0 0 80px;
	}

	.right.menu.box .container .pos-2 .intellect::after {
		content: "";
		background-color: #ff5e19;
		opacity: .9;
		height: 6px;
		width: 310px;
		margin: -3px 0 0 230px;
		position: absolute;
	}

	.right.menu.box .container .pos-2 .intellect .icon {
		margin-top: 15.5px;
		margin-left: 360px;
		width: 140px;
		height: 140px;
		position: absolute;
		background: url(../assets/img/UI_HOME.png);
		background-position: -588px -751px;
		background-size: auto 1600%;
		filter: invert(20%);
		opacity: .5
	}

	.right.menu.box .container .pos-2 .intellect .content {
		height: 100%;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: flex-start
	}

	.right.menu.box .container .pos-2 .intellect .content .figure {
		width: 195px;
		height: 130px;
		margin: 20.5px 0 0 10px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 0px -531px;
		background-size: auto 1257%;
	}

	.right.menu.box .container .pos-2 .intellect .content .figure .value {
		color: #333333;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 70px;
		font-weight: 700;
		text-align: right;
		margin: 0 20px;
		text-shadow: #8b8b8b 5px 5px 0px;
	}

	.right.menu.box .container .pos-2 .intellect .content .figure .total {
		color: #fff;
		font-family: 'Noto Sans SC', sans-serif;
		font-size: 25px;
		text-align: right;
		margin: 15px 20px;
	}

	.right.menu.box .container .pos-2 .intellect .content .battle {
		height: 100%;
		width: 100px;
		height: 130px;
		margin: 20.5px 0 0 15px;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: flex-start
	}

	.right.menu.box .container .pos-2 .intellect .content .battle .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 60px;
		font-weight: 900;
		white-space: nowrap
	}

	.right.menu.box .container .pos-2 .intellect .content .battle .current {
		font-family: 'Noto Sans SC', sans-serif;
		color: #fff;
		background-color: #3c3c3c;
		border-radius: 5px;
		font-size: 20px;
		font-weight: 500;
		white-space: nowrap;
		padding: 3px;
		margin: 2.5px 0;
	}

	.right.menu.box .container .pos-2 .intellect .content .battle .level {
		font-family: 'Noto Sans SC', serif;
		color: #3c3c3c;
		font-size: 20px;
		font-weight: 500;
		white-space: nowrap;
	}

	.right.menu.box .container .pos-3 {
		height: 130px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.right.menu.box .container .pos-3 .team {
		background-color: #fff;
		opacity: .9;
		height: calc(100% - 20px);
		width: 280px;
		margin: 8px 0 0 40px;
	}

	.right.menu.box .container .pos-3 .team .icon {
		width: 80px;
		height: 80px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 354px -330px;
		background-size: auto 1500%;
		position: absolute;
		margin: 13px 0 0 166px;
		filter: invert(20%);
		opacity: .5
	}

	.right.menu.box .container .pos-3 .team .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 40px;
		font-weight: 900;
		white-space: nowrap;
		margin: 15px;
	}

	.right.menu.box .container .pos-3 .member {
		background-color: #ebeceb;
		opacity: .9;
		height: calc(100% - 20px);
		width: 280px;
		margin: 8px 0 0 16px;
	}

	.right.menu.box .container .pos-3 .member .icon {
		width: 80px;
		height: 80px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 296px -477px;
		background-size: auto 1500%;
		position: absolute;
		margin: 13px 0 0 166px;
		filter: invert(20%);
		opacity: .5
	}

	.right.menu.box .container .pos-3 .member .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 40px;
		font-weight: 900;
		white-space: nowrap;
		margin: 15px;
	}

	.right.menu.box .container .pos-3 .member .desc {
		font-family: 'Noto Sans SC', sans-serif;
		color: #989898;
		font-size: 20px;
		font-weight: 500;
		white-space: nowrap;
		margin: -11px 15px;
	}

	.right.menu.box .container .pos-3 .blank {
		background-color: #161919;
		opacity: .9;
		height: calc(100% - 20px);
		width: 200px;
		margin: 8px 0 0 16px
	}

	.right.menu.box .container .pos-4 {
		height: 130px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;

	}

	.right.menu.box .container .pos-4 .shop {
		background-color: #05a7dc;
		opacity: .9;
		height: calc(100% - 20px);
		width: 240px;
		margin: 8px 0 0 120px;
		border-right: 1px solid transparent;
		border-image: -webkit-linear-gradient(#05a7dc, #454545, #05a7dc) 1;
		border-image: -moz-linear-gradient(#05a7dc, #454545, #05a7dc) 1;
		border-image: linear-gradient(#05a7dc, #454545, #05a7dc) 1;
	}

	.right.menu.box .container .pos-4 .shop .icon {
		width: 93px;
		height: 80px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 284px -360px;
		background-size: auto 2000%;
		position: absolute;
		margin: 13px 0 0 136px;
		opacity: .5;
	}

	.right.menu.box .container .pos-4 .shop .text {
		font-family: 'Noto Serif SC', serif;
		color: #fff;
		font-size: 40px;
		font-weight: 900;
		white-space: nowrap;
		margin: 40px 0 0 60px;
	}

	.right.menu.box .container .pos-4 .gamble {
		background-color: #05a7dc;
		opacity: .9;
		height: calc(100% - 20px);
		width: 340px;
		margin: 8px 0;
		display: -webkit-flex;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
	}

	.right.menu.box .container .pos-4 .gamble .top {
		background-color: #454545;
		width: 330px;
		height: 30px;
		margin: 5px;
	}

	.right.menu.box .container .pos-4 .gamble .top .icon {
		width: 20px;
		height: 20px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -84px -138px;
		background-size: auto 2000%;
		position: absolute;
		margin: 5px 0 0 5px;
		opacity: .5
	}

	.right.menu.box .container .pos-4 .gamble .top .text {
		font-family: 'Noto Sans SC', sans-serif;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		white-space: nowrap;
		margin: 2px 0 0 30px;
	}

	.right.menu.box .container .pos-4 .gamble .bottom {
		width: 330px;
		height: 60px;
		margin: 0 0 5px 5px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	.right.menu.box .container .pos-4 .gamble .bottom .left {
		width: 50%;
		height: 100%;
		border-right: 1px solid transparent;
		border-image: -webkit-linear-gradient(#05a7dc, #454545, #05a7dc) 1;
		border-image: -moz-linear-gradient(#05a7dc, #454545, #05a7dc) 1;
		border-image: linear-gradient(#05a7dc, #454545, #05a7dc) 1;
	}

	.right.menu.box .container .pos-4 .gamble .bottom .left .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 276px -172px;
		background-size: auto 1600%;
		position: absolute;
		margin: 5px 0 0 5px;
		opacity: .5;
	}

	.right.menu.box .container .pos-4 .gamble .bottom .left .text {
		font-family: 'Noto Serif SC', serif;
		color: #fff;
		font-size: 30px;
		font-weight: 900;
		white-space: nowrap;
		margin: 10px 0 0 20px;
	}

	.right.menu.box .container .pos-4 .gamble .bottom .right {
		width: 50%;
		height: 100%
	}

	.right.menu.box .container .pos-4 .gamble .bottom .right .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 188px -228px;
		background-size: auto 1650%;
		position: absolute;
		margin: 5px 0 0 5px;
		opacity: .5;
	}

	.right.menu.box .container .pos-4 .gamble .bottom .right .text {
		font-family: 'Noto Serif SC', serif;
		color: #fff;
		font-size: 30px;
		font-weight: 900;
		white-space: nowrap;
		margin: 10px 0 0 20px;
	}

	.right.menu.box .container .pos-5 {
		height: 130px;
		display: -webkit-flex;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.right.menu.box .container .pos-5 .task {
		background-color: #fff;
		opacity: .9;
		height: calc(100% - 20px);
		width: 240px;
		margin: 8px 0 0 80px;
	}

	.right.menu.box .container .pos-5 .task::before {
		content: "";
		background-color: #ff5e19;
		opacity: .9;
		height: 6px;
		width: 180px;
		margin: -3px 0 0 30px;
		position: absolute;
	}

	.right.menu.box .container .pos-5 .task .icon {
		width: 72px;
		height: 80px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -1px -90px;
		background-size: auto 1800%;
		position: absolute;
		margin: 13px 0 0 136px;
		opacity: .5;
		filter: invert(30%);
	}

	.right.menu.box .container .pos-5 .task .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 40px;
		font-weight: 900;
		white-space: nowrap;
		margin: 15px;
	}

	.right.menu.box .container .pos-5 .infrastructure {
		background-color: #ebeceb;
		opacity: .9;
		height: calc(100% - 20px);
		width: 240px;
		margin: 8px 0 0 16px;
	}

	.right.menu.box .container .pos-5 .infrastructure .icon {
		width: 80px;
		height: 80px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -69px -61px;
		background-size: auto 1700%;
		position: absolute;
		margin: 13px 0 0 136px;
		opacity: .5;
		filter: invert(30%);
	}

	.right.menu.box .container .pos-5 .infrastructure .text {
		font-family: 'Noto Serif SC', serif;
		color: #323232;
		font-size: 40px;
		font-weight: 900;
		white-space: nowrap;
		margin: 15px;
	}

	.right.menu.box .container .pos-5 .infrastructure .beta {
		width: 40px;
		height: 9px;
		background: url(../assets/img/UI_HOME.png);
		background-position: -20px -34px;
		background-size: 1700% auto;
		position: absolute;
		margin: -16px 0 0 15px;
	}

	.right.menu.box .container .pos-5 .warehouse {
		background-color: #424242;
		opacity: .9;
		height: calc(100% - 20px);
		width: 90px;
		margin: 8px 0
	}

	.right.menu.box .container .pos-5 .warehouse .icon {
		width: 50px;
		height: 50px;
		background: url(../assets/img/UI_HOME.png);
		background-position: 86px -472px;
		background-size: auto 1700%;
		position: absolute;
		margin: 42px 0 0 22px;
		opacity: .5;
	}

	.right.menu.box .container .pos-5 .warehouse .text {
		font-family: 'Noto Serif SC', serif;
		color: #fff;
		font-size: 30px;
		font-weight: 900;
		white-space: nowrap;
		margin: 15px;
	}

	/* character perspective box */
	#char-arts-layer {
		left: 70px !important;
		top: -70px !important;
	}

	.char.perspective.box {
		width: 80%;
	}

	.char.perspective.box img {
		width: 100%
	}

	#canvas-dust {
		pointer-events: none
	}

	.tooltiphechengyu {
		position: absolute;
		background: #333;
		color: white;
		padding: 5px 10px;
		border-radius: 4px;
		font-size: 12px;
		top: -25px;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		z-index: 101;
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
		font-size: 20px;
	}

	.tooltipyuanshi {
		position: absolute;
		background: #333;
		color: white;
		padding: 5px 10px;
		border-radius: 4px;
		font-size: 12px;
		top: -25px;
		left: 80%;
		transform: translateX(-50%);
		white-space: nowrap;
		z-index: 101;
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
		font-size: 20px;
	}

	.options-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		user-select: none;
		justify-content: center;
		align-items: center;
	}


	.options-container {
		background: white;
		padding: 20px;
		background: rgba(0, 0, 0, 0.6);
		border: 1px solid white;
		width: 70%;
		height: 70%;
		user-select: none;
		z-index: 101;

	}

	.character-options {
		width: 100%;
		height: 95%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
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
		border: 2px solid deepskyblue;
		/* 鼠标悬停时显示蓝色边框 */
	}

	button {
		background-color: rgba(255, 255, 255, 0.8);
		color: dark;
		font-size: 18px;
		border: 1px solid transparent;
	}


	.active-button,
	button:hover {
		background-color: white;
		color: deepskyblue;

		border: 1px solid deepskyblue;
		transition: all 0.3s;
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

	.position-control-layer {
		user-select: none;
		width: 230px;
		height: 80px;
		position: fixed;
		top: 70%;
		left: 52%;
		transform: translate(-50%, -50%);
		background: rgba(0, 0, 0, 0.6);
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
		font-size: 20px;
		padding: 20px;
		border: 1px solid #ffffff;
		z-index: 100;
	}

	.position-control-layer .control {
		display: flex;
		flex-wrap: wrap;
		position: absolute;
		justify-content: center;
		align-items: center;
	}

	.confirm-modal {
		z-index: 100;
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

	.text {
		transition: transform 0.3s ease-in-out;
		/* 平滑过渡效果 */
	}

	#shadow {
		filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	}

	.text:hover {
		animation: scaleUp 0.3s ease-in-out forwards;
		/* 应用动画 */

	}

	.red {
		color: #CC0033;
	}

	@keyframes scaleUp {
		0% {
			transform: scale(1);
			/* 初始大小 */

		}

		100% {
			transform: scale(1.1);
			/* 放大到 1.08 倍 */
			color: #FF6666;
			filter: drop-shadow(2.7px 2.7px 0.9px rgba(0, 0, 0, 0.9));
		}
	}
</style>