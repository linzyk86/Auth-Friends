import React, {useState} from 'react';
import axios from 'axios';

class Login extends React.Component{
      state = {
        credentials: {
        username: "",
        password: ""
    }
  };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        // make a post request to the login endpoint on the server
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                // redirect the user to the app's main logged in page
                this.props.history.push('/protected');
            })
            .catch(err => console.log({ err }));
    };

        render(){
        return (
            <div>
                <form onSubmit = {this.login}>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Username'
                        value = {this.state.credentials.username}
                        onChange = { this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value = {this.state.credentials.password}
                        onChange = { this.handleChange}

                    />
                    <button>Login</button>
                </form>
            </div>
        );
    
};
}

export default Login;