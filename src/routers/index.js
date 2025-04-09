import configs from "~/configs";
import { AboutPage, ContactPage, HomePage, MenuPage } from "~/pages";

const publicRouter = [
    { path: configs.router.home, component: HomePage },
    { path: configs.router.menu, component: MenuPage },
    { path: configs.router.contact, component: AboutPage },
    { path: configs.router.about, component: ContactPage },
]

const privateRouter = [

]

export { publicRouter, privateRouter }