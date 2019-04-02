import React, { Component } from 'react';
import { Row, Nav, Col, Tab,Button } from 'react-bootstrap';
import { ShowMyArticles } from '../components/showmyarticles-Component';
import { EditMyProfile } from '../components/Editeprofile-Component';
import { CreateArticle } from '../components/createArticle-Component';
import {EditAvatar} from '../components/editeAvatar-Component';
// import {Link} from 'react-router-dom';
class ProfilePage extends Component {
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
                            <Nav.Item>
                                <Nav.Link className="colorTabLight" eventKey="fourth">Edit Avatar</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Button className="colorBtnDark btnClass mt-4" onClick={this.logout}>        Logout    </Button>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CreateArticle />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ShowMyArticles />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <EditMyProfile />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <EditAvatar />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
export { ProfilePage }
