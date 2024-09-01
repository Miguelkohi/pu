import React, { useState } from 'react';
import './App.scss';

export default function LoginAdm() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className='loginadm'>
      <header className="nav">
        <h4>ADMINISTRADOR</h4>
        <a href="/" className="back-button">Voltar</a>
      </header>

      <div className="container">
        <div className="login-box">
          <div className="visual">
            <h2>LOGIN ADM</h2>
            <div className="linha"></div>
            <img src="/image/logo frei.png" alt="Logo" className="logo" />
          </div>

          <form className="barInput">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Nome..." 
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                required 
              />
            </div>

            <div className="input-group">
              <input 
                type="password" 
                placeholder="Senha" 
                value={senha} 
                onChange={e => setSenha(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="btn">ENTRAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

