import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './register/register.js';
import Home from './home/home.js';
import Passenger from './passenger/passenger.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({ isLoggedIn: true });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let div;

        return (
            <div>
                {!isLoggedIn ? (
                    <Register handleLogin={this.handleLogin} />
                ) : (
                        <Router>
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/passenger">Passenger</Link>
                                <Link to="/topics">Topics</Link>
                                <hr />
                                <Route exact path="/" component={Home} />
                                <Route path="/passenger" component={Passenger} />
                            </div>
                        </Router>
                    )}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
