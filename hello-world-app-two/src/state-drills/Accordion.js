import React from 'react'
import './Accordion.css'

class Accordion extends React.Component{
  static defaultProps={
    sections:[]
  };
  state={
    currentTabIndex:0
  }

  renderButton()
  {return this.props.sections.map((section,index)=>(
    <li>
    <button className = 'accordion'key={index} onClick={()=>this.handleButtonClick(index)}>
        {section.title}
      </button>  
      {this.state.currentTabIndex===index && this.renderContent()}
    </li>
  ))}
  
  renderContent(){
      const currentTab = this.props.sections[this.state.currentTabIndex]
      return<p className = 'panel'>
        {currentTab.content}
      </p>  
    }

  handleButtonClick(index){
    this.setState({currentTabIndex:index})
  }


  render(){
    return(
      <ul className='accordion-container'>
        {this.renderButton()}
      </ul>
    )
  }
}

export default Accordion