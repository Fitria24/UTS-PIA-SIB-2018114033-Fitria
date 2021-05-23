<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Absensi</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Waktu Absen</label>
          <input
            type="datetime"
            class="form-control"
            id="inputEmail4"
            v-model="absensi.waktu_absen"
          />
          <div class="alert alert-danger" v-if="validation.waktu_absen">
            {{ validation.waktu_absen[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama Mahasiswa </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="absensi.mahasiswa_id"
          />
          <div class="alert alert-danger" v-if="validation.mahasiswa_id">
            {{ validation.mahasiswa_id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">Matakuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputAddres"
            v-model="absensi.matakuliah_id"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah[0] }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputAddres"
            v-model="absensi.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const absensi = reactive({
      waktu_absen: "",
      mahasiswa_id: "",
      matakuliah_id: "",
      keterangan: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/absensis/${route.params.id}`)
        .then((response) => {
          console.log(response.data.data.waktu_absen);

          absensi.waktu_absen = response.data.data.waktu_absen;
          absensi.mahasiswa_id = response.data.data.mahasiswa_id;
          absensi.matakuliah_id = response.data.data.matakuliah_id;
          absensi.keterangan = response.data.data.keterangan;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function update() {
      let waktu_absen = absensi.waktu_absen;
      let mahasiswa_id = absensi.waktu_absen;
      let matakuliah_id = absensi.matakuliah_id;
      let keterangan = absensi.keterangan;

      axios
        .put(`http://127.0.0.1:8000/api/absensis/${route.params.id}`, {
          waktu_absen: waktu_absen,
          mahasiswa_id: mahasiswa_id,
          matakuliah_id: matakuliah_id,
          keterangan: keterangan,
        })
        .then(() => {
          router.push({
            name: "Absen",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      absensi,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>