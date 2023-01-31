import React, {useState} from 'react';
import axios from 'axios';

function LoginForm() {
    const [userName, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const handleSubmit= async(e) =>{
        e.preventDefault();

        const authObject = { 
                            'Project-ID': '37bf798c-f59d-482d-8ffc-c5ad4a05573a', 
                            'User-Name':userName,
                            'User-Secret': password
                        }


        try {
            //username
           await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            
           localStorage.setItem('username', userName);
           localStorage.setItem('password', password);

           window.location.reload();


        } catch (error) {
            seterror("Oops, Incorrect Credentials")
        }
    }

  return (
    <div className='wrapper'>
      <div className="form">
        <h1 className="title"> Chat Application </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className='input' placeholder='Password' required />
            <div align='center'>
                <button type="submit" className='button'>
                    <span>Start Chatting</span>
                </button>
            </div>

            <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
