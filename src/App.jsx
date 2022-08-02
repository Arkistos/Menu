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
    this.props.toggleMenu(this.state.display) 
    this.setState((s,p)=>({display: !s.display}))
  }  

  
  render()
  {
    const logo = 
    <svg onClick={this.click} viewBox="0 0 100 80" width="40" height="40">
      <line id={`${this.state.display?'cross':'burger'}-Up`} strokeWidth='5' stroke='black' x1="0" y1="0" x2="40" y2="0"></line>
      <line id={`${this.state.display?'cross':'burger'}-Middle`} strokeWidth='5' stroke='black' x1="0" y1="10" x2="40" y2="10"></line>
      <line id={`${this.state.display?'cross':'burger'}-Down`} strokeWidth='5' stroke='black' x1="0" y1="20" x2="40" y2="20"></line>
    </svg>
    return (
      <main>
        {logo}
      </main>
    );
  }
}



