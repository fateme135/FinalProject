import React, { Component } from 'react';
import { Row, Nav, Col, Tab, Button } from 'react-bootstrap';
import { ShowMyArticles } from '../components/showmyarticles-Component';
import { EditMyProfile } from '../components/Editeprofile-Component';
import { CreateArticle } from '../components/createArticle-Component';
import { ShowAllArticles } from '../components/showAllArticles-Component';
import {  ShowAlluserss} from '../components/showAllUsers-Component';
import { SignUpWithAdmin } from '../components/createUser-Component';

// import { EditAvatar } from '../components/editeAvatar-Component';
class dashboardAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }
    logout = () => {
        localStorage.removeItem('loginData');
        window.location = "/";
    }
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Show all Profiles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Show all Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Create New Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Create New Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Show My Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sexth">Show My Profile</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link className="colorTabLight" eventKey="fourth">Edit Avatar</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        <Button className="colorBtnDark btnClass mt-4" onClick={this.logout}> Logout</Button>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                < ShowAlluserss />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ShowAllArticles />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <CreateArticle />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <SignUpWithAdmin />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <ShowMyArticles />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sexth">
                                <EditMyProfile />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
export { dashboardAdminPage }
