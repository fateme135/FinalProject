import React, { Component } from 'react';
import Axios from 'axios';
import { Card, Button } from 'react-bootstrap';
class ShowMyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, MyProfile: [] }
        const data = {}//چون متد پست هست و باید یه داده ای بره داده رو خالی میزاریم
        Axios.post('//localhost:3000/api/user/whoAmI', data)
            .then(response => {
                if (response.data.success) {
                    this.setState({MyProfile: response.data.user });
                } else {
                    this.setState({ error: true });
                }
            })
    }
    render() {
        let {MyProfile} = this.state;
        return (
            MyProfile.map((Argument, index) => {
                return (
                    <Card style={{ width: '25rem' }} bg="white" key={index}>
                        {/* <Card.Img variant="top" src="{Argument.Picture}" /> */}
                        <Card.Body>
                            Edite My Profile :
                            <Card.Text>{Argument.username}</Card.Text>
                            <Card.Text> {Argument.firstname} </Card.Text>
                            <Card.Text> {Argument.lastname} </Card.Text>
                            <Card.Text> {Argument.password} </Card.Text>
                            <Card.Text> {Argument.phonenumber} </Card.Text>
                            <Card.Text> {Argument.role} </Card.Text>
                            <Card.Text> {Argument.sex} </Card.Text>
                            <Button variant="primary">Edite</Button>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
}
export { ShowMyProfile }
