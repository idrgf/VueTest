<template>
    <div>
        <ul>
            <li>
                <router-link to="/" exact>Accueil</router-link>
            </li>
            <li>
                <router-link to="/meteo">Meteo</router-link>
            </li>
           <li>
               <router-link to="/Blog">Blog</router-link>
            </li>

            <li>
                <router-link to="/Contact">Contact</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
 export default {
     name: 'Header'
 }


</script>

<style scoped>
    li{
        list-style: none;
        color: white;
    }
    a{
        color: white;
    }
</style>