import React,{Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    404 / not found
                </p>
                <Link to="about" className="App-link">About</Link>
            </header>
        )
    }
}

export {NotFoundPage}