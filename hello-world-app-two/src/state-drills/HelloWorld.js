import React from 'react'

class HelloWorld extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      who: ''
    };
    
  }


    testButton = (event)=>{
      const name = event.target.innerText
      this.setState(
        {who:name}
      )
      console.log(this.state.who)
    }

  render(){ 
    return ( 
    <div>
        <p>Hello {this.state.who}</p>
        <button onClick = {this.testButton} className='world-button'>World</button>
        <button onClick = {this.testButton} className='friend-button'>Friend</button>
        <button onClick = {this.testButton} className='react-button'>React</button>
  </div>)
  }
  
}

export default HelloWorld