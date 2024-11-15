import Vuex, {
	createStore
} from 'vuex';


import user from "./user.js";
import sixStarCardTop from "../assets/img/OperatorCardTop_00000.png";
import fiveStarCardTop from "../assets/img/OperatorCardTop5_00000.png";
import fourStarCardTop from "../assets/img/OperatorCardTop4_00000.png";
import threeStarCardTop from "../assets/img/OperatorCardTop3_00000.png";

import sixStar from "../assets/img/sixstar_00000.png";
import fiveStar from "../assets/img/fivestar_00000.png";
import fourStar from "../assets/img/fourstar_00000.png";
import threeStar from "../assets/img/threestar_00000.png";


/** ----------------------------------------六星 */
import charW1 from '../assets/avatars/六星/头像_W_2.png';
import charW2 from '../assets/characters/六星/立绘_W_2.png';
import charW3 from '../assets/halfimg/六星/半身像_W_1.png';

import charAnJiLiNa1 from '../assets/avatars/六星/头像_安洁莉娜_2.png';
import charAnJiLiNa2 from '../assets/characters/六星/立绘_安洁莉娜_2.png';
import charAnJiLiNa3 from '../assets/halfimg/六星/半身像_安洁莉娜_1.png';

import charChouBai1 from '../assets/avatars/六星/头像_仇白_2.png';
import charChouBai2 from '../assets/characters/六星/立绘_仇白_2.png';
import charChouBai3 from '../assets/halfimg/六星/半身像_仇白_1.png';

import charSiYe1 from '../assets/avatars/六星/头像_伺夜_2.png';
import charSiYe2 from '../assets/characters/六星/立绘_伺夜_2.png';
import charSiYe3 from '../assets/halfimg/六星/半身像_伺夜_1.png';

import charCuoE1 from '../assets/avatars/六星/头像_嵯峨_2.png';
import charCuoE2 from '../assets/characters/六星/立绘_嵯峨_2.png';
import charCuoE3 from '../assets/halfimg/六星/半身像_嵯峨_1.png';

import charDuoLuoXi1 from '../assets/avatars/六星/头像_多萝西_2.png';
import charDuoLuoXi2 from '../assets/characters/六星/立绘_多萝西_2.png';
import charDuoLuoXi3 from '../assets/halfimg/六星/半身像_多萝西_1.png';

import charHaoJiao1 from '../assets/avatars/六星/头像_号角_2.png';
import charHaoJiao2 from '../assets/characters/六星/立绘_号角_2.png';
import charHaoJiao3 from '../assets/halfimg/六星/半身像_号角_1.png';

import charChen1 from '../assets/avatars/六星/头像_假日威龙陈_2.png';
import charChen2 from '../assets/characters/六星/立绘_假日威龙陈_2.png';
import charChen3 from '../assets/halfimg/六星/半身像_假日威龙陈_1.png';

import charKaNieLiAn1 from '../assets/avatars/六星/头像_卡涅利安_2.png';
import charKaNieLiAn2 from '../assets/characters/六星/立绘_卡涅利安_2.png';
import charKaNieLiAn3 from '../assets/halfimg/六星/半身像_卡涅利安_1.png';

import charKaiErXi1 from '../assets/avatars/六星/头像_凯尔希_2.png';
import charKaiErXi2 from '../assets/characters/六星/立绘_凯尔希_2.png';
import charKaiErXi3 from '../assets/halfimg/六星/半身像_凯尔希_1.png';

import charKeEBo1 from '../assets/avatars/六星/头像_刻俄柏_2.png';
import charKeEBo2 from '../assets/characters/六星/立绘_刻俄柏_2.png';
import charKeEBo3 from '../assets/halfimg/六星/半身像_刻俄柏_1.png';

import charKuiYing1 from '../assets/avatars/六星/头像_傀影_2.png';
import charKuiYing2 from '../assets/characters/六星/立绘_傀影_2.png';
import charKuiYing3 from '../assets/halfimg/六星/半身像_傀影_1.png';

import charLing1 from '../assets/avatars/六星/头像_令_2.png';
import charLing2 from '../assets/characters/六星/立绘_令_2.png';
import charLing3 from '../assets/halfimg/六星/半身像_令_1.png';

import charNaRenTuYa1 from '../assets/avatars/六星/头像_娜仁图亚_2.png';
import charNaRenTuYa2 from '../assets/characters/六星/立绘_娜仁图亚_2.png';
import charNaRenTuYa3 from '../assets/halfimg/六星/半身像_娜仁图亚_1.png';

import charNiFU1 from '../assets/avatars/六星/头像_妮芙_2.png';
import charNiFU2 from '../assets/characters/六星/立绘_妮芙_2.png';
import charNiFU3 from '../assets/halfimg/六星/半身像_妮芙_1.png';

import charNian1 from '../assets/avatars/六星/头像_年_2.png';
import charNian2 from '../assets/characters/六星/立绘_年_2.png';
import charNian3 from '../assets/halfimg/六星/半身像_年_1.png';

import charPaLaSi1 from '../assets/avatars/六星/头像_帕拉斯_2.png';
import charPaLaSi2 from '../assets/characters/六星/立绘_帕拉斯_2.png';
import charPaLaSi3 from '../assets/halfimg/六星/半身像_帕拉斯_1.png';

import charPeiPei1 from '../assets/avatars/六星/头像_佩佩_2.png';
import charPeiPei2 from '../assets/characters/六星/立绘_佩佩_2.png';
import charPeiPei3 from '../assets/halfimg/六星/半身像_佩佩_1.png';

import charSaiLeiYa1 from '../assets/avatars/六星/头像_塞雷娅_2.png';
import charSaiLeiYa2 from '../assets/characters/六星/立绘_塞雷娅_2.png';
import charSaiLeiYa3 from '../assets/halfimg/六星/半身像_塞雷娅_1.png';

import charShan1 from '../assets/avatars/六星/头像_山_2.png';
import charShan2 from '../assets/characters/六星/立绘_山_2.png';
import charShan3 from '../assets/halfimg/六星/半身像_山_1.png';

import charSongZangRen1 from '../assets/avatars/六星/头像_圣约送葬人_2.png';
import charSongZangRen2 from '../assets/characters/六星/立绘_圣约送葬人_2.png';
import charSongZangRen3 from '../assets/halfimg/六星/半身像_圣约送葬人_1.png';

import char42TeEr1 from '../assets/avatars/六星/头像_史尔特尔_2.png';
import char42TeEr2 from '../assets/characters/六星/立绘_史尔特尔_2.png';
import char42TeEr3 from '../assets/halfimg/六星/半身像_史尔特尔_1.png';

import charShuangYue1 from '../assets/avatars/六星/头像_双月_2.png';
import charShuangYue2 from '../assets/characters/六星/立绘_双月_2.png';
import charShuangYue3 from '../assets/halfimg/六星/半身像_双月_1.png';

import charSuXin1 from '../assets/avatars/六星/头像_塑心_2.png';
import charSuXin2 from '../assets/characters/六星/立绘_塑心_2.png';
import charSuXin3 from '../assets/halfimg/六星/半身像_塑心_1.png';

import charWuErBiAn1 from '../assets/avatars/六星/头像_乌尔比安_2.png';
import charWuErBiAn2 from '../assets/characters/六星/立绘_乌尔比安_2.png';
import charWuErBiAn3 from '../assets/halfimg/六星/半身像_乌尔比安_1.png';

import charXi1 from '../assets/avatars/六星/头像_夕_2.png';
import charXi2 from '../assets/characters/六星/立绘_夕_2.png';
import charXi3 from '../assets/halfimg/六星/半身像_夕_1.png';

import charYeYing1 from '../assets/avatars/六星/头像_夜莺_2.png';
import charYeYing2 from '../assets/characters/六星/立绘_夜莺_2.png';
import charYeYing3 from '../assets/halfimg/六星/半身像_夜莺_1.png';

import charYiFuLiTe1 from '../assets/avatars/六星/头像_伊芙利特_2.png';
import charYiFuLiTe2 from '../assets/characters/六星/立绘_伊芙利特_2.png';
import charYiFuLiTe3 from '../assets/halfimg/六星/半身像_伊芙利特_1.png';

import charYiLeiSi1 from '../assets/avatars/六星/头像_伊内丝_2.png';
import charYiLeiSi2 from '../assets/characters/六星/立绘_伊内丝_2.png';
import charYiLeiSi3 from '../assets/halfimg/六星/半身像_伊内丝_1.png';

import charYiKe1 from '../assets/avatars/六星/头像_异客_2.png';
import charYiKe2 from '../assets/characters/六星/立绘_异客_2.png';
import charYiKe3 from '../assets/halfimg/六星/半身像_异客_1.png';

import charZuoLe1 from '../assets/avatars/六星/头像_左乐_2.png';
import charZuoLe2 from '../assets/characters/六星/立绘_左乐_2.png';
import charZuoLe3 from '../assets/halfimg/六星/半身像_左乐_1.png';

import charQinLiu1 from '../assets/avatars/六星/头像_琴柳_2.png';
import charQinLiu2 from '../assets/characters/六星/立绘_琴柳_2.png';
import charQinLiu3 from '../assets/halfimg/六星/半身像_琴柳_2.png';

import charNiYan1 from '../assets/avatars/六星/头像_泥岩_2.png';
import charNiYan2 from '../assets/characters/六星/立绘_泥岩_2.png';
import charNiYan3 from '../assets/halfimg/六星/半身像_泥岩_2.png';

import charTiFeng1 from '../assets/avatars/六星/头像_提丰_2.png';
import charTiFeng2 from '../assets/characters/六星/立绘_提丰_2.png';
import charTiFeng3 from '../assets/halfimg/六星/半身像_提丰_2.png';

import charWeiShenDaiEr1 from '../assets/avatars/六星/头像_维什戴尔_2.png';
import charWeiShenDaiEr2 from '../assets/characters/六星/立绘_维什戴尔_2.png';
import charWeiShenDaiEr3 from '../assets/halfimg/六星/半身像_维什戴尔_2.png';

import charZhuoXinSiKaDi1 from '../assets/avatars/六星/头像_浊心斯卡蒂_2.png';
import charZhuoXinSiKaDi2 from '../assets/characters/六星/立绘_浊心斯卡蒂_2.png';
import charZhuoXinSiKaDi3 from '../assets/halfimg/六星/半身像_浊心斯卡蒂_2.png';

import charLingLan1 from '../assets/avatars/六星/头像_铃兰_2.png';
import charLingLan2 from '../assets/characters/六星/立绘_铃兰_2.png';
import charLingLan3 from '../assets/halfimg/六星/半身像_铃兰_2.png';

import charMaEnNa1 from '../assets/avatars/六星/头像_玛恩纳_2.png';
import charMaEnNa2 from '../assets/characters/六星/立绘_玛恩纳_2.png';
import charMaEnNa3 from '../assets/halfimg/六星/半身像_玛恩纳_2.png';

import charChunJinAiYaFaLa1 from '../assets/avatars/六星/头像_纯烬艾雅法拉_2.png';
import charChunJinAiYaFaLa2 from '../assets/characters/六星/立绘_纯烬艾雅法拉_2.png';
import charChunJinAiYaFaLa3 from '../assets/halfimg/六星/半身像_纯烬艾雅法拉_2.png';

import charChengShan1 from '../assets/avatars/六星/头像_澄闪_2.png';
import charChengShan2 from '../assets/characters/六星/立绘_澄闪_2.png';
import charChengShan3 from '../assets/halfimg/六星/半身像_澄闪_2.png';

/** ----------------------------------------五星 */
import charAiLaTuo1 from '../assets/avatars/五星/头像_埃拉托_2.png';
import charAiLaTuo2 from '../assets/characters/五星/立绘_埃拉托_2.png';
import charAiLaTuo3 from '../assets/halfimg/五星/半身像_埃拉托_1.png';

import charAnZheLa1 from '../assets/avatars/五星/头像_安哲拉_2.png';
import charAnZheLa2 from '../assets/characters/五星/立绘_安哲拉_2.png';
import charAnZheLa3 from '../assets/halfimg/五星/半身像_安哲拉_1.png';

import charAMiYa1 from "../assets/avatars/五星/头像_阿米娅_2.png";
import charAMiYa2 from "../assets/characters/五星/立绘_阿米娅_2.png";
import charAMiYa3 from "../assets/halfimg/五星/半身像_阿米娅_1.png";

import charJiuSeLu1 from "../assets/avatars/五星/头像_九色鹿_2.png";
import charJiuSeLu2 from "../assets/characters/五星/立绘_九色鹿_2.png";
import charJiuSeLu3 from "../assets/halfimg/五星/半身像_九色鹿_1.png";

import charWuLian1 from "../assets/avatars/五星/头像_巫恋_2.png";
import charWuLian2 from "../assets/characters/五星/立绘_巫恋_2.png";
import charWuLian3 from "../assets/halfimg/五星/半身像_巫恋_1.png";

import charXiaoMan1 from "../assets/avatars/五星/头像_小满_2.png";
import charXiaoMan2 from "../assets/characters/五星/立绘_小满_2.png";
import charXiaoMan3 from "../assets/halfimg/五星/半身像_小满_1.png";

import charYeMo1 from "../assets/avatars/五星/头像_夜魔_2.png";
import charYeMo2 from "../assets/characters/五星/立绘_夜魔_2.png";
import charYeMo3 from "../assets/halfimg/五星/半身像_夜魔_1.png";

import charZiYue1 from "../assets/avatars/五星/头像_子月_2.png";
import charZiYue2 from "../assets/characters/五星/立绘_子月_2.png";
import charZiYue3 from "../assets/halfimg/五星/半身像_子月_1.png";

import charYouLingSha1 from "../assets/avatars/五星/头像_幽灵鲨_2.png";
import charYouLingSha2 from "../assets/characters/五星/立绘_幽灵鲨_2.png";
import charYouLingSha3 from "../assets/halfimg/五星/半身像_幽灵鲨_1.png";


/** ----------------------------------------四星 */
import charAnBiEr1 from '../assets/avatars/四星/头像_安比尔_2.png';
import charAnBiEr2 from '../assets/characters/四星/立绘_安比尔_2.png';
import charAnBiEr3 from '../assets/halfimg/四星/半身像_安比尔_1.png';

import charBuDing1 from '../assets/avatars/四星/头像_布丁_2.png';
import charBuDing2 from '../assets/characters/四星/立绘_布丁_2.png';
import charBuDing3 from '../assets/halfimg/四星/半身像_布丁_1.png';

import charDiLing1 from '../assets/avatars/四星/头像_地灵_2.png';
import charDiLing2 from '../assets/characters/四星/立绘_地灵_2.png';
import charDiLing3 from '../assets/halfimg/四星/半身像_地灵_1.png';

import charGuMi1 from '../assets/avatars/四星/头像_古米_2.png';
import charGuMi2 from '../assets/characters/四星/立绘_古米_2.png';
import charGuMi3 from '../assets/halfimg/四星/半身像_古米_1.png';

import charJiaWeiEr1 from '../assets/avatars/四星/头像_嘉维尔_2.png';
import charJiaWeiEr2 from '../assets/characters/四星/立绘_嘉维尔_2.png';
import charJiaWeiEr3 from '../assets/halfimg/四星/半身像_嘉维尔_1.png';

import charJianLei1 from '../assets/avatars/四星/头像_坚雷_2.png';
import charJianLei2 from '../assets/characters/四星/立绘_坚雷_2.png';
import charJianLei3 from '../assets/halfimg/四星/半身像_坚雷_1.png';

import charJie1 from '../assets/avatars/四星/头像_孑_2.png';
import charJie2 from '../assets/characters/四星/立绘_孑_2.png';
import charJie3 from '../assets/halfimg/四星/半身像_孑_1.png';

import charKaDa1 from '../assets/avatars/四星/头像_卡达_2.png';
import charKaDa2 from '../assets/characters/四星/立绘_卡达_2.png';
import charKaDa3 from '../assets/halfimg/四星/半身像_卡达_1.png';

import charKeDao1 from '../assets/avatars/四星/头像_刻刀_2.png';
import charKeDao2 from '../assets/characters/四星/立绘_刻刀_2.png';
import charKeDao3 from '../assets/halfimg/四星/半身像_刻刀_1.png';

import charXiuMoSi1 from '../assets/avatars/四星/头像_休谟斯_2.png';
import charXiuMoSi2 from '../assets/characters/四星/立绘_休谟斯_2.png';
import charXiuMoSi3 from '../assets/halfimg/四星/半身像_休谟斯_1.png';

import charYan1 from '../assets/avatars/四星/头像_宴_2.png';
import charYan2 from '../assets/characters/四星/立绘_宴_2.png';
import charYan3 from '../assets/halfimg/四星/半身像_宴_1.png';

import charYeYan1 from '../assets/avatars/四星/头像_夜烟_2.png';
import charYeYan2 from '../assets/characters/四星/立绘_夜烟_2.png';
import charYeYan3 from '../assets/halfimg/四星/半身像_夜烟_1.png';

import charYiSang1 from '../assets/avatars/四星/头像_伊桑_2.png';
import charYiSang2 from '../assets/characters/四星/立绘_伊桑_2.png';
import charYiSang3 from '../assets/halfimg/四星/半身像_伊桑_1.png';

/** ----------------------------------------三星 */

import charAnDeQieEr1 from '../assets/avatars/三星/头像_安德切尔.png';
import charAnDeQieEr2 from '../assets/characters/三星/立绘_安德切尔_1.png';
import charAnDeQieEr3 from '../assets/halfimg/三星/半身像_安德切尔_1.png';

import charAnSaiEr1 from '../assets/avatars/三星/头像_安赛尔.png';
import charAnSaiEr2 from '../assets/characters/三星/立绘_安赛尔_1.png';
import charAnSaiEr3 from '../assets/halfimg/三星/半身像_安赛尔_1.png';

import charDuBin1 from '../assets/avatars/三星/头像_杜宾.png';
import charDuBin2 from '../assets/characters/三星/立绘_杜宾_1.png';
import charDuBin3 from '../assets/halfimg/三星/半身像_杜宾_1.png';

import charFen1 from '../assets/avatars/三星/头像_芬.png';
import charFen2 from '../assets/characters/三星/立绘_芬_1.png';
import charFen3 from '../assets/halfimg/三星/半身像_芬_1.png';

import charFuRong1 from '../assets/avatars/三星/头像_芙蓉.png';
import charFuRong2 from '../assets/characters/三星/立绘_芙蓉_1.png';
import charFuRong3 from '../assets/halfimg/三星/半身像_芙蓉_1.png';

import charKaTi1 from '../assets/avatars/三星/头像_卡缇.png';
import charKaTi2 from '../assets/characters/三星/立绘_卡缇_1.png';
import charKaTi3 from '../assets/halfimg/三星/半身像_卡缇_1.png';

import charKeLuoSi1 from '../assets/avatars/三星/头像_克洛丝.png';
import charKeLuoSi2 from '../assets/characters/三星/立绘_克洛丝_1.png';
import charKeLuoSi3 from '../assets/halfimg/三星/半身像_克洛丝_1.png';

import charKongBao1 from '../assets/avatars/三星/头像_空爆.png';
import charKongBao2 from '../assets/characters/三星/立绘_空爆_1.png';
import charKongBao3 from '../assets/halfimg/三星/半身像_空爆_1.png';

import charMiGeLu1 from '../assets/avatars/三星/头像_米格鲁.png';
import charMiGeLu2 from '../assets/characters/三星/立绘_米格鲁_1.png';
import charMiGeLu3 from '../assets/halfimg/三星/半身像_米格鲁_1.png';

import charMoYao1 from '../assets/avatars/三星/头像_末药.png';
import charMoYao2 from '../assets/characters/三星/立绘_末药_1.png';
import charMoYao3 from '../assets/halfimg/三星/半身像_末药_1.png';

import charShiDuWaDe1 from '../assets/avatars/三星/头像_史都华德.png';
import charShiDuWaDe2 from '../assets/characters/三星/立绘_史都华德_1.png';
import charShiDuWaDe3 from '../assets/halfimg/三星/半身像_史都华德_1.png';

import charXiangCao1 from '../assets/avatars/三星/头像_香草.png';
import charXiangCao2 from '../assets/characters/三星/立绘_香草_1.png';
import charXiangCao3 from '../assets/halfimg/三星/半身像_香草_1.png';

import charYanRong1 from '../assets/avatars/三星/头像_炎熔.png';
import charYanRong2 from '../assets/characters/三星/立绘_炎熔_1.png';
import charYanRong3 from '../assets/halfimg/三星/半身像_炎熔_1.png';

import charYueJianYe1 from '../assets/avatars/三星/头像_月见夜.png';
import charYueJianYe2 from '../assets/characters/三星/立绘_月见夜_1.png';
import charYueJianYe3 from '../assets/halfimg/三星/半身像_月见夜_1.png';

import charZiLan1 from '../assets/avatars/三星/头像_梓兰.png';
import charZiLan2 from '../assets/characters/三星/立绘_梓兰_1.png';
import charZiLan3 from '../assets/halfimg/三星/半身像_梓兰_1.png';

import charMeiLanSha1 from '../assets/avatars/三星/头像_玫兰莎.png';
import charMeiLanSha2 from '../assets/characters/三星/立绘_玫兰莎_1.png';
import charMeiLanSha3 from '../assets/halfimg/三星/半身像_玫兰莎_1.png';


function localStoragePlugin(store) {
	store.subscribe((mutation, state) => {
		localStorage.setItem('vuexState', JSON.stringify(state));
	});
}
const store = createStore({
	modules: {
		user, // 注册模块  
	},
	state: {
		characterX: 0,
		characterY: 0,
		characterScale: 1,

		drawCount: 0,
		temporaryDrawCount:0,
		results: [],
		totalResults: [],
		currentCharacter: {
			thumbnail: charPeiPei1,
			fullImg: charPeiPei2,
			halfimg: charPeiPei3,
			name: '佩佩',
			cardtop: sixStarCardTop,
			star: sixStar,
			starlevel: '六星干员',
		},
		MaincurrentCharacter: {
			thumbnail: charAMiYa1,
			fullImg: charAMiYa2,
			halfimg: charAMiYa3,
			name: '阿米娅',
			cardtop: fiveStarCardTop,
			star: fiveStar,
			starlevel: '五星干员',
		},
		characters: [{
				thumbnail: charW1,
				fullImage: charW2,
				halfimg: charW3,
				name: 'W',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charAnJiLiNa1,
				fullImage: charAnJiLiNa2,
				halfimg: charAnJiLiNa3,
				name: '安洁莉娜',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charChouBai1,
				fullImage: charChouBai2,
				halfimg: charChouBai3,
				name: '仇白',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charSiYe1,
				fullImage: charSiYe2,
				halfimg: charSiYe3,
				name: '伺夜',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charCuoE1,
				fullImage: charCuoE2,
				halfimg: charCuoE3,
				name: '嵯峨',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charDuoLuoXi1,
				fullImage: charDuoLuoXi2,
				halfimg: charDuoLuoXi3,
				name: '多萝西',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charHaoJiao1,
				fullImage: charHaoJiao2,
				halfimg: charHaoJiao3,
				name: '号角',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charChen1,
				fullImage: charChen2,
				halfimg: charChen3,
				name: '假日威龙陈',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charKaNieLiAn1,
				fullImage: charKaNieLiAn2,
				halfimg: charKaNieLiAn3,
				name: '卡涅利安',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charKaiErXi1,
				fullImage: charKaiErXi2,
				halfimg: charKaiErXi3,
				name: '凯尔希',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charKeEBo1,
				fullImage: charKeEBo2,
				halfimg: charKeEBo3,
				name: '刻俄柏',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charKuiYing1,
				fullImage: charKuiYing2,
				halfimg: charKuiYing3,
				name: '傀影',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charLing1,
				fullImage: charLing2,
				halfimg: charLing3,
				name: '令',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charNaRenTuYa1,
				fullImage: charNaRenTuYa2,
				halfimg: charNaRenTuYa3,
				name: '娜仁图亚',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charNiFU1,
				fullImage: charNiFU2,
				halfimg: charNiFU3,
				name: '妮芙',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charNian1,
				fullImage: charNian2,
				halfimg: charNian3,
				name: '年',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charPaLaSi1,
				fullImage: charPaLaSi2,
				halfimg: charPaLaSi3,
				name: '帕拉斯',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charPeiPei1,
				fullImage: charPeiPei2,
				halfimg: charPeiPei3,
				name: '佩佩',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charSaiLeiYa1,
				fullImage: charSaiLeiYa2,
				halfimg: charSaiLeiYa3,
				name: '塞雷亚',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charSongZangRen1,
				fullImage: charSongZangRen2,
				halfimg: charSongZangRen3,
				name: '送葬人',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: char42TeEr1,
				fullImage: char42TeEr2,
				halfimg: char42TeEr3,
				name: '史尔特尔',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charShuangYue1,
				fullImage: charShuangYue2,
				halfimg: charShuangYue3,
				name: '双月',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charSuXin1,
				fullImage: charSuXin2,
				halfimg: charSuXin3,
				name: '塑心',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charWuErBiAn1,
				fullImage: charWuErBiAn2,
				halfimg: charWuErBiAn3,
				name: '乌尔比安',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charXi1,
				fullImage: charXi2,
				halfimg: charXi3,
				name: '夕',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charYeYing1,
				fullImage: charYeYing2,
				halfimg: charYeYing3,
				name: '夜莺',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charYiFuLiTe1,
				fullImage: charYiFuLiTe2,
				halfimg: charYiFuLiTe3,
				name: '伊芙利特',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charYiLeiSi1,
				fullImage: charYiLeiSi2,
				halfimg: charYiLeiSi3,
				name: '伊内丝',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charZuoLe1,
				fullImage: charZuoLe2,
				halfimg: charZuoLe3,
				name: '左乐',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charYiKe1,
				fullImage: charYiKe2,
				halfimg: charYiKe3,
				name: '异客',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charQinLiu1,
				fullImg: charQinLiu2,
				halfimg: charQinLiu3,
				name: '琴柳',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charNiYan1,
				fullImg: charNiYan2,
				halfimg: charNiYan3,
				name: '泥岩',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charTiFeng1,
				fullImg: charTiFeng2,
				halfimg: charTiFeng3,
				name: '提丰',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charWeiShenDaiEr1,
				fullImg: charWeiShenDaiEr2,
				halfimg: charWeiShenDaiEr3,
				name: '维什戴尔',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charZhuoXinSiKaDi1,
				fullImg: charZhuoXinSiKaDi2,
				halfimg: charZhuoXinSiKaDi3,
				name: '浊心斯卡蒂',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charLingLan1,
				fullImg: charLingLan2,
				halfimg: charLingLan3,
				name: '铃兰',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charMaEnNa1,
				fullImg: charMaEnNa2,
				halfimg: charMaEnNa3,
				name: '玛恩纳',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charChunJinAiYaFaLa1,
				fullImg: charChunJinAiYaFaLa2,
				halfimg: charChunJinAiYaFaLa3,
				name: '纯烬艾雅法拉',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
			{
				thumbnail: charChengShan1,
				fullImg: charChengShan2,
				halfimg: charChengShan3,
				name: '澄闪',
				cardtop: sixStarCardTop,
				star: sixStar,
				starlevel: '六星干员',
			},
		],
		fiveStarCharacters: [{
				thumbnail: charAiLaTuo1,
				fullImage: charAiLaTuo2,
				halfimg: charAiLaTuo3,
				name: '埃拉托',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charAnZheLa1,
				fullImage: charAnZheLa2,
				halfimg: charAnZheLa3,
				name: '安哲拉',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charJiuSeLu1,
				fullImg: charJiuSeLu2,
				halfimg: charJiuSeLu3,
				name: '九色鹿',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charWuLian1,
				fullImg: charWuLian2,
				halfimg: charWuLian3,
				name: '巫恋',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charXiaoMan1,
				fullImg: charXiaoMan2,
				halfimg: charXiaoMan3,
				name: '小满',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charYeMo1,
				fullImg: charYeMo2,
				halfimg: charYeMo3,
				name: '夜魔',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charZiYue1,
				fullImg: charZiYue2,
				halfimg: charZiYue3,
				name: '子月',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
			{
				thumbnail: charYouLingSha1,
				fullImg: charYouLingSha2,
				halfimg: charYouLingSha3,
				name: '幽灵鲨',
				cardtop: fiveStarCardTop,
				star: fiveStar,
				starlevel: '五星干员',
			},
		],
		fourStarCharacters: [{
				thumbnail: charAnBiEr1,
				fullImage: charAnBiEr2,
				halfimg: charAnBiEr3,
				name: '安比尔',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charBuDing1,
				fullImage: charBuDing2,
				halfimg: charBuDing3,
				name: '布丁',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charDiLing1,
				fullImg: charDiLing2,
				halfimg: charDiLing3,
				name: '地灵',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charGuMi1,
				fullImg: charGuMi2,
				halfimg: charGuMi3,
				name: '古米',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charJiaWeiEr1,
				fullImg: charJiaWeiEr2,
				halfimg: charJiaWeiEr3,
				name: '嘉维尔',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charJianLei1,
				fullImg: charJianLei2,
				halfimg: charJianLei3,
				name: '坚雷',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charJie1,
				fullImg: charJie2,
				halfimg: charJie3,
				name: '孑',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charKaDa1,
				fullImg: charKaDa2,
				halfimg: charKaDa3,
				name: '卡达',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charKeDao1,
				fullImg: charKeDao2,
				halfimg: charKeDao3,
				name: '刻刀',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charXiuMoSi1,
				fullImg: charXiuMoSi2,
				halfimg: charXiuMoSi3,
				name: '休谟斯',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charYan1,
				fullImg: charYan2,
				halfimg: charYan3,
				name: '晏',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charYeYan1,
				fullImg: charYeYan2,
				halfimg: charYeYan3,
				name: '夜烟',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
			{
				thumbnail: charYiSang1,
				fullImg: charYiSang2,
				halfimg: charYiSang3,
				name: '伊桑',
				cardtop: fourStarCardTop,
				star: fourStar,
				starlevel: '四星干员',
			},
		],
		threeStarCharacters: [{
				thumbnail: charAnDeQieEr1,
				fullImage: charAnDeQieEr2,
				halfimg: charAnDeQieEr3,
				name: '安德切尔',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charAnSaiEr1,
				fullImage: charAnSaiEr2,
				halfimg: charAnSaiEr3,
				name: '安赛尔',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charDuBin1,
				fullImage: charDuBin2,
				halfimg: charDuBin3,
				name: '杜宾',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charFen1,
				fullImage: charFen2,
				halfimg: charFen3,
				name: '芬',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charFuRong1,
				fullImage: charFuRong2,
				halfimg: charFuRong3,
				name: '芙蓉',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charKaTi1,
				fullImage: charKaTi2,
				halfimg: charKaTi3,
				name: '卡缇',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charKeLuoSi1,
				fullImage: charKeLuoSi2,
				halfimg: charKeLuoSi3,
				name: '克洛丝',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charKongBao1,
				fullImage: charKongBao2,
				halfimg: charKongBao3,
				name: '空爆',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charMiGeLu1,
				fullImage: charMiGeLu2,
				halfimg: charMiGeLu3,
				name: '米格鲁',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charMoYao1,
				fullImage: charMoYao2,
				halfimg: charMoYao3,
				name: '末药',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charShiDuWaDe1,
				fullImage: charShiDuWaDe2,
				halfimg: charShiDuWaDe3,
				name: '史都华德',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charXiangCao1,
				fullImage: charXiangCao2,
				halfimg: charXiangCao3,
				name: '香草',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charYanRong1,
				fullImage: charYanRong2,
				halfimg: charYanRong3,
				name: '炎熔',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charYueJianYe1,
				fullImage: charYueJianYe2,
				halfimg: charYueJianYe3,
				name: '月见夜',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charZiLan1,
				fullImage: charZiLan2,
				halfimg: charZiLan3,
				name: '梓兰',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
			{
				thumbnail: charMeiLanSha1,
				fullImage: charMeiLanSha2,
				halfimg: charMeiLanSha3,
				name: '玫兰莎',
				cardtop: threeStarCardTop,
				star: threeStar,
				starlevel: '三星干员',
			},
		],
		SearchCharacters: [{
			thumbnail: charAMiYa1,
			fullImg: charAMiYa2,
			halfimg: charAMiYa3,
			name: '阿米娅',
			cardtop: fiveStarCardTop,
			star: fiveStar,
			starlevel: '五星干员',
		}, ],
	},
	mutations: {
		SET_CURRENT_CHARACTER(state, characters) {
			state.currentCharacter = characters; // 更新当前干员 
		},
		SET_MAIN_CHARACTER(state, characters) {
			state.MaincurrentCharacter = characters; // 更新当前干员 
		},
		setOperatorSearchResults(state, {
			drawCount,
			results,
			totalResults,
		}) {
			state.drawCount = drawCount; // 更新 drawCount 
			state.results = results; // 更新 results 
			state.totalResults = totalResults;
			//	console.log(state);
		},
		clearOperatorSearchResults(state) {
			state.drawCount = 0;
			state.temporaryDrawCount = 0;
			state.results = [];
			state.totalResults = [];
		},
		updateTemporaryDrawCount(state,temporaryDrawCount){
			state.temporaryDrawCount = temporaryDrawCount;
		},
		clearTemporaryDrawCount(state,temporaryDrawCount){
			state.temporaryDrawCount =0;
		},

		addSearchCharacters(state, searchCharacter) {
			state.SearchCharacters.push(searchCharacter);
		},
		setCharacterPositionX(state, x) {
			state.characterX = x;
		},
		setCharacterPositionY(state, y) {
			state.characterY = y;
		},
		setCharacterScale(state, scale) {
			state.characterScale = scale;
		},
		CLEAR_STATE(state) {
			// 重置状态  
			Object.assign(state, {
				characterX: 0,
				characterY: 0,
				characterScale: 1,
				drawCount: 0,
				results: [],
				totalResults: [],
				currentCharacter: {
					thumbnail: charPeiPei1,
					fullImg: charPeiPei2,
					halfimg: charPeiPei3,
					name: '佩佩',
					cardtop: sixStarCardTop,
					star: sixStar,
					starlevel: '六星干员',
				},
				MaincurrentCharacter: {
					thumbnail: charAMiYa1,
					fullImg: charAMiYa2,
					halfimg: charAMiYa3,
					name: '阿米娅',
					cardtop: fiveStarCardTop,
					star: fiveStar,
					starlevel: '五星干员',

				},

				SearchCharacters: [{
					thumbnail: charAMiYa1,
					fullImg: charAMiYa2,
					halfimg: charAMiYa3,
					name: '阿米娅',
					cardtop: fiveStarCardTop,
					star: fiveStar,
					starlevel: '五星干员',
				}],
			});
		},
	},
	actions: {
		clearLocalStorage({
			commit
		}) {
			
			localStorage.clear();
			commit('CLEAR_STATE');

		},
	},
	getters: {
		uniqueSearchCharacters: state => {
			const uniqueCharacters = Array.from(new Set(state.SearchCharacters.map(c => c.name)))
				.map(name => {
					return state.SearchCharacters.find(c => c.name === name);
				});
			return uniqueCharacters;
		},
	},
	plugins: [localStoragePlugin],
});

// 恢复状态  
const savedState = localStorage.getItem('vuexState');
if (savedState) {
	const parsedState = JSON.parse(savedState);
	store.replaceState(parsedState);
}

export default store;
/* export default createStore({
	 modules: {  
	        user, // 注册模块  
	    },  
	state: {
		
		
		characterX: 0,
		characterY: 0,
		characterScale: 1,
		
		yuanshi:999999,
		hechengyu:9999999,
		drawCount: 0,
		
		results: [],
		totalResults: [],
		currentCharacter:{thumbnail:charPeiPei1, fullImg:charPeiPei2, halfimg:charPeiPei3, name:'佩佩'},
		MaincurrentCharacter:{thumbnail:charAMiYa1, fullImg:charAMiYa2, halfimg:charAMiYa3, name:'阿米娅'},
		  characters: [  
		      { thumbnail: charW1, fullImage: charW2, halfimg: charW3 , name:'W'},  
		      { thumbnail: charAnJiLiNa1, fullImage: charAnJiLiNa2, halfimg: charAnJiLiNa3 ,name:'安洁莉娜'},  
		      { thumbnail: charChouBai1, fullImage: charChouBai2, halfimg: charChouBai3 ,name:'仇白'},  
		      { thumbnail: charSiYe1, fullImage: charSiYe2, halfimg: charSiYe3 ,name:'伺夜'},  
		      { thumbnail: charCuoE1, fullImage: charCuoE2, halfimg: charCuoE3 ,name:'嵯峨'},  
		      { thumbnail: charDuoLuoXi1, fullImage: charDuoLuoXi2, halfimg: charDuoLuoXi3 ,name:'多萝西'},  
		      { thumbnail: charHaoJiao1, fullImage: charHaoJiao2, halfimg: charHaoJiao3 ,name:'号角'},  
		      { thumbnail: charChen1, fullImage: charChen2, halfimg: charChen3 ,name:'假日威龙陈'},  
		      { thumbnail: charKaNieLiAn1, fullImage: charKaNieLiAn2, halfimg: charKaNieLiAn3 ,name:'卡涅利安'},  
		      { thumbnail: charKaiErXi1, fullImage: charKaiErXi2, halfimg: charKaiErXi3 ,name:'凯尔希'},  
		      { thumbnail: charKeEBo1, fullImage: charKeEBo2, halfimg: charKeEBo3 ,name:'刻俄柏'},  
		      { thumbnail: charKuiYing1, fullImage: charKuiYing2, halfimg: charKuiYing3 ,name:'傀影'},  
		      { thumbnail: charLing1, fullImage: charLing2, halfimg: charLing3 ,name:'令'},  
		      { thumbnail: charNaRenTuYa1, fullImage: charNaRenTuYa2, halfimg: charNaRenTuYa3 ,name:'娜仁图亚'},  
		      { thumbnail: charNiFU1, fullImage: charNiFU2, halfimg: charNiFU3 ,name:'妮芙'},  
		      { thumbnail: charNian1, fullImage: charNian2, halfimg: charNian3 ,name:'年'},  
		      { thumbnail: charPaLaSi1, fullImage: charPaLaSi2, halfimg: charPaLaSi3 ,name:'帕拉斯'},  
		      { thumbnail: charPeiPei1, fullImage: charPeiPei2, halfimg: charPeiPei3 ,name:'佩佩'},  
		      { thumbnail: charSaiLeiYa1, fullImage: charSaiLeiYa2, halfimg: charSaiLeiYa3 ,name:'塞雷亚'},  
		      { thumbnail: charShan1, fullImage: charShan2, halfimg: charShan3 ,name:'山'},  
		      { thumbnail: charSongZangRen1, fullImage: charSongZangRen2, halfimg: charSongZangRen3 ,name:'送葬人'},  
		      { thumbnail: char42TeEr1, fullImage: char42TeEr2, halfimg: char42TeEr3 ,name:'史尔特尔'},  
		      { thumbnail: charShuangYue1, fullImage: charShuangYue2, halfimg: charShuangYue3 ,name:'双月'},  
		      { thumbnail: charSuXin1, fullImage: charSuXin2, halfimg: charSuXin3 ,name:'塑心'},  
		      { thumbnail: charWuErBiAn1, fullImage: charWuErBiAn2, halfimg: charWuErBiAn3 ,name:'乌尔比安'},  
		      { thumbnail: charXi1, fullImage: charXi2, halfimg: charXi3 ,name:'夕'},  
		      { thumbnail: charYeYing1, fullImage: charYeYing2, halfimg: charYeYing3 ,name:'夜莺'},  
		      { thumbnail: charYiFuLiTe1, fullImage: charYiFuLiTe2, halfimg: charYiFuLiTe3 ,name:'伊芙利特'},  
		      { thumbnail: charYiLeiSi1, fullImage: charYiLeiSi2, halfimg: charYiLeiSi3 ,name:'伊内丝'},  
		      { thumbnail: charZuoLe1, fullImage: charZuoLe2, halfimg: charZuoLe3 ,name:'左乐'},  
		      { thumbnail: charYiKe1, fullImage: charYiKe2, halfimg: charYiKe3 ,name:'异客'},  
		  ], 
		  fiveStarCharacters:[
			  {thumbnail: charAiLaTuo1, fullImage: charAiLaTuo2, halfimg: charAiLaTuo3 , name:'埃拉托'},
			  {thumbnail: charAnZheLa1, fullImage: charAnZheLa2, halfimg: charAnZheLa3 , name:'埃拉托'},
		  ],
		  fourStarCharacters:[
			  {thumbnail: charAnBiEr1, fullImage: charAnBiEr2, halfimg: charAnBiEr3 , name:'安比尔'},
			  {thumbnail: charBuDing1, fullImage: charBuDing2, halfimg: charBuDing3 , name:'布丁'},
		  ],
		  threeStarCharacters:[
			  {thumbnail: charKeLuoSi1, fullImage: charKeLuoSi2, halfimg: charKeLuoSi3 , name:'克洛丝'},
			  {thumbnail: charAnSaiEr1, fullImage: charAnSaiEr2, halfimg: charAnSaiEr3 , name:'安赛尔'},
		  ],
		  SearchCharacters:[],
	},
	mutations: {
		 SET_CURRENT_CHARACTER(state, characters) {  
		 state.currentCharacter = characters; // 更新当前干员 
		 },
		 SET_MAIN_CHARACTER(state, characters) {
		 state.MaincurrentCharacter = characters; // 更新当前干员 
		 },
		setOperatorSearchResults(state, {
			drawCount,
			results,
			totalResults,
		}) {
			state.drawCount = drawCount; // 更新 drawCount 
			state.results = results; // 更新 results 
			state.totalResults=totalResults;
		//	console.log(state);
		},
		clearOperatorSearchResults(state) {
			state.drawCount = 0;
			state.results = [];
			state.totalResults= [];
		},
		updateHechengyu(state, hechengyu) {
			state.hechengyu = hechengyu;
		},
		updateYuanshi(state, yuanshi) {
			state.yuanshi = yuanshi;
		},
		addSearchCharacters(state, searchCharacter) {  
		    state.SearchCharacters.push(searchCharacter);  
		}, 
		setCharacterPositionX(state, x) {  
		    state.characterX = x;  
		},  
		setCharacterPositionY(state, y) {
		    state.characterY = y;  
		}, 
		setCharacterScale(state, scale) {  
		    state.characterScale = scale;  
		},
	},
	getters: {  
	    uniqueSearchCharacters: state => {  
	      // 使用 Set 来去重角色  
	      const uniqueCharacters = Array.from(new Set(state.SearchCharacters.map(c => c.name)))  
	        .map(name => {  
	          return state.SearchCharacters.find(c => c.name === name);  
	        });  
	      return uniqueCharacters;  
	    },
		  
	
		
	  },
	
}); */