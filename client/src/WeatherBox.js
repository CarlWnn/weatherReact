import React from 'react';
import CommentForm from './CommentForm';
import CommentListBox from './CommentListBox';

const WeatherBox = (props) => {

     const deleteBox= () =>{
       props.deleteBox(props.index);
     };

//   console.log(props);

        return (
        <div>

         <div>
           <span className="glyphicon glyphicon-trash pull-right" onClick={deleteBox}></span>

           <div className="media-left">
            <img src={props.box.icon} alt={props.box.name} className="media-object" style={{ width: 60}}/>
           </div>

          <div className="media-body">
            <h4 className="media-heading">{props.box.name}</h4>
            <p>{props.box.text}- {props.box.temp} &nbsp;| C</p>
          </div>
         </div>

        <CommentForm index={props.index} addComment={props.addComment}/>
        <hr/>
        <CommentListBox comments={props.box.comments}  index={props.index}
         deleteComment={props.deleteComment}/>
        
        </div>
        )
    
}

export default WeatherBox;