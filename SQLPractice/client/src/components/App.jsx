import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      updated: "text will change if button works",
    };
    this.getText = this.getText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount fires!');
    this.getText()
  }

  getText() {
    console.log('getText fires!');
    fetch('/text')
        .then((data) => {
          return data.json()})
        .then((updated) => {
          return JSON.stringify(updated)})
        .then((string) => {
          this.setState({
            updated: string
          })
        })

  }

  handleChange(e) {
    console.log(e.target.value);
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit fires');
    let data = {
      text: this.state.text
    };

    fetch('/test', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    this.getText()
  }

  render(){
    return(
      <div>
        <p>React is working!</p>
        <p>{this.state.updated}</p>
        <form onSubmit={this.handleSubmit}>
          <label> Text
            <input name="text" value={this.state.text} onChange={this.handleChange}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
