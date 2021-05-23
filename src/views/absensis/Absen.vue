<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createabsensis">Add Absensis</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
     <th scope="col">Waktu Absen</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Matakuliah</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(absensi, index) in absensis" :key="index">
      <td>{{absensi.waktu_absen}}</td>
      <td>{{ absensi.mahasiswa_id}}</td>
      <td>{{ absensi.matakuliah_id}}</td>
      <td>{{ absensi.keterangan}}</td>
      
       <td>
        <router-link class="btn btn-success" :to="{name:'Editabsensis', params:{id:absensi.id}}">Edit</router-link>
        <button @click.prevent="absensiDelete(absensi.id)" class="btn btn-danger">Delete</button>
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
  name: 'Absen',
  components: {
    Slider,
  },
  setup(){
    let absensis = ref([])

    onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/absensis')
    .then(response => {
      absensis.value = response.data.data
    })
     .catch(error => {
       console.log(error)
     })
    })
  
  function absensiDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/absensis/${id}`)
      .then(()=>{
        let z = this.absensis.map(absensis => absensis.id).indexOf(id);
        this.absensis.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      absensis,
      absensiDelete
    }
  }
};
</script>