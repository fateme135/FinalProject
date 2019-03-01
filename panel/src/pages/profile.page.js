import React, { Component } from 'react';
import { Row, Nav, Col, Tab, Form, FormControl, Button } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

class ProfilePage extends Component {
    logout = () => {
        localStorage.removeItem('loginData');
        window.location = "/panel/login";
    }
    render() {
        return (

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Create New Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Show My Articles</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {/* <Form inline onSubmit={this.onSubmit}>
                                    <Form.Label>Title :</Form.Label>
                                    <FormControl name="Title" type="text" onChange={this.onChange} placeholder="Title" className=" mr-sm-2" /><br></br>
                                    <Form.Label>firstname :</Form.Label>
                                    <FormControl name="firstName" type="text" onChange={this.onChange} placeholder="firstname" className=" mr-sm-2" /><br></br>
                                    <Form.Label>lastname :</Form.Label>
                                    <FormControl name="lastName" type="text" onChange={this.onChange} placeholder="lastname" className=" mr-sm-2" /><br></br>
                                    <Form.Label>password :</Form.Label>
                                    <FormControl name="password" type="password" onChange={this.onChange} placeholder="password" className=" mr-sm-2" /><br></br>
                                    <Form.Label>phonenumber :</Form.Label>
                                    <FormControl name="phoneNumber" type="number" onChange={this.onChange} placeholder="phonrnumber" className=" mr-sm-2" /><br></br>
                                    <Button type="submit">Submit</Button>
                                </Form> */}
                                mohtaviat TAB 1
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                mohtaviat TAB 2
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            // <Nav variant="tabs" defaultActiveKey="/home">
            //     <Nav.Item>
            //         <Nav.Link href="/home">Active</Nav.Link>
            //     </Nav.Item>
            //     <Nav.Item>
            //         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            //     </Nav.Item>
            //     <Nav.Item>
            //         <Nav.Link eventKey="disabled" disabled>
            //             Disabled
            //       </Nav.Link>
            //     </Nav.Item>
            // </Nav>

        )
    }
}

export { ProfilePage }
