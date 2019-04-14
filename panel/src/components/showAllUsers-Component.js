import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Row, Card } from 'react-bootstrap';
class ShowAlluserss extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, allProfiles: [] }
        const data = {}
        Axios.post('//localhost:3000/api/admin/getAllUsers', data)
            .then(response => {
                if (response.data.success) {
                    this.setState({ allProfiles: response.data.users });
                } else {
                    this.setState({ error: true });
                }
            })
    }
    //////////////////////////////////////////////////////
    onDelete = (event) => {
        const data = { id: event.currentTarget.id, FCM: '1' }
        Axios.post('//localhost:3000/api/admin/deleteuser', data)
            .then(response => {
                if (response.data.success) {
                } else {
                    this.setState({ error: true });
                }
            })
    }
    ///////////////////////////////////////////////////////
    render() {
        let { allProfiles } = this.state;
        return (
            allProfiles.map((profile, index) => {
                return (
                    <Row className="App-header">
                        <Card style={{ width: '23rem' }} bg="secondary" key={index}>
                            <Card.Img variant="top" src={"../../../images/image-Avatars/" + profile.avatar} style={{ width: '7rem' }} />
                            <Card.Body>
                                <Card.Title>{profile.username}</Card.Title>
                                <Card.Text> {profile.firstname} </Card.Text>
                                <Card.Text> {profile.lastname} </Card.Text>
                                <Card.Text> {profile.password} </Card.Text>
                                <Card.Text> {profile.phonenumber} </Card.Text>
                                <Card.Text> {profile.sex} </Card.Text>
                                {/* <Button  onClick={this.onEdit}  variant="primary">Edite</Button> */}
                                <Button onClick={this.onDelete} id={profile._id} variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                )
            })
        )
    }
}
export { ShowAlluserss }
