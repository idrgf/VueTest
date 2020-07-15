<template>
    <div class="vh">
        <div class="container  mb-4">
            <h1>Météo du jour</h1>
            <div class="form-group mb-5">
                <label for="position">Entrez le nom d'une ville</label>
                <input
                    type="text"
                    id="position"
                    class="form-control"
                    v-model="requete"
                    v-on:keypress="goMeteo"
                    >
            </div>

            <div class="w-75 m-auto mt-3" v-if="temps">
                <h3 class="mb-3">Position: {{ temps.name}}</h3>
                <div class="card text-center p-2">
                    <p class="text-affichage">
                        Temperature : {{ temps.main.temp.toFixed()}}
                    </p>
                    <p class="text-affichage">
                        Temps : {{ temps.weather[0].description}}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: 'Meteo',
    data(){
        return{
            //Utilisation de l'api openWeatherMap
            requete: '',
            temps: undefined,
            api_code: '017b4e9ee545de9bbd0aae15d6cfcc74',
            url_recherche: 'https://api.openweathermap.org/data/2.5/weather?',
        }
    },
    methods: {
        goMeteo(e){
            //si la touche cliqué == enter
            if(e.key == "Enter"){

                axios
                //recuperer l'url de la ville tapé en requete + ajouter les unité métrique + ajouter notre code API 
                .get(`${this.url_recherche}q=${this.requete}&units=metric&APPID=${this.api_code}&lang=fr`)
                .then(reponse => {
                    this.temps = reponse.data;
                })
                //renitialiser le formulaire apres soumission
                this.requete = ''
            }

                
        }
    }
}

</script>
<style scoped>



</style>