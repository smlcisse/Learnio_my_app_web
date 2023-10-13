/*import React from 'react'

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p style={{color:this.state.color}}>
            It is a {this.state.color}  {this.state.model} from {this.state.year}.
          </p>
          <button
            type="button" onClick={this.changeColor}>Change color</button>
        </div>);
    }
  }

  export default Car*/

  import React from 'react'

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    componentWillMount = ()=>{
        console.log('Le composant sera affiché.')
    }
    componentDidMount = ()=>{
        console.log('Le composant est affiché.')
    }
    componentDidUpdate = ()=>{
        console.log('Le composant a été mis à jour.')
    }

    compo
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p style={{color:this.state.color}}>
            It is a {this.state.color}  {this.state.model} from {this.state.year}.
          </p>
          <button
            type="button" onClick={this.changeColor}>Change color</button>
        </div>);
    }
  }

  export default Car