import React, { Component } from 'react';

export class Signup extends Component{
    render(){
        return(<div>
                <form>
                    <fieldset>
                        <legend> Signup </legend>
                        FirstName: <input type="text" placeholder="Enter your first name" /><br /><br />
                        LastName: <input type="text" placeholder="Enter your Last name" /><br /><br />
                        Username: <input type="text" placeholder="Enter your mail id or phone number" /><br /><br />
                        Password: <input type="password" placeholder="Enter your password" /><br /><br />
                        <button>Submit</button>
                    </fieldset>
                </form>
               </div>)
    }
}