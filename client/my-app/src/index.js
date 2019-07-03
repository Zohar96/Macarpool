import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './register/register.js';

class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Register />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
