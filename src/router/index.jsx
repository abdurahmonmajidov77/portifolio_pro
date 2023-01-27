import { Routes , Route } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import {DataRouter} from './data-router'

function RoutesComponent() {
    return(
        <div className="Routers">
            <Sidebar/>
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id} path={elem.path}  element={elem.Element}/>
                )}
            </Routes>
        </div>
    )
}

export default RoutesComponent