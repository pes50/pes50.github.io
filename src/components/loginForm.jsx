import React from 'react';
import './loginForm.css';

class loginForm extends React.Component {

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
        <div id="login-div">
            <form onSubmit={this.onFormSubmit} id="login-form">
                <label htmlFor="email">E-Mail</label>
                <input type="email" autoComplete="username" id="email" required/>
                <label htmlFor="password">Heslo</label>
                <input type="password" autoComplete="current-password" minLength={6} id="password" required/>
                <button type="submit">Přihlásit</button>
            </form>
            <div id="forgotten-password">
                <p>Zapomenuté heslo? <a href="#">Obnovení hesla</a></p>
            </div>
        </div>
        )
    }
}

export default loginForm;