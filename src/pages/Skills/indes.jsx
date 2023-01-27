import './style.css'
import Img1 from '../../assets/html.png'
import Img2 from '../../assets/css.png'
import Img3 from '../../assets/sass.png'
import Img4 from '../../assets/bootstrap.png'
import Img5 from '../../assets/js.png'
import Img6 from '../../assets/react.png'
import Img7 from '../../assets/vue.png'
import Img8 from '../../assets/github.png'

function Skills() {
  return (
    <div className="Skills">
        <ul>
            <li>
                <img src={Img1} alt="" />
                <div className="SkillBox">
                    <h4>HTML5</h4>
                    <div className="SkillBoxInto SkillsKeyUp1">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img2} alt="" />
                <div className="SkillBox">
                    <h4>Css</h4>
                    <div className="SkillBoxInto SkillsKeyUp2">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img3} alt="" />
                <div className="SkillBox">
                    <h4>Sass</h4>
                    <div className="SkillBoxInto SkillsKeyUp3">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img4} alt="" />
                <div className="SkillBox">
                    <h4>BootStrap, Materialize UI, AOS</h4>
                    <div className="SkillBoxInto SkillsKeyUp4">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img5} alt="" />
                <div className="SkillBox">
                    <h4>JavaScript</h4>
                    <div className="SkillBoxInto SkillsKeyUp5">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img6} alt="" />
                <div className="SkillBox">
                    <h4>React.js</h4>
                    <div className="SkillBoxInto SkillsKeyUp6">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img7} alt="" />
                <div className="SkillBox">
                    <h4>Vue.js</h4>
                    <div className="SkillBoxInto SkillsKeyUp7">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
            <li>
                <img src={Img8} alt="" />
                <div className="SkillBox">
                    <h4>GitHub, Git</h4>
                    <div className="SkillBoxInto SkillsKeyUp8">
                        <div className="SkillInto"></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default Skills;
