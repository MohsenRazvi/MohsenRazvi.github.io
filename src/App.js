import logo from './logo.svg';
import './App.css';
import projectsList from "./projects.json"
import { ProjectCard } from './components/project-card.component';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Carousel } from './components/carousel.component';

function App() {
  const data=projectsList.projects
  const stacks=projectsList.techs
  return (
    <div className="App">
      <div className='App-tag'>
        <div>Mohsen Razvi</div>
        <div style={{display:'flex'}}>
          <div>Software Engineer | </div>
          <div> Full Stack Developer | </div>
          <div>Quant Developer</div>

        </div>
        <button style={{backgroundColor:'red',fontFamily:'inherit',height:'50%'}} onClick={() => window.location.href = 'mailto:mohsenrazvi@gmail.com.com'}>Contact Me</button>

      </div>
      <Carousel stacks={stacks}/>

      <header className="App-header">
        <AwesomeSlider style={{height:'40vh'}}>
          <div>Python</div>
          <div>Javascript</div>
          <div>Docker</div>
        </AwesomeSlider>
        <div className='Card-container'>
          {data.map((project)=>(
            <ProjectCard {...project} />
            ))}
        </div>
      </header>
      <footer className="App-footer">
        Built with React.js
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Work with me
          <button>Send me an email</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
