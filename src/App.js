import { ChatEngine } from 'react-chat-engine';
import './App.css'
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine 
            height = "100vh"
            projectID= "37bf798c-f59d-482d-8ffc-c5ad4a05573a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
             />
    );
}

export default App;