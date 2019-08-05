<template>
    <div class="list">
        <h3>{{answerList[cur].title}}</h3>
        <ul>
            <li v-for="(item,index) in answerList[cur].answer" 
            :class="[{'active' : index == ind},{'current':item.is_stand_answer ==1}]"
            @click="Next(index,item)"
            :key='index'>
                <span>{{ item.is_stand_answer ==1}}</span>
                <span>{{arr[index]}}.  {{item.answer_name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
//连接store
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            // ind:null,//第几个答案
            // cur:0//第几题

            arr:['A','B',"C","D"],
        }
    },
    computed:{
        ...mapState(['answerList','cur','ind']),//调用方法
    },
    methods:{
        ...mapMutations(['newCur','newInd']),
        ...mapActions(['changeCur']),

        Next(ind,item){
            this.changeCur(item)//下一题
            this.newInd(ind)//改变样式

            if(this.cur == this.answerList.length-1){
                setTimeout(()=>{
                    this.$router.push({name:'last'})
                },1000)
            }
        }
        
    },
    created(){
        //获取当前数据列表
        console.log(this.answerList)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
*{
    padding: 0%;
    list-style: none;
}
ul>li{
    padding: 5px 8px;
    margin: 5px;
}
.active{
    background: crimson;
    color: aliceblue;
}
.list{
    text-align: left;
}
</style>