<template>
  <div class="container-fluid">
    <div class="row">
      <headerComponent />
    </div>
    <router-view> </router-view>
    <div class="row">
      <footerComponent />
    </div>
  </div>
</template>

<script>
import headerComponent from "./components/headerComponent.vue";
// import viewStudentComponent from "./components/viewStudentComponent.vue";
// import studentsComponent from "./components/studentsComponent.vue";
import footerComponent from "./components/footerComponent.vue";

export default {
  data: () => ({
    student: false,
  }),
  methods: {},
  computed: {},
  components: {
    headerComponent,
    // viewStudentComponent,
    // studentsComponent,
    footerComponent,
  },
};
</script>
