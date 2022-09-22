import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            isLogged: false,
        }
    }

    render() {
        return (
            <div className="loginContainer">
                <div className='form-group'>
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='userName'>
                            Nombre de usuario:
                        </label>
                        <input
                            id='userName'
                            type="text"
                            //onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <br />
                        <label htmlFor='password'>
                            Contraseña:
                        </label>
                        <input
                            id='password'
                            type="password"
                            //onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <br />
                        <button>
                            Do Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit(e) {
        alert("Se envió el formulario")
    }
}


// ==================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />);