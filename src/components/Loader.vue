<template>  
  <div class="loader-layer" id="loader-layer">  
    <div class="tips">Tips: 换个电脑可以更快启动</div>  
    <div class="loader" id="loader">  
      <div class="bar">  
        <div class="circle"></div>  
        <p>Loading</p>  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: "Loader",  
};  
</script>  

<style scoped>
		/* loader */
		.loader-layer {
			background: #016d8d url(../assets/img/avg_2_1.png) no-repeat center center fixed;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
		}

		.loader-layer .tips {
			font-family: 'Noto Sans SC', sans-serif;
			color: #fff;
			font-size: 2vh;
			font-weight: 500;
			pointer-events: auto;
			margin: 10px;
			position: fixed;
		}

		.loader {
			width: calc(100% + 100px);
			overflow-x: hidden;
			overflow-y: hidden;
			position: absolute;
			left: -50px;
		}

		.loader .bar {
			position: relative;
			height: 2px;
			width: 500px;
			margin: 0 auto;
			background: #fff;
			margin-top: 150px;
		}

		.loader .circle {
			position: absolute;
			top: -30px;
			margin-left: -30px;
			height: 60px;
			width: 60px;
			left: 0;
			background: #fff;
			border-radius: 30%;
			-webkit-animation: move 5s infinite;
		}

		.loader p {
			position: absolute;
			top: -35px;
			right: -85px;
			text-transform: uppercase;
			color: #016d8d;
			font-family: helvetica, sans-serif;
			font-weight: bold;
		}

		@-webkit-keyframes move {
			0% {
				left: 0;
			}

			50% {
				left: 100%;
				-webkit-transform: rotate(450deg);
				width: 150px;
				height: 150px;
			}

			75% {
				left: 100%;
				-webkit-transform: rotate(450deg);
				width: 150px;
				height: 150px;
			}

			100% {
				right: 100%;
			}
			
		}
	 				

	</style>