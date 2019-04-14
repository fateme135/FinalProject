import React, { Component } from 'react';
import Axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap';
class ShowMyArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, MyArticles: [] }
        /////////////////////////////////get data from database/////////////////////
        const data = {}//چون متد پست هست و باید یه داده ای بره داده رو خالی میزاریم
        Axios.post('//localhost:3000/showMyArticle', data)
            .then(response => {
                if (response.data.success) {
                  //  let { MyArticles } = this.state;
                    // MyArticles=[]
                    // MyArticles.push(response.data.contents);
                    this.setState({ MyArticles: response.data.contents });
                } else {
                    this.setState({ error: true });
                }
            })
    }
    ///////////////////////////////post data to database///////////////////////
    onDelete = (event) => {
       let { MyArticles } = this.state;
        const data = { id: event.currentTarget.id, FCM: '1' }
        Axios.post('//localhost:3000/deleteArticle', data)
            .then(response => {
                if (response.data.success) {
                //   MyArticles = MyArticles.filter(value => value.id !==id)
                    this.setState({  MyArticles });
                } else {
                    this.setState({ error: true });
                }
            })
    }
    ////////////////////////////////////////////////////////
    // onEdit = () => { this.setState({ isOnEdit: !this.state.isOnEdit }); }

    // /////////////////////////اطلاعات ویرایش شده از فرم گرفته میشه و فرستاده میشه سمت پایگاه داده////////////
    // onSubmit = (event) => {
    //     event.preventDefault();
    //     const data = {
    //         Title: event.target["Title"].value,
    //         Text: event.target["Text"].value,
    //         date: event.target["Date"].value,
    //         picture: event.target["Picture"].value,
    //         FCM: '1'
    //     }
    //     Axios.post('//localhost:3000/editArticle', data)
    //         .then(response => {
    //             if (response.data.success) {
    //                 window.location = '/panel/dashboard';
    //                 // {"welcom "+ response.data.data.userName}
    //             } else {
    //                 this.setState({ error: true })

    //             }
    //         })
    //     console.log(data + "Edit profile react")
    // }
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
export { ShowMyArticles }
