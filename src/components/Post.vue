<template>
    <div class="container vh">
        <h1>Le post numéro {{ id }}</h1>
        <div>
            <h2>{{ articleUnique.title }}</h2>
            <br>
            <p class="white">{{ articleUnique.body }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Post',
    data(){
        return{
            id: this.$route.params.id,
            articleUnique: []
        }
    },
     mounted(){
         axios
         .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
         .then(reponse =>{
             this.articleUnique = reponse.data
         })
     }
}

</script>
<style>
.white{
    color: white;
}

</style>