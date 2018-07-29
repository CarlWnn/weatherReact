import React  from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
    // console.log("in weather list box");
   // console.log(props);
        return (
            <div className='row'>

              {props.boxes.map( 
                   (box, index)=> <WeatherBox key={index} index={index} box={box}  
                    deleteBox={props.deleteBox}
                   addComment={props.addComment}
                   deleteComment={props.deleteComment} />                  
               ) }

            </div>
        );
    
}

export default WeatherListBox;