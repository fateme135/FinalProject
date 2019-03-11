import React, { Component } from 'react';
// import logo from '../logo.svg';
import { Row, Card, Button } from 'react-bootstrap';
import Axios from 'axios';
//import { Link } from 'react-router-dom';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, AllArticles: [] }
        const data = {}
        Axios.post('//localhost:3000/showAllArticle', data)
            .then(response => {
                if (response.data.success) {
                    //  const { AllArticles } = response.data.content;//کانتنت رو ار سرور میگیره ومیرزه تو مای آرتیکل
                    this.setState({ AllArticles: response.data.content });
                } else {
                    this.setState({ error: true });
                }
            })
    }
    render() {
        const { AllArticles } = this.state;
        return (
            AllArticles.map((Article, index) => {
                return (
                    <Row>
                        <Card style={{ width: '22rem' }} bg="secondary" key={index}>

                            <Card.Img variant="top" src={Article.picture} style={{ width: '7rem' }}  />
                            <Card.Body>
                                All Articles are :
                                <Card.Title>{Article.title}</Card.Title>
                                <Card.Text> {Article.text} </Card.Text>
                                <Card.Text> {Article.date} </Card.Text>
                                {/* <Card.Text> {Article.picture} </Card.Text> */}
                                <Button variant="primary">nazar</Button>
                                <Button variant="danger">More</Button>
                            </Card.Body>
                        </Card>
                    </Row>

                )

            })
        )
    }
}
export { HomePage }