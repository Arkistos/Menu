import * as React from 'react';
import './App.css';

export default class ToggleButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      display: false
    }
    this.click = this.click.bind(this)
  }

  click(){
    this.props.toggleMenu(!this.state.display) 
    this.setState((s,p)=>({display: !s.display}))
  }  

  
  render()
  {
    return (
      <div id='toggle'>
        <svg id='toggleButton' onClick={this.click}  width="40" height="40">
          <line id={`${this.state.display?'cross':'burger'}-Up`} strokeWidth='2' stroke='black' x1="5" y1="10" x2="40" y2="10"></line>
          <line id={`${this.state.display?'cross':'burger'}-Middle`} strokeWidth='2' stroke='black' x1="5" y1="20" x2="40" y2="20"></line>
          <line id={`${this.state.display?'cross':'burger'}-Down`} strokeWidth='2' stroke='black' x1="5" y1="30" x2="40" y2="30"></line>
        </svg>
      </div>
    );
  }
}



