import React, { Component } from 'react';
import Axios from 'axios';
class LoginPage extends Component {
    state = {
        error: null,
        InfoUser: []
    }
/////////////////////////////////////////////////////////////////////
        onSubmit = (event) => {
            event.preventDefault();
            const data = {
                username: event.target["username"].value,
                password: event.target["password"].value,
                FCM: '1'
            }
            Axios.post('//localhost:3000/login', data)
                .then(response => {
                    if (response.data.success) {
                        localStorage.setItem('loginData', JSON.stringify(data));
                        let InfoUser = this.state;
                        console.log(InfoUser);
                        let role = InfoUser['role'];
                        if (role === 'user') {
                            window.location = '/panel/dashboard';
                        }
                        else {
                            window.location = '/panel/dashboardAdmin'
                        }
                    } else {
                        this.setState({ error: true })
                    }
                })
            console.log(localStorage)
        }
        onChange = ({ target: { name, value } }) => {
            this.setState({ [name]: value })
        }

        render() {
            return (
                <div className="App-header">
                    <p>
                        Login
                </p>
                    <form onSubmit={this.onSubmit}>
                        <label>USER NAME : </label>
                        <input style={{ color: RegExp(/\d/g).test(this.state.username) ? 'red' : 'black' }} name="username" type="text" value={this.state.username} onChange={this.onChange} /><br></br>
                        <label> PASSWORD: </label>
                        <input name="password" type="password" /><br></br>
                        <button type="submit">login</button>
                    </form>
                    {this.state.error && <p style={{ color: 'red' }}>Login failed</p>}
                </div>
            )
        }
    }

export { LoginPage }