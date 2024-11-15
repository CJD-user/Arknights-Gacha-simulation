const state = {  
    arkname: '凯塞露',  
    arkid: '11111111',  
    arklv: 1,  
    arkvoice: '博士，欢迎回来！',  
    arklongmenbi: 1000,  
    arkhechengyu: 1000,  
    arkyuanshi: 1000,  
    author: '凯塞露',
	OrAuthor:'Mashiro',
    authorurl: '去看看～ (∠・ω< )⌒★[GO!]',  
};  

const mutations = {  
    setUserInfo(state, userInfo) {  
        state.arkname = userInfo.arkname.slice(0, 6);  
        state.arkid = userInfo.arkid;  
        state.arklv = Math.max(1, Math.min(userInfo.arklv, 150));  
        state.arkvoice = userInfo.arkvoice;  
        state.arklongmenbi = Math.max(0, Math.min(userInfo.arklongmenbi, 9999999));  
        state.arkhechengyu = Math.max(0, Math.min(userInfo.arkhechengyu, 999999));  
        state.arkyuanshi = Math.max(0, Math.min(userInfo.arkyuanshi, 999999));  
    },  
	updateHechengyu(state, hechengyu) {
		state.arkhechengyu = hechengyu;
	},
	updateYuanshi(state, yuanshi) {
		state.arkyuanshi = yuanshi;
	},
	resetUser(state) {
	        state.arkname = '凯塞露';  
	        state.arkid = '11111111';  
	        state.arklv = 1;  
	        state.arkvoice = '博士，欢迎回来！';  
	        state.arklongmenbi = 1000;  
	        state.arkhechengyu = 1000;  
	        state.arkyuanshi = 1000;
			author: '凯塞露';
			OrAuthor:'Mashiro';
			authorurl: '去看看～ (∠・ω< )⌒★[GO!]';
	    }    
};  

const getters = {  
    getUserInfo: (state) => {  
        return {  
            arkname: state.arkname,  
            arkid: state.arkid,  
            arklv: state.arklv,  
            arkvoice: state.arkvoice,  
            arklongmenbi: state.arklongmenbi,  
            arkhechengyu: state.arkhechengyu,  
            arkyuanshi: state.arkyuanshi,  
            author: state.author, 
			OrAuthor:state.OrAuthor,
            authorurl: state.authorurl,
        };  
    },  
};  

const actions = {  
    updateUserInfo({ commit }, userInfo) {  
        commit('setUserInfo', userInfo);  
    },
	resetUserInfo({ commit }) { 
	    
		localStorage.removeItem('userInfo');
		commit('resetUser');  
	},  
};  

export default {  
    namespaced: true,  
    state,  
    mutations,  
    actions,  
    getters,  
};