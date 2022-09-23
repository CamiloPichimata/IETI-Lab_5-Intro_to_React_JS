import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login.js';
import './index.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            isLogged: false,
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="login-container">
                    <h2>Login</h2>
                    <Login />
                </div>
            </div>
        );
    }

    handleSubmit(e) {
        alert("Se envió el formulario");
    }
}


// ==================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
