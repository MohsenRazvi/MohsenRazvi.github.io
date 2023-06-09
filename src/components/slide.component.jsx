
export const Slide = ({props}) => {
    
    const {title,techs} = props
    
    return (
        <>
        
        <div style={{display:'flex',flexDirection:'row',justifyItems:'space-evenly',position:'relative',alignItems:'center',width:'80%'}}>
            <div>
                <h2>{title}</h2>

            </div>
            <div style={{marginLeft:'30%',display:'flex',flexFlow:'row wrap'}}>
                {techs.map(tech =>(
                    <div style={{backgroundColor:'rgba(0,0,0,0.4)',margin:'4%',padding:'2px 10px',borderRadius:'7px'}} key={tech}>{tech}</div>
                ))}
                
            

            </div>
          
        </div>
        
        </>
    )
}