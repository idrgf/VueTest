import Accueil from './components/Accueil'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Post from './components/Post'
import Meteo from './components/Meteo'

export default [
    {path: '/', component: Accueil},
    {path: '/blog', component: Blog},
    {path: '/Contact', component: Contact},
    {path: '/blogpost/:id', component: Post},
    {path: '/Meteo', component: Meteo}
]