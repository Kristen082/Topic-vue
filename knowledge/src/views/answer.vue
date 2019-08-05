<template>
    <div>
        <ul class="title">
            <li v-for="(item,index) in answerList" :key="index">
                <h4>{{item.type}}</h4>
                <p v-if="item.flag == false">×</p>
                <p v-if="item.flag == true">√</p>
            </li>
        </ul>
        <my-Ans></my-Ans>
    </div>
</template>
<script>
import myAns from '../components/ans'
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{
        myAns
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState(['answerList'])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
html,body,#app{
    width: 100%;
    height: 100%;
}
*{
    padding: 0;
    margin: 0%;
    list-style: none;
}
ul{
    display: flex;
}
h4{
    color: crimson;
    font-size: 20px;
}
li{
    flex:1;
    text-align: center;
}
</style>