import React, { Component } from 'react';
import { Row, Nav, Col, Tab, } from 'react-bootstrap';
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
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                   mohtaviat TAB 1
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                mohtaviat TAB 2
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                       
                    </Row>
                </Tab.Container>
           
        )
    }
}

export { ProfilePage }
