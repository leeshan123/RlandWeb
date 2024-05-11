
const {createApp} = Vue;

createApp({
    data(){
        return {
            query:"",
            list:[{korName:"범죄도시4", engName:"ameriririri"}]
            
        }
    },
        methods:{
            queryClickHandler(){
                this.list.push({});
            }
        }
        //만들어지기전에
    ,   beforeCreate(){
        console.log("beforeCreate");
        },
        //만들어지고 나서
        async created(){
        console.log("created");
        let response = await fetch("/api/menus");
        let list = await response.json();
        this.list = list;

        },
        //마운트 되기 전에
        beforeMount(){
        console.log("beforeMount");
        },
        //마운트 된 후에
        mounted(){
        console.log("mounted");
        },
        //업데이트 되기 전에
        beforeUpdate(){
        console.log("beforeUpdate");
        },
        //업데이트 된 후에
        updated(){
        console.log("updated");
        },
        beforeUnmount(){
        console.log("beforeUnmount");
        },
        unmounted(){
        console.log("unmounted");
        },
        activated(){
        console.log("activated");
        },
        deactivated(){
        console.log("deactivated");
        },
}).mount('main');