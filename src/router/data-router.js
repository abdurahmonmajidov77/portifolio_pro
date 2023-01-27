import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills/indes'

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/about',
        Element : <About/>
    },
    {
        id : 3,
        path : '/skills',
        Element : <Skills/>
    },
]