import * as React from 'react';
import ToggleButton from './ToggleButton';

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: false,
      test: [<div>gorl,egr</div>,<div>goregjreg</div>]
    }
    this.clickButton = this.clickButton.bind(this)
    
  }

  clickButton(state){
    this.setState({display: state})
  }

  


  render(){

    const barStyle = {
      width: `${this.state.display&&this.props.links!=undefined?(this.props.links.length+1)*100:50}px`
    }
    
    return(
      <div className={`menu`} style={barStyle}>
        <ToggleButton toggleMenu={this.clickButton}/>
          {
            this.props.links!=undefined && 
            <div id='nav' style={{width: `${(this.props.links.length+1)*100}px`}}>
              {this.props.links.map((e,i)=>
              <div key={i}>{e}</div>
              )}
            </div>
          }
          
        
      </div>
    )
  }
}
