import React, { Component } from 'react';
import { Row, Nav, Col, Tab, Button } from 'react-bootstrap';
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
        // const { MyArticles } = this.props;
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">User Dashbord</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Show all Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Show all Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="colorTabLight" eventKey="fourth">Edit Avatar</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Button className="colorBtnDark btnClass mt-4" onClick={this.logout}> Logout</Button>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
export { dashboardAdminPage }
