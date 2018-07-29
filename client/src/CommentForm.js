import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props){
      super(props);
      this.state= { user:'', comment:''};
      //this.addComment=this.addComment.bind(this);
    }

    handleChange= (event)=>{
       this.setState({[event.target.id]: event.target.value});
       console.log(this.state);
    }
    
    addComment = (event) => {
        event.preventDefault();
        this.props.addComment(this.props.index, this.state);
    }


    render() {
        return (

            <form onSubmit={this.addComment}> 
            
            <input
            type='text' 
            placeholder= 'enter your name'
            id='user'
            value={this.state.user}
            onChange={this.handleChange}
            />

            <input 
            type = 'text' 
            placeholder = 'enter comment'
            id='comment'
            value= {this.state.comment}
            onChange= {this.handleChange}/>

            <span>
                <button type = 'submit' > Go! </button >
            </span>
        </form>

            
        );
    }
}

export default CommentForm;