import './style.css'
import SideImg from '../../assets/Abdurahmon.jpeg'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="VideSide">
        <div className="sidebar">
            <img src={SideImg} alt="" />
            <ul>
                <NavLink to="/"><li><h3>Home</h3></li></NavLink>
                <NavLink to="/about"><li><h3>About</h3></li></NavLink>
                <NavLink to="/skills"><li><h3>Skills</h3></li></NavLink>
                <NavLink to="/portifolio"><li><h3>Portifolio</h3></li></NavLink>
                <NavLink to="/contact"><li><h3>Contact</h3></li></NavLink>
            </ul>
            <h4 className="sidebarTitle">@2022-2023</h4>
            <h4>By ♪𝔸𝕊𝔻</h4>
        </div>
    </div>
  );
}

export default Sidebar;
