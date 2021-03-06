import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
constructor(props) {
    super(props)

    this.state = {
         userId: '',
         title: '',
         body: '',
         erroMsg:''
    }
}

chnageHandler = (e) => {
    this.setState({[e.target.name]:e.target.value})
}

submitHandler = (e) => {
   e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.om/posts', this.state)
    .then(reponse => {
        console.log(reponse)
    }).catch(error => {
        console.log(error)
        this.setState({erroMsg:'Cant do Post request'})
    })
    }
    


    render() {
        const {userId, title, body } = this.state
        return (
            <div>
                
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input onChange={this.chnageHandler} type="text" name="userId" value={userId}/>
                    </div>
                    <div>
                        <input onChange={this.chnageHandler} type="text" name="title" value={title}/>
                    </div>
                    <div>
                        <input  onChange={this.chnageHandler} type="text" name="body" value={body}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
