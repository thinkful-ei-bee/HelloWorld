import React from 'react'

 


class Bomb extends React.Component {

     constructor(props) {
         super(props)
         this.state = {
             count: 0
         };

     } 

    compoundDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1

            })
        }, 1000)                   //1000 is one second; 1000 milli seconds
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
               <p>{this.state.count}</p>
            </div>
            
        )
    }
}

export default Bomb;