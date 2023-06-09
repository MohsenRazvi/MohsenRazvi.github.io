import "../App.css";

export const Carousel = ({stacks}) =>{
    return(
        <div className='App-carousel'>
          <div className='App-carousel-inner'>
            {/* <div>thing</div> */}
            {stacks.map((stack) => {
              return (
                <div key={stack} className="App-carousel-item">
                  {stack}
                </div>
              );
            })}
            {stacks.map((stack) => {
              return (
                <div className="App-carousel-item">
                  {stack}
                </div>
              );
            })}
          </div>
        </div>
    )
}