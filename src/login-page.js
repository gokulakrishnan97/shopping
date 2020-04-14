import React, { Component }from 'react';

export class Login extends Component{
    render(){
        return (<div>
                    <form>
                        <fieldset>
                            <legend align="center">Login Page</legend>
                            Username: <input type="text" placeholder="Enter the user name" /><br /> <br />
                            Password: <input type="password" placeholder="Enter the password" /><br /> <br />
                            <button>Submit</button>
                        </fieldset>
                    </form>
                </div>)
    }
}