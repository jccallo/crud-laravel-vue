// componentes
const Home = () => import('./components/Home.vue')
const Contact = () => import('./components/Contact.vue')

//importamos los componentes para bookmark
const Index = () => import('./components/bookmark/Index.vue')
const Create = () => import('./components/bookmark/Create.vue')
const Edit = () => import('./components/bookmark/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'index-bookmark',
        path: '/index',
        component: Index
    },
    {
        name: 'create-bookmark',
        path: '/create',
        component: Create
    },
    {
        name: 'edit-bookmark',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    }
]
