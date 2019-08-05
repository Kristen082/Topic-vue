<template>
    <div>
        <h2>一共答对了{{num}}题</h2>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['num'])
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

</style>