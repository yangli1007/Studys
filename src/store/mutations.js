import * as types from './types.js';
import getters from './getters';




const state = {
	GoToBack: false;
};



const mutations = {
	[types.GOTOBACK](state,val){
		localStorage.setItem('gotoback',JSON.stringify(val));
		state.GoTOback = JSON.parse (localStorage.setItem('gotoback'));  //格式
	},
};



export default {
	state,
	mutations,
	getters,

};
