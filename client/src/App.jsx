import axios from 'axios'
import {UserContextProvider} from './UserContext'
import Routes from "./Routes"
function App() {
    //axios.defaults.baseURL = 'http://localhost:4000'
    axios.defaults.baseURL = 'https://appchat.eduardopmelo.com.br'
    axios.defaults.headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true,
        "Accept": "application/json"
        }
    axios.defaults.withCredentials = true

    return (
        <UserContextProvider>
            <Routes />
        </UserContextProvider>
    )
}

export default App
