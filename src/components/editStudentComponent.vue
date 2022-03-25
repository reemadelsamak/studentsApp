<template>
  <div
    class="modal fade"
    id="editModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-center">Edit Student: {{ student.name }}</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="content" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              name="content"
              required
              :placeholder="student.name"
              v-model="newStdName"
            />
          </div>
          <div class="form-group">
            <label for="content" class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              name="content"
              required
              :placeholder="student.city"
              v-model="newStdCity"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-success"
            @click="sendData"
            data-bs-dismiss="modal"
          >
            Update
          </button>
          <button class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data: () => ({
    newStdName: "",
    newStdCity: "",
  }),
  methods: {
    sendData() {
      let stdNewInfo = {
        id: this.student.id,
        name: this.newStdName,
        city: this.newStdCity,
      };
      this.$emit("studentUpdated", stdNewInfo);
    },
  },
  computed: {},
  components: {},
  emits: ["studentUpdated"],
};
</script>
