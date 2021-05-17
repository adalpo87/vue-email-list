
    const app = new Vue({

        el: '#app',

        data:{
            emails:[],
        },

        mounted(){
           this.callApi("https://flynn.boolean.careers/exercises/api/random/mail")

        },

        methods:{
           callApi(url){
                axios.get(url)
                .then((resp)=>{
                   
                    this.emails.push(resp.data.response)
                    if(this.emails.length < 10){
                        this.callApi(url)
                    }
                    console.log(emails)
                })
                .catch((err)=>{
                    console.log(err)
                })
                
           }
            
        }




    })