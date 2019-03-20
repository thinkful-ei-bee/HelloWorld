import React from 'react'

 


class Bomb extends React.Component {

     constructor(props) {
         super(props)
         this.state = {
             count: 0
         };

     } 

    compoundDidMount() {
        const newCount = this.count+1;
        this.interval = setInterval(() => {this.setState({count: newCount})})  
    }

    render() {
        return (
            <div>
               <p></p>
            </div>
            
        )
    }
}

export default Bomb;