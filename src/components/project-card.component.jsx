import '../App.css';

export const ProjectCard = ({id,title,description,link}) => {
    return(
        <div className="Card-box">
            <div className="Card-title">{title}</div>
            <div className="Card-desc">{description}</div>
            <button className="Card-btn" href={link}>
                <a
                className="App-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                >
                See this project on GitHub
                </a>
                </button>
                
        </div>
    )
}