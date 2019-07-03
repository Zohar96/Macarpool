import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './register/register.js';
import Home from './home/home.js';
import Passenger from './passenger/passenger.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Register />
                </div>
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/passenger">Passenger</Link>
                        <Link to="/topics">Topics</Link>
                        <hr />
                        <Route exact path="/" component={Register} />
                        <Route path="/home" component={Home} />
                        <Route path="/passenger" component={Passenger} />
                    </div>
                </Router>
            </div>

        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
