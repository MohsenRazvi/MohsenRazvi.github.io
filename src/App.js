import logo from './logo.svg';
import './App.css';
import projectsList from "./projects.json"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import { ProjectCard } from './components/project-card.component';
import { Slide } from './components/slide.component';
import { Carousel } from './components/carousel.component';

import bg0 from './images/py.jpg'
import bg1 from './images/cloud.jpg'
import bg2 from './images/front.jpg'
import bg3 from './images/main.jpg'

function App() {
  const data=projectsList.projects
  const stacks=projectsList.techs
  const slides=projectsList.slides

  const AutoplaySlider =  withAutoplay(AwesomeSlider);
  
  return (
    <div className="App">
      <div className='App-tag'>
        <div>Mohsen Razvi</div>
        <div style={{display:'flex',fontSize:'15px'}}>
          <div>Software Engineer|</div>
          <div> Full Stack Developer| </div>
          <div>Quant Developer</div>

        </div>
        <button className='Card-btn'  onClick={() => window.location.href = 'mailto:mohsenrazvi@gmail.com'}>Contact Me</button>
        
      </div>
      <Carousel stacks={stacks}/>

      <header className="App-header">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        style={{height:'50vh'}}
      >
          <div style={{backgroundImage:`url(${bg3})`,backgroundSize:'cover',backgroundPosition:'0% 40%'}}>
            <Slide {...slides[0]}/>
          </div>
          <div style={{backgroundImage:`url(${bg0})`,backgroundSize:'cover',backgroundPosition:'0% 10%'}}>
            <Slide {...slides[1]}/>
          </div>
          <div style={{backgroundImage:`url(${bg2})`,backgroundSize:'cover',backgroundPosition:'0% 50%'}}>
            <Slide {...slides[2]}/>
          </div>
          <div style={{backgroundImage:`url(${bg1})`,backgroundSize:'cover',backgroundPosition:'0% 30%'}}>
            <Slide {...slides[3]}/>
          </div>

      </AutoplaySlider>
        
        <div className='Section-title'>Projects</div>
        
        <div className='Card-container'>
          {data.map((project)=>(
            <ProjectCard {...project} />
            ))}
          
        </div>
        <div className='Section-title'style={{margin:'0% 0% 3% 10%'}} >More projects coming soon...</div>
      </header>
      <footer className="App-footer">
        <div style={{display:'flex',alignItems:'center'}}>
          <code>Built with React.js</code>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          {/* style={{backgroundColor:'#2594fd',fontFamily:'inherit',height:'50px',width:'150px',border:'2px solid white',borderRadius:'5px 5px',color:'white'}} */}
        <button className='Card-btn' style={{marginLeft:'0'}} onClick={() => window.location.href = 'mailto:mohsenrazvi@gmail.com'}>Contact Me</button>
        </div>
      </footer>
    </div> 
  );
}

export default App;
