 <template>
 	<div class="modal">
 		<div class="modal-overlay" @click="$emit('close')"></div>
 		<div class="modal-content">

 			<div slot="header">
 				<h3>寻访记录</h3>

 			</div>
 			<div slot="body" class="container">

 				<div class="results">
 					<div v-if="paginatedResults.length ===0">没有结果</div>
 					<div v-else>
 						<div class="imgs-container" v-for="(item, index) in paginatedResults" :key="index">
 							<div class="img-container" :class="item.rarity =='六星'? 'bkurlsix' : 
							item.rarity=='五星' ? 'bkurlfive' : item.rarity=='四星' ? 'bkurlfour' : ' ' ">
 								<div style="height: 20%;width: 20%;">
 									<img :src="item.thumbnail"
 										style="width: 60px;height: 60px; transform-origin: 50% 50%; transform: scale(1);border: 2px solid white;" />
 								</div>
 								<div style="height: 20%;width: 20%;font-family: 'Noto Serif SC', 
								serif;color: white;font-size: 1.cm;font-weight: 700;">
 									-{{ item.name }}-
 								</div>
 								<div style="height: 20%;width: 60%;">
 									<img :src="item.star" style="transform-origin: 0% 50%; transform: scale(0.5);" />
 								</div>


 							</div>
 						</div>
 					</div>
 				</div>
 				<div class="pagination">
 					<button @click="prevPage" :disabled="currentPage ===1" class="shadow">上一页</button>
 					<span>第 {{ currentPage }}/{{ totalPages }} 页</span>
 					<button @click="nextPage" :disabled="currentPage >= totalPages" class="shadow">下一页</button>
 				</div>
 			</div>

 			<slot name="header"></slot>
 			<slot name="body"></slot>
 		</div>
 	</div>
 </template>



 <script>
 	import {
 		mapState,
 		mapMutations
 	} from 'vuex';
 	export default {
 		name: 'Modal',
 		data() {
 			return {
 				currentPage: 1,
 				pageSize: 10,
 			}
 		},
 		computed: {
 			...mapState(['drawCount', 'results', 'totalResults', 'SearchCharacters']),
 			paginatedResults() {
 				const start = (this.currentPage - 1) * this.pageSize;
 				return this.totalResults.slice(start, start + this.pageSize);
 			},
 			totalPages() {
 				return Math.ceil(this.totalResults.length / this.pageSize);
 			},
 		},
		mounted() {
			
		},
 		methods: {
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
				//console.log(this.totalResults);
 			},
 			prevPage() {
 				if (this.currentPage > 1) {
 					this.currentPage -= 1;
 				}
 			},
 		},

 	};
 </script>

 <style scoped>
	 #shadow {
	 	filter: drop-shadow(2.7px 2.7px 0.6px rgba(0, 0, 0, 0.9));
	 }
 	.modal {
 		position: fixed;
 		top: 50%;
 		left: 50%;
 		transform: translate(-50%, -50%);
 		width: 100%;
 		height: 100%;


 		display: flex;
 		align-items: center;
 		justify-content: center;
 		text-align: center;
 		user-select: none;
 		font-weight: bolder;
 		color: #fff;

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
 		background: rgba(0, 0, 0, 0.5);
 		z-index: 100;
 	}

 	.container {
 		width: 500px;
 		height: 500px;
 		display: flex;
 		flex-direction: row;
 		flex-wrap: wrap;
 		justify-content: flex-start;
 		align-items: stretch;
 		align-content: stretch;
 		gap: 5px;
 		position: absolute;
 	}

 	.modal-content {
 		border: 1px solid white;
 		background: rgba(0, 0, 0, 0.7);
 		padding: 20px;
 		width: 500px;
 		height: 500px;

 		display: flex;
 		flex-direction: column;
 		z-index: 101;
 	}

 	.close {
 		position: absolute;
 		top: 10px;
 		right: 10px;
 		cursor: pointer;
 	}

 	.results {
 		margin-top: 50px;
 		width: 100%;
 		height: 81%;
 		overflow-y: auto;
 		overflow-x: hidden;


 	}

 	.imgs-container {
 		width: 100%;
 		height: 100%;
 		display: flex;
 		flex-direction: column;
 		flex-wrap: nowrap;
 		justify-content: flex-start;
 		align-items: center;

 	}

 	.img-container {
 		width: 100%;
 		height: 20%;
 		display: flex;
 		flex-direction: row;
 		flex-wrap: nowrap;
 		justify-content: space-between;
 		align-items: center;

 	}
	.bkurlsix{
		background: url(../assets/img/resultstarbacksix_00000.png);
	}
	.bkurlfive{
		background: url(../assets/img/resultstarbackfive_00000.png);
	}
	.bkurlfour{
		background: url(../assets/img/resultstarbackfour_00000.png);
	}
	
 	.pagination {
 		width: 100%;
 		height: 10%;
 		display: flex;
 		align-items: center;
 		justify-content: space-between;
 		margin-bottom: 30px;

 	}

 	button {
 		font-family: 'Ropa Sans', sans-serif;
 		/* font-family: 'Valorant', sans-serif; */
 		color: white;
 		cursor: pointer;
 		font-size: 13px;
 		font-weight: bold;
 		letter-spacing: 0.05rem;
 		border: 1px solid #0E1822;
 		padding: 0.8rem 2.1rem;
 		background-color: #1d1d1d;

 		background-size: 200%;
 	}
 </style>