import Home from '../pages/Home'
import About from '../pages/About'

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
]