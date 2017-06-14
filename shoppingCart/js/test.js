/**
 * Created by admin_gw on 2017/6/13.
 */
new Vue({
    el:"#app",
    data:{
        title:"hello vue!"
    },
    filters:{

    },
    mounted:function(){
        this.changet();
    },
    methods:{
        changet:function (){
            this.title= "vue"
        }
    }
})