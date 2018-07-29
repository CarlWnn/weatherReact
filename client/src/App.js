import React, { Component } from 'react';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state={ boxes:[] };

  }

 
  addBox= (box) =>{  //  onSubmitSearchForm(data) { 
    this.setState({boxes: this.state.boxes.concat(box)});
  }
  
  deleteBox= (index)=> {
     this.setState({boxes: this.state.boxes.splice(index,1)})
  }

  addComment=(index, comment_obj)=> {
    let array = [...this.state.boxes]
    array[index].comments.push(comment_obj);
    //console.log('array');
    //console.log( array);
    this.setState({boxes: array});
    //this.setState({boxes: this.state.boxes[index].comments.push(comment_obj, {a: "b"})}); 
    console.log("boxes:");
    console.log(this.state.boxes);
  }

  deleteComment=(indexBox, indexComment) =>{
     this.setState({boxes: this.state.boxes[indexBox].comments.splice(indexComment,1) })
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm addBox={this.addBox}/>
        </div>
        <WeatherListBox boxes={this.state.boxes} deleteBox={this.deleteBox} 
        addComment= {this.addComment} deleteComment={this.deleteComment}/>
      </div>

    );
  }
}

export default App;
