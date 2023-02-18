import { useState } from 'react';
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault()
        await axios.post('/register', {username, password})
    }
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>
                <input  value={username} type="text" placeholder="username"
                        onChange={event => setUsername(event.target.value)} 
                        className="block w-full rounded-sm p-2 mb-2 border" />

                <input  value={password} type="password" placeholder="password"
                        onChange={event => setPassword(event.target.value)}
                        className="block w-full rounded-sm p-2 mb-2 border" />

                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    Register
                </button>
            </form>
        </div>
    );
}