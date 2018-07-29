import React from 'react';
import CommentBox from './CommentBox';

const CommentListBox = function(props) {
    // console.log('comments');
    props.comments.map((comment, indexComment)=> {console.log("hi") });
    // console.log(props.comments)
        return (
            <div>
                  {props.comments.map( 
                   (comment, indexComment)=> <CommentBox comment= {comment} index={props.index}  
                   indexComment={indexComment}
                   deleteComment={props.deleteComment}/>
                   )}
            </div>
        );
    
}

export default CommentListBox;