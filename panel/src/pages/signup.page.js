import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class SignUp extends Component {
    state = { error: null, file: null, }
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
    //////////////////////////onchange for picture///////////////////////////
    onChange = (event) => {
        this.setState({ file: event.target.files[0] });
   }
    onSubmit = (event) => {
        event.preventDefault();   
        const formdata = new FormData()
        formdata.append("avatar", this.state.file)
        formdata.append("userName",event.target["userName"].value);
        formdata.append("firstName", event.target["firstName"].value);
        formdata.append("lastName", event.target["lastName"].value);
        formdata.append("password", event.target["password"].value);
        formdata.append("phoneNumber", event.target["phoneNumber"].value);
        formdata.append("sexxx", event.target["sexxx"].value);
        ///////////////////////Axios//////////////////////////////////////
        Axios.post('//localhost:3000/signup', formdata)
            .then(response => {
                if (response.data.success) {
                    window.location = '/panel/login';
                } else {
                    this.setState({ error:true});
                }
            })
    }
    //////////////////////////////////////////////////////////
    render() {
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
                            <FormControl name="userName" type="text"placeholder="userName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>firstName : </Form.Label>
                            <FormControl name="firstName" type="text" placeholder="fistName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>lastName : </Form.Label>
                            <FormControl name="lastName" type="text" placeholder="fistName" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>password : </Form.Label>
                            <FormControl name="password" type="password"placeholder="password" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>phoneNumber : </Form.Label>
                            <FormControl name="phoneNumber" type="text"placeholder="phonenumber" className=" mr-sm-2" />
                        </Row><br></br>
                        <Row>
                            <Form.Label sm={2}>Sex : <br></br></Form.Label>
                            <Form.Label> male <br></br></Form.Label>
                            <FormControl name="sexxx" type="radio" value={"male"}  placeholder="sex" className=" mr-sm-2" />
                            <Form.Label> female <br></br></Form.Label>
                            <FormControl name="sexxx" type="radio" value={"female"}  placeholder="sex" className=" mr-sm-2" />
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