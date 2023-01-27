import './style.css'
import SideImg from '../../assets/Abdurahmon.jpeg'

function Sidebar() {
  return (
    <div className="VideSide">
        <div className="sidebar">
            <img src={SideImg} alt="" />
            <ul>
                <li><h3>Home</h3></li>
                <li><h3>About</h3></li>
                <li><h3>Skills</h3></li>
                <li><h3>Portifolio</h3></li>
                <li><h3>Contact</h3></li>
            </ul>
            <h4 className="sidebarTitle">@2022-2023</h4>
            <h4>By ♪𝔸𝕊𝔻</h4>
        </div>
    </div>
  );
}

export default Sidebar;
