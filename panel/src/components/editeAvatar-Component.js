import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
class EditAvatar extends Component {
     state = {
          message: '',
          file: null,
          previousAvatar: {}

     }
     /////////////////////گرفتن عکس اولیه از پایگاه داده///////////////
     componentDidMount() {
          const data = {}
          Axios.post('//localhost:3000/whoAmI', data)
               .then(response => {
                    if (response.data.success) {
                         let allInfoUser = response.data.user[0];
                         console.log(allInfoUser)
                         let { previousAvatar } = this.state;
                         previousAvatar = "../../../images/image-Avatars/" + allInfoUser["avatar"];
                         console.log(previousAvatar)
                         this.setState({ previousAvatar });
                    }
                    else { this.setState({ error: true }); }
               })
     }
     ////////////////////////////////////
     onChange = (event) => {
          this.setState({ file: event.target.files[0] });
     }
     /////////////////////////////////
     onSubmit = (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("avatar", this.state.file);
          Axios.post('//localhost:3000/editAvatar', formData)
               .then(response => {
                    if (response.data.success) {
                    } else {
                         this.setState({ error: true });
                    }
               })
     }
     //////////////////////
     render() {
          return <Row className="App-header">
               <Col sm={6} xs={12}>
                    <Form onSubmit={this.onSubmit}>
                         <Form.Group >
                              <Form.Control type="file" name="avatar" onChange={this.onChange} />
                         </Form.Group>
                         <Col sm={2}>
                              <Button type="submit">  change </Button>
                         </Col>
                    </Form>
               </Col>
               <Card style={{ width: '23rem' }} bg="secondary" >
                    <Card.Img variant="top" src={this.state.previousAvatar}   style={{ width: '7rem' }} />
               </Card>
          </Row>
     }
}
export { EditAvatar }
