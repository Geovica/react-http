import React, { Component } from 'react'


export class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }


   increament = () => {
       this.setState(prevstate => {
           return {
               count:this.state.count +1
           }
       })
   }
   decreament = () => {
       this.setState(prevstate => {
           return {
               count:this.state.count -1
           }
       })
   }
    reset = () => {
        this. setState({
            count: 0
        })
    }

    
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.increament()}>Increament </button>
                <button onClick={() => this.decreament()}>Decreament </button>
                <button onClick={() => this.reset()}>Reset </button>
            </div>
        )
    }
}

export default ClassCounter
