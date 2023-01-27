import './style.css'
import AboutImg from '../../assets/Abdurahmon Majidov.jpg'

function About() {
  return (
    <div className="About">
        <img src={AboutImg} alt="" />
        <div class="AboutBox">
            <h1>About Me</h1>
            <p>Hello my name is Abdurahmon. I interested play football, basketball, valleyball and other games. I interested listen music, create code with drink coffee or tea too. If you interst to me you can take more info about me on home page in my online applications. If i look like's to good you can hire me. I can know about more information on coding. If i could not know about that information coding, i can learn it.</p>
        </div>
    </div>
  );
}

export default About;
