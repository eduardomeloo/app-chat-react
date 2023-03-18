import axios from 'axios'
import {UserContextProvider} from './UserContext'
import Routes from "./Routes"
function App() {
    //axios.defaults.baseURL = 'http://localhost:4000'
    axios.defaults.baseURL = 'https://appchat.eduardopmelo.com.br'
    axios.defaults.withCredentials = true

    return (
        <UserContextProvider>
            <Routes />
        </UserContextProvider>
    )
}

export default App
