<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add kontrak matakuliah</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Mahasiswa </label>
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
          <label for="inputEmail4" class="form-label">Semester </label>
          <input
            type="number"
            class="form-control"
            id="inputEmail4"
            v-model="kontrakmk.semester_id"
          />
          <div class="alert alert-danger" v-if="validation.semester_id">
            {{ validation.semester_id[0] }}
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const kontrakmk = reactive({
      mahasiswa_id: "",
      semester_id: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let mahasiswa_id = kontrakmk.mahasiswa_id;
      let semester_id = kontrakmk.semester_id;

      axios
        .post("http://127.0.0.1:8000/api/kontrakmks", {
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
      store,
    };
  },
};
</script>