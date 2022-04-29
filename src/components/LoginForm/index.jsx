import React, { useState } from 'react'
import axios from 'axios'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();//stop broswer default refresh

    const authObj = {
      'Project-ID': '65ec3008-8e68-4a59-80ad-8bd287c5b720',
      'User-Name': username,
      'User-Secret': password
    }

    try {
      // username / password => chatengine -> give messages
      await axios.get('https://api.chatengine.io/chats', { headers: authObj })

      // work out -> logged in
      localStorage.setItem('username', username )
      localStorage.setItem('password', password )

      window.location.reload()

    } catch (error) {
      // error -> try with new username
      setError('Oops, incorrect credentials.')
    }

  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  )
}
