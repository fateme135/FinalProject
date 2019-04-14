import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';
class CreateArticle extends Component {
     state = { error: null, file: null }
     /////////////////////logout////////////////////////////////////////
     logout = () => {
          localStorage.removeItem('loginData');
          window.location = "/panel/login";
     }
     //////////////////////////onSubmit  second for picture//////////////
     onSubmit = (event) => {
          event.preventDefault();
          let data = new FormData()
          data.append("title", event.target["Title"].value);
          data.append("text", event.target["Text"].value);
          data.append("date", event.target["Date"].value);
          data.append("picture", this.state.file)
          //////////////////////////onSubmit  first whitout picture//////////
          // const data = {
          //     title: event.target["Title"].value,
          //     text: event.target["Text"].value,
          //     date: event.target["Date"].value,
          //     picture: event.target["Picture"].value,
          //     FCM: '1'
          // }
          ///////////////////////Axios//////////////////////////////////////
          Axios.post('//localhost:3000/createArticle', data)
               .then(response => {
                    if (response.data.success) {
                         // window.location = '/panel/dashboard';
                    } else {
                         this.setState({ error: true });
                    }
               })
     }
     //////////////////////////onchange for picture///////////////////////////
     onChange = (event) => {
          this.setState({ file: event.target.files[0] });
     }
     /////////////////////////////////////////////////////////////////////////////////////
     render() {
          return (
               <div className="App-header">
                    <Form inline onSubmit={this.onSubmit}>
                         <Col>
                              <Row>
                                   <Form.Label>Title :</Form.Label>
                                   <FormControl name="Title" type="text" placeholder="Title" className=" mr-sm-2" /><br></br>
                              </Row><br></br>
                              <Row>
                                   <Form.Label>Text :</Form.Label>
                                   <FormControl name="Text" type="text" placeholder="Text" className=" mr-sm-2" /><br></br>
                              </Row><br></br>
                              <Row>
                                   <Form.Label>Date :</Form.Label>
                                   <FormControl name="Date" type="Date" placeholder="Date" className=" mr-sm-2" /><br></br>
                              </Row><br></br>
                              <Row>
                                   <Form.Label>picture :</Form.Label>
                                   <FormControl name="Picture" type="file" placeholder="Picture" className=" mr-sm-2" onChange={this.onChange} /><br></br>
                              </Row><br></br>
                              <Button type="submit">ADD</Button>
                         </Col>
                    </Form><br></br>
                    {this.state.error && <p style={{ color: 'red' }}>Create Article Failed</p>}
                    <button onClick={this.logout}>Logout</button>
               </div>
          )
     }
}
export { CreateArticle }