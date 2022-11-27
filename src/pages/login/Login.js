import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, isPending, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        login(email, password)
    }



    return (
        <form className='auth-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>Password:</span>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            <label>

            </label>
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>Loading...</button>}
            {error && <div className='error'>{error}</div>}
        </form >
    )
}

export default Login
