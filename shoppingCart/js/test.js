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
    },
    methods:{
        carList: function () {
            var _this = this;
            this.$http.get("data/cartData.json", {"id": 123}).then(function(res) {
                //_this.productList = res.body.result.list;
                // _this.totalMoney =  res.body.result.totalMoney;
            });
        }
    }
})