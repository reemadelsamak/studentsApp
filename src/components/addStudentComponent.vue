<template>
  <div>
    <div class="modal fade" id="addModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="text-center">Add New Student</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="content" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="content"
                required
                v-model="stdName"
              />
            </div>
            <div class="form-group">
              <label for="content" class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                name="content"
                required
                v-model="stdCity"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-success"
              @click="sendData"
              data-bs-dismiss="modal"
            >
              Add
            </button>
            <button class="btn btn-danger" data-bs-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    stdName: "",
    stdCity: "",
  }),
  methods: {
    sendData() {
      let stdInfo = { name: this.stdName, city: this.stdCity };
      this.$emit("newStudentAdded", stdInfo);
    },
  },
  computed: {},
  components: {},
  emits: ["newStudentAdded"],
};
</script>
