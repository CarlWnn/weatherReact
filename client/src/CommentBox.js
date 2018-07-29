import React from 'react';

const CommentBox = (props) =>  {

const deleteComment= () =>{
    props.deleteComment(props.index, props.indexComment);
};


        return (
            <div>
               <span className="glyphicon glyphicon-trash pull-right" onClick={this.deleteComment}></span>
               <p>written by : {props.comment.user}  - {props.comment.comment} </p>
            </div>
        );
    
}

export default CommentBox;