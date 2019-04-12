import React, { Component } from 'react'
import Button from './Button';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

class QuoteBox extends Component{
 constructor(props){
   super(props)
        
    this.state = {
      quotes: [],
      colors: ["#16a085", "#27ae60",
               "#2c3e50", "#f39c12",
               "#e74c3c", "#9b59b6",
               "#FB6964", "#342224", 
               "#472E32", "#bcfb99",
               "#77B1A9", "#73A857"]
     }
  
 }
    componentDidMount(){
     axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]3')
     .then(res=>{ this.setState({quotes: res.data[0]})
     document.body.style.backgroundColor = '#333'
     })
        
    }

    getNext = (ev) =>{
      const {colors} = this.state
      const color = colors[Math.floor(Math.random()* colors.length)]
      var newQuote = Math.floor(Math.random() * 50)
      const API_URL = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]${newQuote}`
      ev.preventDefault()
      document.body.style.backgroundColor = color
      axios.get(API_URL)
      .then(res => {
        this.setState({quotes: res.data[0]}, () => {
          document.body.style.backgroundColor = color;
        });
      })
        
      
    }
  
    render(){
    const {content,title} = this.state.quotes
    const filteredContent = String(content).replace(/(<\w*>)|(<\S*>)|(&#\d*)|<\w*\s\W>/gm, "").replace(/(;)/g,"'")
    var el = document.querySelector('body')
    var compStyle = window.getComputedStyle(el)
    var bgc = compStyle.getPropertyValue('background-color')
    const pStyle = {
      color: bgc
      }  
    console.log(bgc)
     
     return(
       <React.Fragment>
         
          <div id='quote-box'>
            <div id='quote-text'>
             <FontAwesomeIcon className='icon' style={pStyle} icon={faQuoteLeft} />
                <span id='text' style={pStyle}>{filteredContent}</span><p style={pStyle} id='author' >--{title}</p>
             </div>
             <Button getNext={this.getNext} />
            </div>
          
        </React.Fragment>)     
     }
    }


export default QuoteBox
