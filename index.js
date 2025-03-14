Vue.createApp({
    data(){
        return{
            word:null,
            words: ["This","Is","A","Word"],
            canShow:false,
        }
    },
    methods:{
        save(){
            this.words.push(this.word);
        },
        show(){
            if(this.canShow == false){
                this.canShow = true;
            }
            else if(this.canShow == true){
                this.canShow = false;
            }
        },
        clear(){
            this.words = []
        },
        remove(word){
            this.words.splice(this.words.indexOf(word),1);
        }
    }
}).mount("#app")
