import React from 'react'

class Bomb extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      count:0
    }
  }

  componentDidMount(){
    
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count+1
        
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)


  }

  

  render(){
    let result = this.state.count%2===0?<div>
    <p>tick</p>
   </div>:this.state.count>=8?<div>
      <p>Boom!</p>
      <img src='https://media.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif'alt='bomb'/>
    </div>:
   <div>
      <p>tock</p>
      
    </div>
    if(this.state.count>8)clearInterval(this.interval)
    return(
     result
    )
    


} else if (this.state.count > 8) {
    clearInterval(this.interval)
    return ( <div>
            <p>BOOM!!</p> 
            </div>)
}
}


export default Bomb 