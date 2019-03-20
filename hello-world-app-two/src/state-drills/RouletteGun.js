import React from 'react'

class RouletteGun extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      chamber:false,
      spinningTheChamber:false,
    }
  }
  static defaultProps={
    bulletInChamber:8
  }
  
  conponentWillUnmount(){
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  

  render(){
    const message1 = "spinning the chamber and pulling the trigger! ...."
    const message2 = 'BANG!!!!'
    const message3 = "you're safe!!"
    const renderContent = this.state.spinningTheChamber?message1:
    this.state.chamber===this.props.bulletInChamber?message2:message3
    
    return(
      <div>
        <p>
          {renderContent}
        </p>
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    )
  }


}

export default RouletteGun