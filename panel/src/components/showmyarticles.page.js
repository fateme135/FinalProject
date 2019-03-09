import React, { Component } from 'react';
import Axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap';
class ShowMyArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, MyArticles: [] }
        const data = {}//چون متد پست هست و باید یه داده ای بره داده رو خالی میزاریم
        Axios.post('//localhost:3000/api/user/showMyArticle', data)
            .then(response => {
                if (response.data.success) {
                    this.setState({ MyArticles: response.data.contents });
                    debugger
                } else {
                    this.setState({ error: true });
                }
            })
    }
    render() {
        let { MyArticles } = this.state;
        return (
            MyArticles.map((Article, index) => {
                return (
                    <Row>
                        <Card style={{ width: '23rem' }} bg="secondary" key={index}>
                            {/* <Card.Img variant="top" src="{Article.Picture}" /> */}
                            <Card.Body>
                                My Articles are :
                            <Card.Title>{Article.title}</Card.Title>
                                <Card.Text> {Article.text} </Card.Text>
                                <Card.Text> {Article.date} </Card.Text>
                                <Card.Text> {Article.picture} </Card.Text>
                                <Button variant="primary">Edite</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                )
            })
        )
    }
}
export { ShowMyArticles }
