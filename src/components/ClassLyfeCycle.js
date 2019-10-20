import React, { Component } from 'react'

class ClassLyfeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    componentDidMount() {
        document.title = `You Clicked ${this.state.count}`
    }
    componentDidUpdate(prevProps, prevState) {

        if(prevState.count !=this.state.count){
        document.title= `You Clicked ${this.state.count}`
        console.log('updating document title')
        }
    }

    
    render() {
        return (
            <div>
                <input  type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value})}}></input>
                <button onClick={()=>this.setState({count: this.state.count + 1})}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassLyfeCycle
