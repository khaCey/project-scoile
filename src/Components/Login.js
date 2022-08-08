import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';

import axios from './api/axios';
const LOGIN_URL = '/auth'

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErr('');
    }, [user, pass]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('login');
        try {
            const response = await axios.POST(LOGIN_URL,
                JSON.stringify({ user, pass }),
                {
                    headers: { 'Content-Type': 'applications/json' },
                    withCredentials: true
                });
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pass, roles, accessToken });
            setUser('');
            setPass('');
            setSuccess(true);

        } catch {
            if (!err.response) {
                setErr('No Server Response');
            } else if (err.response?.status === 400) {
                setErr('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErr('Unauthorised');
            } else {
                setErr('Login Failed');
            }
            errRef.current.focus();
        }


    }

    return (
        <>
            {success ? (
                <section className='section'>
                    <h1> You are logged in!</h1>
                    <a href='home'>Logout</a>
                </section>
            ) : (
                <section className='section'>
                    <p ref={errRef} className={err ? 'err' : 'offscreen'} aria-live='assertive'>{err}</p>
                    <h5>Colegio de San Antonio de Padua</h5>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Student Number</label>
                        <input
                            type="text"
                            className='inputBox'
                            id="username"
                            placeholder="Student Number"
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            className='inputBox'
                            id="password"
                            placeholder="Password"
                            autoComplete='off'
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            required
                        />
                        <span className='line'><a className='forgot' href='home'>Forgot Password?</a></span>
                        <button className='button'>LOGIN</button>
                    </form>
                </section>
            )}
        </>
    )
}

export default Login