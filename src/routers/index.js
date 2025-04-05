import { AboutPage, ContactPage, HomePage, MenuPage } from "~/pages";

const publicRouter = [
    { path: '/', component: HomePage },
    { path: '/menu', component: MenuPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
]

const privateRouter = [

]

export { publicRouter, privateRouter }