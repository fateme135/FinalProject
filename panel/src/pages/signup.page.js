import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class SignUp extends Component {

    state = {
        error: null
    }
    onSubmit = (event) => {
        event.preventDefault();
        const data = {
            userName: event.target["userName"].value,
            firstName: event.target["firstName"].value,
            lastName: event.target["lastName"].value,
            password: event.target["password"].value,
            phoneNumber: event.target["phoneNumber"].value,
            // sex: event.target["sex"].checked,
            FCM: '1'
        }
        Axios.post('//localhost:3000/signup', data)
            .then(response => {
                if (response.data.success) {
                    // localStorage.setItem('loginData',JSON.stringify(data));
                    window.location = '/panel/login';
                } else {
                    this.setState({ error: true })
                }
            })
        //    console.log(data)
    }


    onChange = ({ target: { name, value, type, checked } }) => {
        if (type === "checkbox") {
            this.setState({ [name]: checked })
        }
        else {
            this.setState({ [name]: value })
        }
    }

    render() {
        return (


            // <div >
            //      <form  >
            //      <label>USER NAME </label>
            //      <input value={this.state.userName} name="userName" type="text" onChange={this.onChange} /> <br></br>
            //      <label>FIRST NAME </label>
            //      <input value={this.state.firstName} name="firstName" type="text" onChange={this.onChange} /> <br></br>
            //      <label>LAST NAME </label>
            //      <input value={this.state.lastName} name="lastName" type="text" onChange={this.onChange} /> <br></br>
            //      <label>PASSWORD </label>
            //      <input value={this.state.password} name="password" type="text" onChange={this.onChange} /> <br></br>
            //      <label>PHONE-NUMBER </label>
            //      <input value={this.state.phoneName} name="phoneName" type="text" onChange={this.onChange} /> <br></br>
            //      <label>SEX</label>
            //      <input checked={this.state.sex} name="sex" type="checkbox" onChange={this.onChange} /> <br></br>
            //      <button onSubmit={this.data}>Add</button> <br></br>
            //      </form>
            //      {this.state.error && <p style={{color:'red'}}>Login failed</p>}
            //      <Link to="login" className="App-link"> login </Link>
            // </div>
            <div className="App-header">
                <p>
                    Sign Up
                </p>

                <form onSubmit={this.onSubmit}>
                    <label>USER NAME : </label>
                    <input name="userName" type="text" onChange={this.onChange} /> <br></br>
                    {/* <input style={{color:RegExp(/\d/g).test(this.state.userName)?'red':'black'}} 
                        name="username" type="text" value={this.state.userName} onChange={this.onChange}/> */}
                    <label>FIRST NAME : </label>
                    <input name="firstName" type="text" onChange={this.onChange} /> <br></br>
                    <label>LAST NAME : </label>
                    <input name="lastName" type="text" onChange={this.onChange} /> <br></br>
                    <label>PASSWORD : </label>
                    <input name="password" type="password" onChange={this.onChange} /> <br></br>
                    <label>PHONE-NUMBER : </label>
                    <input name="phoneNumber" type="number" onChange={this.onChange} /> <br></br>
                    <label>SEX is Male:</label>
                    {/* <select>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select><br></br> */}
                    {/* <input  name="sex" type="checkbox" onChange={this.onChange} /> <br></br> */}
                    <button type="submit">Add</button> <br></br>
                </form>
                {this.state.error && <p style={{ color: 'red' }}>SignUp Failed</p>}
                <Link to="login" className="App-link"> login </Link>
            </div>
        )
    }
}

export { SignUp }

