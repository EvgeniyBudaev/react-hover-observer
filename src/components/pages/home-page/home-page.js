import React, { Component } from 'react';
import './home-page.css';
import Cursor from '../../cursor';

class HomePage extends Component {
  state = {
    hover: false
  }
    
     handleHover() {
      this.setState({hover: !this.state.hover});
    }
  
  render() {
    const iconStyle={
      transform: this.state.hover ? 'scale(2) translateX(-25%) translateY(-25%)' : 'none',
      mixBlendMode: this.state.hover ? 'difference' : 'none',
      color: this.state.hover? "#000" : "#fff",
      background: this.state.hover? '#fff' :'#fff',
      transition: "all .3s",
      borderRadius: '50%',
      height: this.state.hover ? 35 : 10,
      width: this.state.hover ? 35 : 10,
      cursor: 'pointer',
      
    }
    return (
      <div className="HomePage">
        <div>
          <div>
          <div style={iconStyle} onMouseEnter={()=>this.handleHover()} onMouseLeave={()=>this.handleHover()}>This is Home page!</div>
          </div>
        </div>
      </div>
    )
  };
};

export default HomePage ;