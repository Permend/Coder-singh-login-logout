import React, { Component } from 'react'

import {Link} from "react-router-dom"



export default class Logout extends Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render(){
        return(
            <div>
            <h2>
                Logout page pr phunch gya hu...ab aage?
            </h2>
            <Link to="/"> Login page pr jana h to yha click krde bhai</Link>
        </div>
        )
    }
}
