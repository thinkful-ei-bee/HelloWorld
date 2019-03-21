import React from 'react'

class Tab extends React.Component{
  static defaultProps={
    tabs:[]
  };
  state = {
    currentTabIndex:0,
    displayContent:false
  };

  handleButtonClick(index){
   this.setState({currentTabIndex:index})
  }

  
  renderButtons(){
    return this.props.tabs.map((tab,index)=>(

     <div> <button key={index} onClick={()=>this.handleButtonClick(index)}>
        {tab.name}
      </button>
      <p></p>
      </div>))
  }

  renderContent(){
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return <div className = 'content'>
    {currentTab.content}
  </div>
  }

  render(){
    // only render content if its length is greater than 0. 
    return(
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent() }
      </div>
    )
  }
}

export default Tab