import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseconnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if(email !== '' && password !== '') {
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //navigar para admin
        navigate('/admin', { replace: true })
      })
      .catch(() => console.log('erro ao fazer login'))

    } else {
      alert("preencha todos os campos")
    }
  }

  return (
    <div className='home-container'>
      <h1>Lista de tarefas</h1>
      <span>Gerencie sua agenda de forma fácil</span>

      <form className='form' onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder='Digite seu email...' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          autoComplete='false'
          type="password"
          placeholder='*******' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Acessar</button>
      </form>

      <Link className='btn-link' to='/register'>Não possui uma conta? Cadastre-se</Link>
    </div>
  )
}

export default Home;