import React,{Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class AboutPage extends Component {
    render() {
        return (
            <header className="about-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    About
                </p>
                <Link to="/" className="App-link">Home</Link>
            </header>
        )
    }
}

export {AboutPage}   