import React, { Component } from 'react';
import logo from '../logo.svg';
// { Card, Button } from 'react-bootstrap';
//import Axios from 'axios';
import { Link } from 'react-router-dom';
class HomePage extends Component {
    // constructor() {
    //     super();
    //     this.state = { AllArticles: [] }
    //     const data = {}
    //     Axios.post('//localhost:3000/showAllArticle', data)
    //         .then(response => {
    //             if (response.data.success) {
    //                 const { AllArticles } = response.data.content;//کانتنت رو ار سرور میگیره ومیرزه تو مای آرتیکل
    //                 this.setState({ AllArticles });
    //             } else {
    //                 this.setState({ error: true });
    //             }
    //         })
    // }
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to My page
                </p>
                <Link to="signup" className="App-link">signup</Link>
            </header>
        )
    }
//     render() {
//         const { AllArticles } = this.state;
//         return (

//             AllArticles.map((Article, index) => {
//                 return (
//                     <Card style={{ width: '18rem' }} bg="secondary" key={index}>

//                         {/* <Card.Img variant="top" src="{Article.Picture}" /> */}
//                         <Card.Body>
//                             All Articles are :
//                             <Card.Title>{Article.Title}</Card.Title>
//                             <Card.Text> {Article.Text} </Card.Text>
//                             <Card.Text> {Article.Date} </Card.Text>
//                             <Button variant="primary">Edite</Button>
//                             <Button variant="danger">Delete</Button>
//                         </Card.Body>
//                     </Card>
//                 )

//             })
//         )
//     }
}
export { HomePage }