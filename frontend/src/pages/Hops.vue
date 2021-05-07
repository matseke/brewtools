<template>
<div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { RepositoryFactory } from '../repositories/RepositoryFactory.js'

const hops = ref([]);

const fetch = () => {
    RepositoryFactory.get('hopsRepository').get()
    .then((response) => {
        hops.value = response.data;
        console.log('recieved ' + response.data.length + ' hops from backend');
    })
    .catch((err) => {
        console.log("ERROR");
        console.log(err);
    });
}

fetch();

</script>

<style scoped>
</style>