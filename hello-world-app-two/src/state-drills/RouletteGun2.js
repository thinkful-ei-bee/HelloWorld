import React from 'react'

class RouletteGun2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chamber:false,
      spinningTheChamber:false,
    }
  }
  static defaultProps={
    bulletInChamber:8
  }

  componentWillMount(){

  }

  

  clickHandler=()=>{
    this.setState(
      {spinningTheChamber:true}
    )
    this.timeout = setTimeout(()=>{
      const number = Math.ceiling(Math.random()*8)
      this.setState({
        chamber:number,
        spinningTheChamber:false
      })
    },3000)
  }


  render(){
    const message1 = "spinning the chamber and pulling the trigger! ...."
    const message2 = 'BANG!!!!'
    const message3 = "you're safe!!"
    let result = this.state.spinningTheChamber?message1:this.state.chamber===this.props.bulletInChamber?
    message2:message3

    return(
      <div>
        <p>{result}</p>
        <button onClick={this.clickHandler}>Pull the trigger!</button>
      </div>
    )
  }

}

export default RouletteGun2