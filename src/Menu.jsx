import * as React from 'react';
import ToggleButton from './ToggleButton';

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: false
    }
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton(state){
    this.setState({display: state})
  }

  


  render(){
    return(
      <div className={`menu ${this.state.display?'menu-on':'menu-off'}`}>
        <ToggleButton toggleMenu={this.clickButton}/>
        <div id='nav'>
          <a href='#'>section 1</a>
          <a href='#'>section 2</a>
          <a href='#'>section 3</a>
          <a href='#'>section 4</a>
        </div>
      </div>
    )
  }
}
