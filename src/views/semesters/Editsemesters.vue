<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Semester</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Semester</label>
          <input
            type="number"
            class="form-control"
            id="inputEmail4"
            v-model="semester.semester"
          />
          <div class="alert alert-danger" v-if="validation.semester">
            {{ validation.semester[0] }}
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
    const semester = reactive({
      semester: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://127.0.0.1:8000/api/semesters/${route.params.id}`)
        .then((response) => {
          console.log(response.data.data.semester);

          semester.semester = response.data.data.semester;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    function update() {
      let semester = semester.semester;

      axios
        .put(`http://127.0.0.1:8000/api/semesters/${route.params.id}`, {
          semester: semester,
        })
        .then(() => {
          router.push({
            name: "Semester",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      semester,
      validation,
      router,
      update,
      route,
    };
  },
};
</script>