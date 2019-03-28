import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class SignUp extends Component {
    state = {
        error: null,
        data: {}
    }
    ////////////////////////////fale but i donot khow/////////////////////
    // onSubmit = (event) => {
    //     event.preventDefault();
    //     const { data } = this.state;
    //     this.setState({ data });
    //         .then(response => {
    //     Axios.post('//localhost:3000/signup', data)
    //             if (response.data.success) {
    //                 window.location = '/panel/login';
    //                 // {"welcom "+ response.data.userName}
    //             } else {
    //                 this.setState({ error: true })
    //             }
    //         })
    // }
    /////////////////////////////////////////////////////////////
    onSubmit = (event) => {
         event.preventDefault();
        const {data}=this.state;
       let formdata = new FormData()
       formdata.append("avatar", this.state.file)
       formdata.append("userName", data["userName"].value);
       formdata.append("firstName", data["firstName"].value);
       formdata.append("lastName",data ["lastName"].value);
       formdata.append("password", data["password"].value);
       formdata.append("phoneNumber",data["phoneNumber"].value);
       formdata.append("sexxx",data["sexxx"].value);
       this.setState({data:{}})
        ///////////////////////Axios//////////////////////////////////////
        Axios.post('//localhost:3000/signup',formdata)
            .then(response => {
                if (response.data.success) {
                     window.location = '/panel/login';
                } else {
                    this.setState({ error: true });
                }
            })
    }
    ////////////////////////////////////////////////////////
    onChange = (event) => {
        const { name, value, type } = event.target;
        const { data } = this.state;
        if (type === "file") {
            this.setState({ file: event.target.files[0] });
        }
       
        data[name] = value;
        this.setState({ data });
    }
    //////////////////////////////////////////////////////////
    render() {
        const { data } = this.state;
        return (
            <div className="App-header">
                <Form inline onSubmit={this.onSubmit}>
                    <Col>
                        <Row>
                            <Form.Label>avatar :</Form.Label>
                            <FormControl name="avatar" type="file" placeholder="avatar" className=" mr-sm-2" onChange={this.onChange} /><br></br>
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>userName : </Form.Label>
                            <FormControl name="userName" type="text" value={data["userName"]} onChange={this.onChange} placeholder="userName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>firstName : </Form.Label>
                            <FormControl name="firstName" type="text" value={data["firstName"]} onChange={this.onChange} placeholder="fistName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>lastName : </Form.Label>
                            <FormControl name="lastName" type="text" value={data["lastName"]} onChange={this.onChange} placeholder="lastName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>password : </Form.Label>
                            <FormControl name="password" type="password" value={data["password"]} onChange={this.onChange} placeholder="password" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>phoneNumber : </Form.Label>
                            <FormControl name="phoneNumber" type="text" value={data["phoneNumber"]} onChange={this.onChange} placeholder="phonenumber" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>Sex : <br></br></Form.Label>
                            <Form.Label> male <br></br></Form.Label>
                            <FormControl name="sexxx" type="radio" value={"male"} onChange={this.onChange} placeholder="sex" className=" mr-sm-2" />
                            <Form.Label> female <br></br></Form.Label>
                            <FormControl name="sexxx" type="radio" value={"female"} onChange={this.onChange} placeholder="sex" className=" mr-sm-2" />
                        </Row>
                        <Button type="submit">Register</Button>
                    </Col>
                </Form>
                {this.state.error && <p style={{ color: 'red' }}>SignUp Failed</p>}
                <Link to="login" className="App-link"> login </Link>
            </div>
        )
    }
}
export { SignUp }

// value sex dg mesle baqiye az state gerefte nemishe chon taqir nemikone.........