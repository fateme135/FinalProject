import React, { Component } from 'react';
import { Row, Nav, Col, Tab, Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';
import { ShowMyArticles } from '../components/showmyarticles.page';
import { ShowMyProfile } from '../components/profile.page';
// import {Link} from 'react-router-dom';
class ProfilePage extends Component {
    state = { error: null }

    logout = () => {
        localStorage.removeItem('loginData');
        window.location = "/panel/login";
    }
    onSubmit = (event) => {
        // event.preventDefault();
        const data = {
            title: event.target["Title"].value,
            text: event.target["Text"].value,
            date: event.target["Date"].value,
            picture: event.target["Picture"].value,
            FCM: '1'
        }
        Axios.post('//localhost:3000/createArticle', data)
            .then(response => {
                if (response.data.success) {
                    // window.location = '/panel/dashboard';

                } else {
                    this.setState({ error: true });
                }
            })
        //    console.log(data)
    }
    render() {
        // const { MyArticles } = this.props;
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
                            <Nav.Item>
                                <Nav.Link eventKey="third">Show My Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Form inline onSubmit={this.onSubmit}>
                                    <Row>
                                        <Form.Label>Title :</Form.Label>
                                        <FormControl name="Title" type="text" onChange={this.onChange} placeholder="Title" className=" mr-sm-2" /><br></br>
                                    </Row><br></br>
                                    <Row>
                                        <Form.Label>Text :</Form.Label>
                                        <FormControl name="Text" type="text" onChange={this.onChange} placeholder="Text" className=" mr-sm-2" /><br></br>
                                    </Row><br></br>
                                    <Row>
                                        <Form.Label>Date :</Form.Label>
                                        <FormControl name="Date" type="Date" onChange={this.onChange} placeholder="Date" className=" mr-sm-2" /><br></br>
                                    </Row><br></br>
                                    <Row>
                                        <Form.Label>picture :</Form.Label>
                                        <FormControl name="Picture" type="text" onChange={this.onChange} placeholder="Picture" className=" mr-sm-2" /><br></br>
                                    </Row><br></br>
                                    <Button type="submit">ADD</Button>
                                </Form><br></br>
                                <button onClick={this.logout}>Logout</button>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <ShowMyArticles />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="third">
                            <ShowMyProfile />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
export { ProfilePage }
