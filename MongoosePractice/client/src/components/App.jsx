import React from 'react'
import $ from 'jquery';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "",
      updated: ""
    };
    this.getText = this.getText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getText()
  }

  getText(){
    $.get('/test')
        .then((data) => {
          console.log(data);
          data = JSON.stringify(data);
          this.setState({
            updated: data
          })
        })
  }

  handleSubmit(e){
    e.preventDefault();
    let object = {
      text: this.state.text
    };

    fetch('/test', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(object)
    });

    this.getText();
  }

  handleChange(e) {
    let update = {};
    update[e.target.name]=e.target.value;
    this.setState(update)
  }

  render(){
    return(
      <div>
        <p>React Works!</p>
        <form onSubmit={this.handleSubmit}>
          <label> Text
            <input value={this.state.text} name='text' onChange={this.handleChange}/>
          </label>
          <p>This is updated data</p>
          <p>{this.state.updated}</p>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
