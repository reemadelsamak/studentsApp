<template>
  <div class="g-0">
    <nav class="nav bg-dark text-light g-0 py-3 d-flex justify-content-around">
      <router-link
        to="/"
        @click.prevent="targetComponent = 'students'"
        :class="[
          'nav-link',
          'text-decoration-none',
          targetComponent == 'students' ? 'active' : 'notactive',
        ]"
        >Students</router-link
      >
      <router-link
        to="/about"
        @click.prevent="targetComponent = 'about'"
        :class="[
          'nav-link',
          'text-decoration-none',
          targetComponent == 'about' ? 'active' : 'notactive',
        ]"
        >About</router-link
      >
      <router-link
        to="/contact"
        @click.prevent="targetComponent = 'contact'"
        :class="[
          'nav-link',
          'text-decoration-none',
          targetComponent == 'contact' ? 'active' : 'notactive',
        ]"
        >Contact</router-link
      >
    </nav>
    <keep-alive>
      <component :is="targetComponent" />
    </keep-alive>
  </div>
</template>

<script>
import students from "./studentsComponent.vue";
import about from "./aboutComponent.vue";
import contact from "./contactComponent.vue";
export default {
  props: ["branch"],
  data: () => ({
    targetComponent: "",
  }),
  components: { students, about, contact },
};
</script>

<style>
.nav-link:hover {
  color: gray;
}
.active {
  color: yellow;
}
.notactive {
  color: white;
}
</style>
