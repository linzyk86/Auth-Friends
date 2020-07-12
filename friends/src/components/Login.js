import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
    const [state, setState] = useState({
        credentials: {
            username: "",
            password: ""
        }
    });

    const handleChange = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    const login = e => {
        e.preventDefault();
        // make a post request to the login endpoint on the server
        axios
            .post('http://localhost:5000/api/login', state.credentials)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                // redirect the user to the app's main logged in page
                props.history.push('/protected');
            })
            .catch(err => console.log({ err }));
    };

   
        return (
            <div>
                <form onSubmit = {login}>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Username'
                        value = {state.credentials.username}
                        onChange = { handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value = {state.credentials.password}
                        onChange = { handleChange}

                    />
                    <button>Login</button>
                </form>
            </div>
        );
    
};


export default Login;