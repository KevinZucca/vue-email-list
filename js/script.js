 const { createApp } = Vue

createApp({
    data() {
      return {
        emailsAddress: [],
        showEmails: false
      }
    },

    
    created(){
        for ( let i = 0; i < 10; i ++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                this.emailsAddress.push(res.data.response)
                console.log(res.data.response)
            })
        }    
    },

    mounted() {
        setTimeout(() => {
            this.showEmails = true
        }, 3000);
    },


}).mount('#app')