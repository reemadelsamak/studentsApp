<template>
  <main>
    <!-- Modals -->
    <AddStudentComponent @newStudentAdded="addNewStudent" />
    <EditStudentComponent @studentUpdated="editStudent" :student="student" />

    <div class="row m-5">
      <div class="col-md-3">
        <ul class="list-group">
          <li class="list-group-item">
            <a href="#" class="text-decoration-none">Home</a>
          </li>
          <li class="list-group-item">
            <a href="#" class="text-decoration-none">About</a>
          </li>
          <li class="list-group-item">
            <a href="#" class="text-decoration-none">Contact</a>
          </li>
          <li class="list-group-item">
            <a href="#" class="text-decoration-none">Gallary</a>
          </li>
        </ul>
      </div>

      <div class="col-md-9 d-flex flex-column">
        <table class="table table-bordered table-striped text-center">
          <thead class="thead-light">
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>
                <router-link :to="'/studentsInfo/' + student.id">{{
                  student.name
                }}</router-link>
              </td>
              <td>{{ student.city }}</td>
              <td>
                <i
                  class="fa-solid fa-pen-to-square btn btn-warning"
                  @click="sendEditValues(student.id)"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                ></i>
                |
                <i
                  class="fa-solid fa-xmark btn btn-danger"
                  @click="deleteStudent(student.id)"
                ></i>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Number of students : {{ students.length }}</th>
            </tr>
          </tfoot>
        </table>
        <button
          class="btn btn-success mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add Student
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import AddStudentComponent from "./addStudentComponent.vue";
import EditStudentComponent from "./editStudentComponent.vue";
import viewStudentComponent from "./viewStudentComponent.vue";

export default {
  data: () => ({
    student: "",
    students: [],
  }),
  // Fetch Students Data from DB
  async created() {
    const res = await fetch("http://localhost:5000/students");
    this.students = await res.json();
  },
  methods: {
    addNewStudent(newStudent) {
      fetch("http://localhost:5000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      this.students.push(newStudent);
    },

    async deleteStudent(studentID) {
      await fetch(`http://localhost:5000/students/${studentID}`, {
        method: "DELETE",
      });

      this.students.splice(
        this.students.findIndex((std) => std.id == studentID),
        1
      );
    },
    async editStudent(updatedStudent) {
      await fetch(`http://localhost:5000/students/${updatedStudent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      this.students.find((std) => std.id == updatedStudent.id).name =
        updatedStudent.name;
      this.students.find((std) => std.id == updatedStudent.id).city =
        updatedStudent.city;
    },
    async sendEditValues(studentID) {
      const res = await fetch(`http://localhost:5000/students/${studentID}`);
      this.student = await res.json();
    },
  },
  computed: {},
  components: {
    AddStudentComponent,
    EditStudentComponent,
  },
  emits: ["newStudentAdded,studentUpdated"],
};
</script>

<style scoped></style>
