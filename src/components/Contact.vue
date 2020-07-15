<template>
    <div class="container vh">
        <h1>Formulaire de contact</h1>
        <form>
            <div class="form-group">
                <label for="prenom">Prenom*</label>
                <input v-on:input="toggleResult" v-model="formData.prenom" type="text" id="prenom" class="form-control" required>
            </div>


            <div class="form-group">
                <label for="txt">Nom*</label>
                <input v-on:input="toggleResult" v-model="formData.nom" type="text" id="nom" class="form-control" required>
            </div>


            <div class="form-group">
                <label for="age">Age*</label>
                <input v-on:input="toggleResult" v-model.number="formData.age" type="number" id="age" class="form-control" required>
            </div>


            <div class="form-group">
                <label for="nom">Ton message*</label>
                <textarea v-on:input="toggleResult" v-model="formData.txt" id="txt" class="form-control" required></textarea>
            </div>

            <button v-on:click.prevent="envoiForm" class="btn btn-primary mt-3 mb-3">Envoyer</button>
        </form>

        

        <div v-if="infoSubmit" class="card p-3 mb-5">
            <h2>Recapitulatif</h2>
            <p>Prenom : {{ formData.prenom }}</p>
            <p>Nom : {{ formData.nom }}</p>
            <p>Age : {{ formData.age }}</p>
            <p class="wsp">Ton message : {{ formData.txt }}</p>
        </div>
    </div>


</template>
<script>
export default {
    name: 'Contact',
    data(){
        return{
            formData: {
                prenom: '',
                nom: '',
                txt: '',
                age: ''
            },
            infoSubmit: false
        }
    },
    methods: {
        envoiForm: function(){
            this.infoSubmit = true;
        },
        toggleResult: function(){
            this.infoSubmit = false;
        }
    }
    
}


</script>
<style scoped>
label{
    color: white;
}
.wsp{
    white-space: pre;
}



</style>