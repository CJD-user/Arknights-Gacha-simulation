<template>
	<div class="back">
		<div class="shadow-mirror" id="back" @click="goBack()">
			<img class="shadow-mirror" src="../assets/img/back.png" style="width: 4vw;"/>
		</div>
		<div id="detail-container" class="shadow-mirror" @mouseenter="showTooltip = true" 
		@mouseleave="showTooltip = false" @click="showModal = true">
			<img class="detail" >
			<span v-if="showTooltip" class="tooltip text" id="shadow">概率详情</span>  
		</div>
		<div v-if="showModal" class="modal" @click="this.showModal=false">
			
		<div class="modal-content" >  
		<span class="close" @click="closeModal">&times;</span>  
		<h1 class="text" style="font-size: 22px;">概率详情</h1>  
		<p  class="text">在本次寻访中,<span class="blue">三星</span>干员出率为<span class="blue">40%</span>,
		<span class="purple">四星</span>干员出率为<span class="purple">50%</span>,
		<span class="gold">五星</span>干员出率为<span class="gold">8%</span>,
		<span class="red">六星</span>干员出率为<span class="red">2%</span>.
		如果连续<span class="gold">50次没有</span>获得六星干员，则下一次六星干员的出率将从原来2%提升至4%.
		如果该次依然没有寻访到六星干员,则下一次寻访获得六星干员的概率由4%提升至6%.
		以此类推,<span class="red">每次提升2%</span>获得六星干员的概率,直至达到<span class="green">100%</span>时必定获得六星干员.
		当博士寻访到六星干员后,又50%的概率是选择的六星干员,有50%的概率不是选择的六星干员.
		之后<span class="sky">寻访到六星</span>干员的概率将重新变为<span class="red">2%</span>,重复上述概率计算过程.</p>  
		<!-- 可以根据需要添加更多详细内容 -->  
		</div>  
		</div>  
	</div>
	
	
	
</template>

<script>
	export default{
		data() {
			return{
				showTooltip: false, 
				showModal: false,
			}
		},
		methods: {
			goBack(){
				this.$router.push('/');
				
			},
			closeModal() {  
				this.showModal = false; 
				}  ,
		}
	}
</script>

<style scoped>
	.back {
		user-select: none;
	}
	#back {
		position: absolute;
		margin-top:1vh;
		margin-left: 1vw;
		width: 20vw;
		height: 7.5vh;
		background-color: #303030;
		display: flex;
		justify-content: flex-start;
	}
	.shadow-mirror {
	    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));    		          
	    display: inline-block;
	}  
	#detail-container {
		background-color: #444444;
		margin-top:1vh;
		margin-left: 22vw;
		width: 7.5vh;
		height: 7.5vh;
		
	}
	.detail {
		width: 7.5vh;
		height: 7.5vh;
		background: url(../assets/img/详情.png);
		

		background-size: auto 100%;
		
	}
	.tooltip {  
		position: absolute;  
		background: #333; 
		color: white; 
		padding:5px 10px; 
		border-radius:4px;   
		font-size:12px;  
		top: 70px; 
		left:50%; 
		transform: translateX(-50%);
	white-space: nowrap;  
		z-index:10; 
	}  
	.modal {  
		display: flex;  
		position: fixed;  
		z-index:1000;  
		left:0;  
		top:0;  
		width:100%;  
		height:100%;  
		background-color: rgba(0,0,0,0.7); /* 半透明背景 */  
	justify-content: center;  
		align-items: center;  
		z-index: 10;
	}  
	
	.modal-content {  
		text-align: center;
		color: #ffffff;
		background-color: #444444;  
		padding:20px;  
		 
		width:80%;  
		max-width:500px; /* 最大宽度 */  
		position: relative;  
		z-index: 11;
	}  
	
	.close {  
		position: absolute;  
		top:10px;  
		right:15px;  
		color: #ffffff;  
		font-size:28px;  
		font-weight: bold;  
		cursor: pointer;  
	}  
	.close:hover,  
	.close:focus {  
		color: black;  
		text-decoration: none;  
		cursor: pointer;  
	}  
	.text {
		font-family: 'Noto Serif SC', serif;
		    /* font-family: 'Valorant', sans-serif; */
		 color: white;
		 font-size: 15px;
		 /* font-weight:500px ; */
	}
	.gold { color: #FFCC00; }
	 .red { color: #CC0033; }  
	 .blue { color: #0099FF; }  
	 .green { color: #66CC66; }  
	 .purple { color: #CC00FF; }  
	 .sky { color: #33FFFF; }
	 #shadow {
	 	filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	 }
</style>