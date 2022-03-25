import { createRouter, createWebHistory } from "vue-router";
import wrapperComponent from '../wrapperComponent.vue'
import landingComponent from '../components/landingComponent.vue'
import viewStudentComponent from '../components/viewStudentComponent.vue'
import aboutComponent from '../components/aboutComponent.vue'
import contactComponent from '../components/contactComponent.vue'
import catchComponent from '../components/catchComponent.vue'

//Array of Routes Objext [{path:'/', component}]
const routes = [
    { path: '', component: landingComponent },
    // { path: '/students', component: wrapperComponent },
    { path: '/studentsInfo/:id', component: viewStudentComponent, props: true },
    { path: '/about', component: aboutComponent },
    { path: '/contact', component: contactComponent },


    //must be the last one
    { path: '/:catchAll(.*)', component: catchComponent },
];

//router object --> createRouter({history:createWebHistory(), array})
const router = createRouter({
    history: createWebHistory(),
    routes
});


//export router object
export default router;
