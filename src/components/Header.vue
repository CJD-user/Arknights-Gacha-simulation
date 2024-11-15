<template>
	<div class="menu">
		<div id="shadow">
			<img class="shadow-mirror" src="../assets/img/shezhi.png" @click="showSettingsModal = true" />
			<img class="shadow-mirror" src="../assets/img/gonggao.png" @click="showGongGao = true"/>
			<img class="shadow-mirror" src="../assets/img/youjian.png" @click="showGongGao = true"/>
			<img class="shadow-mirror" src="../assets/img/qiandao.png" @click="showGongGao = true"/>
			<div class="reflection-container">
				<img class="reflection" src="../assets/img/shezhi.png" />
				<img class="reflection" src="../assets/img/gonggao.png" />
				<img class="reflection" src="../assets/img/youjian.png" />
				<img class="reflection" src="../assets/img/qiandao.png" />
			</div>
		</div>

		<Personal :isVisible="showSettingsModal" @close="showSettingsModal = false" />
		<GongGao v-if="showGongGao" @close="showGongGao = false" />
	</div>
	
	<!-- <div v-if="showRestData" class="confirm-modal">
		<div class="modal-overlay" @click="this.isSingleSearch=false" style="z-index: 9;"></div>
		<div class="confirm-container" style="z-index: 10;">
			<div class="confirm-backimg" style="z-index: 11;">
				<img src="../assets/img/Logo.png" />
			</div>
			<div class="confirm-cancel-text" style="z-index: 12;">
				<div class="confirm-text">您确定要清除<span class="red">所有</span>缓存吗?此操作不可逆!!!</div>
				<div class="confirm-cancel">
					<div @click="this.showRestData=false" class=" cancel">取消</div>
					<div @click="ResetData()" class=" confirm">确认</div>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
	import Personal from './Personal.vue';
	import GongGao from './GongGao.vue'; 
	export default {
		name: "Header",
		
		components: {
				Personal,
				GongGao
			},
			data() {
				return {
					showSettingsModal: false,
					showRestData : false,
					showGongGao: false
				};
			},
			methods:{
				ResetData() {
					alert("┭┮﹏┭┮ 重置成功 ┭┮﹏┭┮");
					this.$store.dispatch('clearLocalStorage');
					this.$store.dispatch('user/resetUserInfo');
					this.showRestData = false;
					this.$router.push('/');
				},
			},
	};	
</script>

<style scoped>
	.menu{
		user-select: none;
		
	}
	/* header styles here */
	.shadow-mirror {
		width: 3vw;
		height: auto;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
		display: inline-block;
	}

	#shadow {
		filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	}

	.reflection {
		width: 3vw;
		height: auto;
		transform: scaleY(-1);
		/* 垂直翻转 */
		display: inline-block;
		opacity: 0.5;
		/* 调整透明度 */
		filter: blur(1px);
		/* 自然效果 */
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
</style>