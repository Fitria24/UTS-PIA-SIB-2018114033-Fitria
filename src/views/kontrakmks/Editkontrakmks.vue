<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Kontrak Matakuliah</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="kontrakmk.mahasiswa_id"
          />
          <div class="alert alert-danger" v-if="validation.mahasiswa_id">
            {{ validation.mahasiswa_id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Semester</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="kontrakmk.semester_id"
          />
          <div class="alert alert-danger" v-if="validation.semester_id">
            {{ validation.semester_id[0] }}
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
    const kontrakmk = reactive({
      mahasiswa_id: "",
      semester_id: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/kontrakmks/${route.params.id}`)
        .then((response) => {
          console.log(response.data.data.mahasiswa_id);

          kontrakmk.mahasiswa_id = response.data.data.mahasiswa_id;
          kontrakmk.semester_id = response.data.data.semester_id;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function update() {
      let mahasiswa_id = kontrakmk.mahasiswa_id;
      let semester_id = kontrakmk.semester_id;

      axios
        .put(`http://127.0.0.1:8000/api/kontrakmks/${route.params.id}`, {
          mahasiswa_id: mahasiswa_id,
          semester_id: semester_id,
        })
        .then(() => {
          router.push({
            name: "Kontrak",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      kontrakmk,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>