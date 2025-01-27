import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Login</h1>
      <div>
      <label>
          Username: <input name="username" defaultValue="Example" />
      </label>
      <label> 
          Password: <input name="password" type="password" defaultValue="Example" />
      </label>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Funny text
        </p>
      </div>
    </>
  )
}

export default Login
