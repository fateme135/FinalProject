import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Container, Row, Col, Form, FormControl } from 'react-bootstrap';
class EditMyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            MyProfile: [],
            isOnEdit: false,
        }
    }
    /////////////////////گرفتن اطلاعات اولیه از پایگاه داده///////////////
    componentDidMount() {
        const data = {}//چون متد پست هست و باید یه داده ای بره داده رو خالی میزاریم
        Axios.post('//localhost:3000/whoAmI', data)
            .then(response => {
                if (response.data.success) {
                    // const MyProfile = response.data.user ;
                    this.setState({ MyProfile: response.data.user });
                }
                else { this.setState({ error: true }); }
            })
        // Axios.get('//localhost:3000/api/user/whoAmI')
        //     .then(res => {
        //         const myProfile = res.data;
        //         this.setState({ myProfile });
        //         console.log("hhhhhhhh" + myProfile)
        //     })
    }
    /////////////////////////////////////
    onEdit = () => {
        this.setState({ isOnEdit: !this.state.isOnEdit });
    }
    /////////////////////////اطلاعات ویرایش شده از فرم گرفته میشه و فرستاده میشه سمت پایگاه داده////////////
    onSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: event.target["userName"].value,
            firstname: event.target["firstName"].value,
            lastname: event.target["lastName"].value,
            password: event.target["password"].value,
            phonenumber: event.target["phoneNumber"].value,
            sex: event.target["sexxx"].value,
            FCM: '1'
        }
        Axios.post('//localhost:3000/editprofile', data)
            .then(response => {
                if (response.data.success) {
                    window.location = '/panel/dashboard';
                    // {"welcom "+ response.data.username}
                } else {
                    this.setState({ error: true })
                }
            })
        console.log(data + "Edit profile react")
    }
    ///////////////////////////فقط برای فرمی که onsubmit دارد گذاشته می شود//////////
    // onChange = ({ target: { name, value } }) => {
    //     const { data } = this.state;
    //     data[name] = value;
    //     this.setState({ data });
    // }
    ///////////////////////////////////
    render() {
        let { isOnEdit } = this.state;
        return (
            <div className="App-header">
                <Container>
                    <h3>Edit My Profile</h3>
                    {this.state.MyProfile.map(Profile => {
                        return isOnEdit ?
                            <>
                                <Form inline onSubmit={this.onSubmit} style={{ marginLeft: '4rem' }}>
                                    <Col>
                                        {/* <Row>
                                            <Form.Label>picture :</Form.Label>
                                            <FormControl name="avatar" type="file" placeholder="avatar" className=" mr-sm-2"  /><br></br>
                                           
                                        </Row><br></br> */}
                                        <Row>
                                            <Form.Label sm={2}>userName : </Form.Label>
                                            <FormControl name="userName" type="text" placeholder="userName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>firstName : </Form.Label>
                                            <FormControl name="firstName" type="text" placeholder="fistName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>lastName : </Form.Label>
                                            <FormControl name="lastName" type="text" placeholder="lastName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>password : </Form.Label>
                                            <FormControl name="password" type="password" placeholder="password" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>phoneNumber : </Form.Label>
                                            <FormControl name="phoneNumber" type="text" placeholder="phonenumber" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>Sex : <br></br></Form.Label>
                                            <Form.Label> male <br></br></Form.Label>
                                            <FormControl name="sexxx" type="radio" value={"male"} placeholder="sex" className=" mr-sm-2" />
                                            <Form.Label> female <br></br></Form.Label>
                                            <FormControl name="sexxx" type="radio" value={"female"} placeholder="sex" className=" mr-sm-2" />
                                        </Row>
                                        {/* <Button onClick={this.onEdit}>Cancele</Button> */}
                                        <Button type="submit">Save</Button>
                                    </Col>
                                </Form>

                            </> :
                            <>
                                <Form inline >
                                    <Col>
                                        {/* <Row>
                                    <Form.Label sm={2}>avatar : </Form.Label>
                                    <FormControl type="file"  value={"../../../images/image-Avatar/" + Profile.avatar} style={{ width: '7rem' }} />
                                    </Row> */}

                                        <Row>
                                            <Form.Label sm={2}>userName : </Form.Label>
                                            <FormControl type="text" value={Profile.username} placeholder="userName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>firstName : </Form.Label>
                                            <FormControl type="text" value={Profile.firstname} placeholder="fistName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>lastName : </Form.Label>
                                            <FormControl type="text" value={Profile.lastname} placeholder="lastName" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>password : </Form.Label>
                                            <FormControl type="password" value={Profile.password} placeholder="password" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>phoneNumber : </Form.Label>
                                            <FormControl type="text" value={Profile.phonenumber} placeholder="phonenumber" className=" mr-sm-2" />
                                        </Row><br></br>
                                        <Row>
                                            <Form.Label sm={2}>sex : </Form.Label>
                                            <FormControl type="text" value={Profile.sex} placeholder="sex" className=" mr-sm-2" />
                                        </Row><br></br>
                                        {/* <Row>
                                            <Form.Label sm={2}>Sex : <br></br></Form.Label>
                                            <Form.Label> male <br></br></Form.Label>
                                            <FormControl  type="radio" value={"male"}  placeholder="sex" className=" mr-sm-2" />
                                            <FormControl type="radio" value="male" checked={Profile.sex === "male" ? true : false}  placeholder="sex" className=" mr-sm-2" />

                                            <Form.Label> female <br></br></Form.Label>
                                            <FormControl  type="radio" value="female" checked={Profile["sexxx"] === "female" ? true : false}  placeholder="sex" className=" mr-sm-2" />
                                        </Row> */}
                                        <Button onClick={this.onEdit}>Edit</Button>

                                    </Col>
                                </Form>
                            </>
                    })}
                    {this.state.error && <p style={{ color: 'red' }}>Edit Profile Failed</p>}
                </Container>
            </div>
        )
    }
}
export { EditMyProfile }
