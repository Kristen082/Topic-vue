import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'


Vue.use(Router)
Vue.use(Vuex)

var _this=this;
export default new Vuex.Store({
    state:{
        num:0,
        ind:null,//第几个答案
        cur:0,//第几题
        answerList:[
            {
                title:'以下不是我國年華產地的是？',
                type:'福',
                id:1,
                flag:null,
                answer:[
                    {
                        answer_name:"蘇州桃花",
                        is_stand_answer:0,
                        ans_id:1
                    },{
                        answer_name:"天津楊柳",
                        is_stand_answer:0,
                        ans_id:1
                    },{
                        answer_name:"中國牡丹",
                        is_stand_answer:0,
                        ans_id:1
                    },{
                        answer_name:"山西沒花",
                        is_stand_answer:1,
                        ans_id:1
                    }

                ]
            },{
                title:'過年春節“福”有什麽習俗？',
                type:'祿',
                id:2,
                flag:null,
                answer:[
                    {
                        answer_name:"正貼",
                        is_stand_answer:0,
                        ans_id:2
                    },{
                        answer_name:"反貼",
                        is_stand_answer:0,
                        ans_id:2
                    },{
                        answer_name:"倒貼",
                        is_stand_answer:1,
                        ans_id:2
                    },{
                        answer_name:"不貼",
                        is_stand_answer:0,
                        ans_id:2
                    }

                ]
            },{
                title:'一下春節初二有什麽習俗？',
                type:'壽',
                id:3,
                flag:null,
                answer:[
                    {
                        answer_name:"吃飯",
                        is_stand_answer:0,
                        ans_id:3
                    },{
                        answer_name:"睡覺",
                        is_stand_answer:0,
                        ans_id:3
                    },{
                        answer_name:"打豆豆",
                        is_stand_answer:0,
                        ans_id:3
                    },{
                        answer_name:"掏錢款",
                        is_stand_answer:1,
                        ans_id:3
                    }

                ]
            }
        ]
    },
    getter:{
//?????????????
        getList(state,getters){
            return state.answerList.filter(item=>item.flag);
        },
        getLength(state,getters){
            return getters.getList.length;
        },

    },
    mutations:{
        //第一个参数都是state
        newCur(state,obj){//obj点击的数据
            if(state.cur<state.answerList.length-1){
                state.cur++;
            }
            let index=state.answerList.findIndex(item=>item.id===obj.ans_id)
            if(obj.is_stand_answer==1){
                state.answerList[index].flag=true;
                state.num++
                console.log(state.num)
            }else{
                state.answerList[index].flag=false;
            }
            state.ind=null//点后清空样式
        },
        newInd(state,ind){
            state.ind=ind
        }
    },
    actions:{//异步方法
        changeCur({commit},obj){
            setTimeout(() => {
                commit('newCur',obj)
            }, 500);
        }
    }
})