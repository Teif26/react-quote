import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export class Button extends Component {
  render() {
    var el = document.querySelector('body')
    var compStyle = window.getComputedStyle(el)
    var bgc = compStyle.getPropertyValue('background-color')
    const bStyle = {
      backgroundColor: bgc
      }
    const tStyle = {
      color: bgc
      }    
   
    return (
        <div id="buttonWrapper">
          <a id='tweet-quote' href="twitter.com/intent/tweet"> <FontAwesomeIcon  icon={faTwitter} style={tStyle} /> </a>
          <button id='new-quote' style={bStyle} onClick={this.props.getNext} className='nextBtn' type='button'>Next</button>
       </div>
   
      
    )
  }
}

export default Button
