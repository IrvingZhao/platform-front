import Vue from 'vue';

export default {
    getUserMenu() {
        let data = [];
        for (let i = 0; i < 20; i++) {
            data.push({
                id: "a" + i,
                name: "组件",
                path:"",
                children: [{
                    id: "a-a" + i,
                    name: "A",
                    path: "/page"
                }]
            });
        }
        data.push({
            id: "b",
            name: "页面",
            path: "/sys/menu"
        });
        return new Promise((resolve) => {
            resolve({body: {code: "000000", data: data}});
        })
        // return Vue.http.get('/api/user/userMenu').then(({body}) => {
        //   const {success,code, msg, data} = body;
        //   if(success){
        //     commit("menu", data);
        //   }else{
        //     //TODO 提示
        //   }
        // });
    }
}