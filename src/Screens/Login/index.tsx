import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

import * as C from './styles';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLogin = async() => {
        if (email && password) {
            const isLogged = await auth.signIn(email, password);

            if (isLogged) {
                navigate('/');
            }
            else {
                alert('Não foi possível fazer login!');
            }
        }
    }

  return (
      <C.Container>
          <C.CardAreaLogin>
                <form>
                    <div className='input-area'>
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>
                    <div className='input-area'>
                        <input 
                            type="password" 
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label>Senha</label>
                    </div>
                    <button onClick={handleLogin}>LOGIN</button>
                </form>
          </C.CardAreaLogin>
      </C.Container>
  );
}

export default Login;