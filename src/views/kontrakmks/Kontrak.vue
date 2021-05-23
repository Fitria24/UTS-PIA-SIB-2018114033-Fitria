<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createkontrakmks">Add kontrak matakuliah</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
     <th scope="col">Nama Mahasiswa</th>
     <th scope="col">Semester</th>
     <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(kontrakmk, index) in kontrakmks" :key="index">
      <td>{{ kontrakmk.mahasiswa_id}}</td>
        <td>{{ kontrakmk.semester_id}}</td>
        
       <td>
        <router-link class="btn btn-success" :to="{name:'Editkontrakmks', params:{id:kontrakmk.id}}">Edit</router-link>
        <button @click.prevent="kontrakmkDelete(kontrakmk.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import {ref, onMounted } from 'vue';

export default {
  name: 'Kontrak',
  components: {
    Slider,
  },
  setup(){
    let kontrakmks = ref([])

    onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/kontrakmks')
    .then(response => {
      kontrakmks.value = response.data.data
    })
     .catch(error => {
       console.log(error)
     })
    })
  
  function kontrakmkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/kontrakmks/${id}`)
      .then(()=>{
        let z = this.kontrakmks.map(kontrakmks => kontrakmks.id).indexOf(id);
        this.kontrakmks.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      kontrakmks,
      kontrakmkDelete
    }
  }
};
</script>