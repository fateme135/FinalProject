import React, { Component } from 'react';
import Axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap';
class ShowAllArticles extends Component {
     constructor(props) {
          super(props);
          this.state = { error: null, MyArticles: [] }
          const data = {}
          Axios.post('//localhost:3000/api/admin/showAllArticles', data)
               .then(response => {
                    if (response.data.success) {
                         this.setState({ MyArticles: response.data.contents });
                    } else {
                         this.setState({ error: true });
                    }
               })
     }
     //////////////////////////////////////////////////////
     onDelete = (event) => {
          const data = { id: event.currentTarget.id, FCM: '1' }
          console.log(data + " data in deleted");
          Axios.post('//localhost:3000/deleteArticle', data)
               .then(response => {
                    if (response.data.success) {
                    } else {
                         this.setState({ error: true });
                    }
               })
     }
     ///////////////////////////////////////////////////////
     render() {
          let { MyArticles } = this.state;
          return (
               MyArticles.map((Article, index) => {
                    return (
                         <Row className="App-header">
                              <Card style={{ width: '23rem' }} bg="secondary" key={index}>
                                   <Card.Img variant="top" src={"../../../images/image-Articles/" + Article.picture} style={{ width: '7rem' }} />
                                   <Card.Body>
                                        <Card.Title>{Article.title}</Card.Title>
                                        <Card.Text> {Article.text} </Card.Text>
                                        <Card.Text> {Article.date} </Card.Text>
                                        {/* <Button  onClick={this.onEdit}  variant="primary">Edite</Button> */}
                                        <Button onClick={this.onDelete} id={Article._id} variant="danger">Delete</Button>
                                   </Card.Body>
                              </Card>
                         </Row>
                    )
               })
          )
     }
}
export { ShowAllArticles }
