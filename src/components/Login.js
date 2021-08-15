import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


// import { Form } from 'react-bootstrap';


export default class Login extends Component {
    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            username: "",
            password: "",
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username, password} = this.state

        if (username==="A" && password==="B"){
            localStorage.setItem("token", "kljsdlfaksdfkldsfj")
            this.setState({
                loggedIn:true
            })
        }
    }



    render() {
        if(this.state.loggedIn){
            return <Redirect to="/Admin"></Redirect>
        }
        return (
            <>
                <h1>Login</h1>
                <form action="" onSubmit={this.submitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <input type="submit"/>


                </form>

            </>
        )

    }
}

