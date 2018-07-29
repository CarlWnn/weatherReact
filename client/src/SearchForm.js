import React, { Component } from 'react';
import axios from 'axios';

//let API_KEY = "8928afe185b64e91abd90158182707";


class SearchForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {city: ''};
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
    }

    handleInputChange(event){
    
       this.setState({city: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        // console.log(this.state.city);
       // let url = "http://api.apixu.com/v1/current.json?key=" + API_KEY + "q=" + this.state.city;
       let url = "http://api.apixu.com/v1/current.json?key=8928afe185b64e91abd90158182707&q=" + this.state.city;


            axios.get(url) //<==Calling axios with a get request and pass the url
            .then(response => {

              let structured_data={
                name: response.data.location.name,
                icon: response.data.current.condition.icon,
                temp: response.data.current.temp_c,
                text: response.data.current.condition.text,
                comments: []

              }

                this.props.addBox(structured_data)
                this.setState({city:''})
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 

                <input 
                type = 'text' 
                placeholder = 'enter city'
                value= {this.state.city}
                onChange= {(event)=> this.setState({city: event.target.value})} />

                <span>
                    <button type = 'submit' > Go! </button >
                </span>
            </form>
        );
    }
}

export default SearchForm;