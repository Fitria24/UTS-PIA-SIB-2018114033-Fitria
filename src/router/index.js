import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswas/Home.vue'
import Index from '../views/matakuliahs/Index.vue'
import Absen from '../views/absensis/Absen.vue'
import Jadwal from '../views/jadwals/Jadwal.vue'
import Kontrak from '../views/kontrakmks/Kontrak.vue'
import Semester from '../views/semesters/Semester.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'
import Createabsensis from '../views/absensis/Createabsensis.vue'
import Editabsensis from '../views/absensis/Editabsensis.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Editjadwals from '../views/jadwals/Editjadwals.vue'
import Createkontrakmks from '../views/kontrakmks/Createkontrakmks.vue'
import Editkontrakmks from '../views/kontrakmks/Editkontrakmks.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'
const routes = [
  {
    path: '/mahasiswas',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswas',
    name: 'Createmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswas
  },
 {
    path: '/matakuliahs',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  },
  {
     path: '/absensis',
     name: 'Absen',
     component: Absen
   },
   {
     path: '/createabsensis',
     name: 'Createabsensis',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: Createabsensis
   },
   {
     path: '/editabsensis/:id',
     name: 'Editabsensis',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: Editabsensis
     
    },
    {
       path: '/jadwals',
       name: 'Jadwal',
       component: Jadwal
     },
     {
       path: '/createjadwals',
       name: 'Createjadwals',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: Createjadwals
     },
     {
       path: '/editjadwals/:id',
       name: 'Editjadwals',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: Editjadwals
      },
      {
         path: '/kontrakmks',
         name: 'Kontrak',
         component: Kontrak
       },
       {
         path: '/createkontrakmks',
         name: 'Createkontrakmks',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: Createkontrakmks
       },
       {
         path: '/editkontrakmks/:id',
         name: 'Editkontrakmks',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: Editkontrakmks

        },
        {
           path: '/semesters',
           name: 'Semester',
           component: Semester
         },
         {
           path: '/createsemesters',
           name: 'Createsemesters',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component: Createsemesters
         },
         {
           path: '/editsemesters/:id',
           name: 'Editsemesters',
           // route level code-splitting
           // this generates a separate chunk (about.[hash].js) for this route
           // which is lazy-loaded when the route is visited.
           component: Editsemesters
       
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router