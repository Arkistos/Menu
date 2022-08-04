import * as React from 'react';
import ToggleButton from './ToggleButton';

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: false,
    }
    this.clickButton = this.clickButton.bind(this)
  }

  
  clickButton(state){
    this.setState({display: state})
  }

  
  render(){
    var barStyle = this.props.style
    

    barStyle = {
      ...barStyle,
      width: `${this.state.display&&this.props.links!=undefined?(this.props.links.length+1)*100:50}px`,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '0px',
      height: '50px',
    }

    console.log(barStyle)

    //Object.assign(barStyle, updateBarStyle, )

    switch (this.props.direction){
      case 'left':
        barStyle.flexDirection= 'row-reverse'
        barStyle.position= 'absolute'
        barStyle.right='30px'
        break;
      case 'bottom' :
        barStyle.width= `${this.state.display?'75':'50'}px`
        barStyle.height= `${this.state.display&&this.props.links!=undefined?(this.props.links.length+1)*50:50}px`
        barStyle.flexDirection= 'column'
        break;
        
      case 'top' : 
        barStyle.width= `${this.state.display?'75':'50'}px`
        barStyle.height= `${this.state.display&&this.props.links!=undefined?(this.props.links.length+1)*50:50}px`
        barStyle.flexDirection= 'column-reverse'
        barStyle.position= 'absolute'
        barStyle.bottom='30px'
        break;
    }
    

    return(
      <div className={`menu`} style={barStyle}>
        <ToggleButton toggleMenu={this.clickButton}/>
          {
            this.props.links!=undefined && 
            <div id='nav' style={{width: `${(this.props.links.length+1)*100}px`, flexDirection: this.props.direction=='bottom'||this.props.direction=='top'?'column':'row'}}>
              {this.props.links.map((e,i)=>
              <div key={i}>{e}</div>
              )}
            </div>
          }
          
        
      </div>
    )
  }
}
