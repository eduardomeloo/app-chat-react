import { useContext, useState } from 'react';
import axios from 'axios'
import {UserContext} from './UserContext'
import { Alert, Button } from "@material-tailwind/react";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [msgError, setMsgError] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault()
        const url = isLoginOrRegister === 'register' ? 'register' : 'login'
        const {data} = await axios.post(url, {username, password}).then().catch(error => error.response)
        if (data === "Usuário ou Senha Incorretos") {
            setMsgError('Usuário ou Senha Incorretos')
            setShow(true)
            setTimeout(() => {
                setShow(false)
                setMsgError('')
            }, 3000);
        } else {
            setLoggedInUsername(username)
            setId(data.id)
        }
        
    }
    /*
    
     <Alert
                className="bg-blue-gray-600 max-w-screen-md m-2"
                show={show}
                color="red"
                dismissible={{
                onClose: () => setShow(false),
                action: (
                    <Button variant="text" color="white" size="sm">
                    Close
                    </Button>
                ),
                }}
            >
                Sorry, something went wrong please try again.
            </Alert>
            
            */
    return (
        <div className="bg-blue-50 h-screen flex items-center flex-col justify-center">
            
            <Alert
                className="bg-blue-gray-600 max-w-screen-md m-2"
                show={show}
                color="red"
                dismissible={{
                onClose: () => setShow(false),
                action: (
                    <Button variant="text" color="white" size="sm">
                    Close
                    </Button>
                ),
                }}
            >
                {msgError}
            </Alert>
            
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
                            <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                                login here
                            </button>
                        </div>
                    )}
                    {isLoginOrRegister === 'login' && (
                        <div>
                        Dont have an account?
                        <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                            Register here
                        </button>
                    </div>
                    )}
                </div>
            </form>
        </div>
    );
}