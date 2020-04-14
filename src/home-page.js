import React, { Component } from 'react';

export default class HomePage extends Component{
    
    render(){
        console.log(this.props)
        const loginHandler = () => {
            this.props.history.push('/login')
        }

        const signupHandler = () => {
            this.props.history.push('/signup');
        }
        return(<div>
                <h2> Home Page </h2>
                <button onClick= {loginHandler}> Login </button>
                <button onClick= {signupHandler}> Sign up </button>
                </div>)
    }
}