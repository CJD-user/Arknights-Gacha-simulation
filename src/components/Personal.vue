<template>
	<div class="modal" v-if="isVisible" >
		<div class="modal-content">
			<span class="close" @click="closeModal">&times</span>
			<h2 class="text ">博士档案</h2>
			<form @submit.prevent="saveUserInfo">
				<label class="text ">
					昵称:
					<input type="text" v-model="arkname" maxlength="6" required />
				</label>
				<br />
				<label class="text ">
					编号:
					<input type="text" v-model="arkid" maxlength="8" pattern="\d{8}" required />
				</label>
				<br />
				<label class="text ">
					等级:
					<input type="number" v-model="arklv" min="1" max="150" required />
				</label>
				<br />
				<label class="text ">
					声音:
					<input type="text" v-model="arkvoice" />
				</label>
				<br />
				<label class="text ">
					龙门币数量:
					<input type="number" v-model="arklongmenbi" min="0" max="9999999" required />
				</label>
				<br />
				<label class="text ">
					合成玉数量:
					<input type="number" v-model="arkhechengyu" min="0" max="999999" required />
				</label>
				<br />
				<label class="text ">
					源石数量:
					<input type="number" v-model="arkyuanshi" min="0" max="999999" required />
				</label>
				<br />
				<p class="text ">作者名称: {{ author }} </p>
				<p class="text ">原创作者: {{ OrAuthor }} </p>
				<p class="text ">GitHub地址: 
				<a href="https://github.com/CJD-user?tab=repositories" target="_blank">{{authorurl}}</a></p>
				<p class="text">已寻访次数:{{ drawCount }}</p>
				<br />
				<button class="text " type="submit" style="color: black;">保存</button>
			</form>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions,
		mapState,
	} from 'vuex';

	export default {
		props: {
			isVisible: {
				type: Boolean,
				required: true
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			...mapGetters('user', ['getUserInfo']),
			...mapState(['drawCount']),
			author() {
				return this.getUserInfo.author;
			},
			authorurl() {
				return this.getUserInfo.authorurl;
			},
			OrAuthor(){
				return this.getUserInfo.OrAuthor;
			},
		},
		methods: {
			...mapActions('user', ['updateUserInfo']),
			closeModal() {
				this.$emit('close');
			},
			saveUserInfo() {
				this.updateUserInfo({
					arkname: this.arkname,
					arkid: this.arkid,
					arklv: this.arklv,
					arkvoice: this.arkvoice,
					arklongmenbi: this.arklongmenbi,
					arkhechengyu: this.arkhechengyu,
					arkyuanshi: this.arkyuanshi,
				});
				this.closeModal();
			}
		},
		watch: {
			getUserInfo: {
				immediate: true,
				handler(newInfo) {
					this.arkname = newInfo.arkname;
					this.arkid = newInfo.arkid;
					this.arklv = newInfo.arklv;
					this.arkvoice = newInfo.arkvoice;
					this.arklongmenbi = newInfo.arklongmenbi;
					this.arkhechengyu = newInfo.arkhechengyu;
					this.arkyuanshi = newInfo.arkyuanshi;
				}
			}
		}
	};
</script>

<style scoped>
	.modal {
		display: flex;
		position: fixed;
		z-index: 1000;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal-content {
		background-color:rgba(0, 0, 0, 0.7);
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 400px;
		height: 450px;
		user-select: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	.text {
		font-family: 'Noto Serif SC', serif;
		color: white;
		font-weight: 700;
	}
</style>