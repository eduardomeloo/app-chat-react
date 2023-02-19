import { useContext, useState } from 'react';
import axios from 'axios'
import {UserContext} from './UserContext'
export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('register')
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);

    async function handleSubmit(ev) {
        ev.preventDefault()
        const url = isLoginOrRegister === 'register' ? 'register' : 'login'
        const {data} = await axios.post(url, {username, password})
        setLoggedInUsername(username)
        setId(data.id)
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input  value={username} type="text" placeholder="username"
                        onChange={event => setUsername(event.target.value)} 
                        className="block w-full rounded-sm p-2 mb-2 border" />

                <input  value={password} type="password" placeholder="password"
                        onChange={event => setPassword(event.target.value)}
                        className="block w-full rounded-sm p-2 mb-2 border" />

                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center mt-2">
                    
                    {isLoginOrRegister === 'register' && (
                        <div>
                            Already a member?
                            <button onClick={() => setIsLoginOrRegister('login')}>
                                login here
                            </button>
                        </div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>
                        Dont have an account?
                        <button onClick={() => setIsLoginOrRegister('register')}>
                            Register here
                        </button>
                    </div>
                    )}
                </div>
            </form>
        </div>
    );
}