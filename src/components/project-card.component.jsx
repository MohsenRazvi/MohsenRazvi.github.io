import '../App.css';

export const ProjectCard = ({id,title,description,link,techs}) => {
    return(
        <div className="Card-box">
            <div className="Card-title">{title}</div>
            <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'center',marginBottom:'3%'}}>
                {techs.map((tech) => (
                    <div style={{backgroundColor:'rgba(255,255,255,0.3)',margin:'1%',padding:'2px 4px',borderRadius:'7px',fontSize:'16px'}}><code>{tech}</code></div>
                ))}

            </div>
            <ul>
            {description.map((bullet) =>(

                <li className="Card-desc">{bullet}</li>
            ))}

            </ul>
            
            <button className="Card-btn" onClick={() => window.location.href = 'mailto:mohsenrazvi@gmail.com'}>
                {/* <a
                className="App-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                >
                See this project on GitHub
                </a> */}
                Ask me about this project
            </button>
                
        </div>
    )
}