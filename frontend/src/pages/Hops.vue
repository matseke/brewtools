<template>
<div>
    <div v-if='!submitted'>
        <div>
            <label for='name'>Name</label>
            <input
                type='text'
                id='name'
                required
                v-model='newHops.name'
                name='name'
            />
        </div>
        <div>
            <label for='averageAa'>Average AA</label>
            <input
                id='averageAa'
                required
                v-model='newHops.averageAa'
                name='averageAa'
            />
        </div>
        <button @click='saveHops'> Submit </button>
    </div>
    <div v-else>
        <h4>You submitted successfully!</h4>
        <button @click='addHops'> Add </button>
    </div>
    <div>
        <table>
            <tr>
                <th id='name'>Name</th>
                <th id='averageAa'>Average AA</th>
                <th id='actions'>Actions</th>
            </tr>
            <tr v-for="{ _id, name, average_aa} in hops" :key="_id" >
                <router-link :to="`/hops/${_id}`"
          >{{ name }} ({{ average_aa }})</router-link>
                <td>{{name}}</td>
                <td>{{average_aa}}</td>
                <td><button @click='deleteHops(_id)'>Delete</button></td>
            </tr>
        </table>
    </div>
</div>
<router-view></router-view>
</template>

<script setup>
import { ref } from 'vue'
import { RepositoryFactory } from '../repositories/RepositoryFactory.js'

const hops = ref([]);
const submitted = ref(false);
var newHops = {
    id: null,
    name: '',
    averageAa: ''
};

const fetch = () => {
    RepositoryFactory.get('hopsRepository').get()
    .then((response) => {
        hops.value = response.data;
        console.log('recieved ' + response.data.length + ' hops from backend');
        console.log(response.data);

    })
    .catch((err) => {
        console.log("ERROR");
        console.log(err);
    });
}

fetch();

const saveHops = () => {
    console.log('in saveHops');
    var data = {
        name: newHops.name,
        average_aa: parseFloat(newHops.averageAa)
    }
    if (isNaN(data.average_aa)) {
        // handle invalid input
        console.log('not a float!')
    } else {
        RepositoryFactory.post('hopsRepository').post(data)
            .then((response) => {
                console.log(response.data);
            newHops.id = response.data._id;
            submitted.value = true;
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });

    }
}

const addHops = () => {
    submitted.value = false;
    newHops = {};
}

const deleteHops = (id) => {
    console.log(id);
    RepositoryFactory.delete('hopsRepository').delete(id)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });
}

</script>

<style scoped>
</style>