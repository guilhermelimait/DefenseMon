import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Backend not running or API error!'))
  }, [])

  return (
    <div>
      <h1>Vite + React + FastAPI Example</h1>
      <p>{message}</p>
    </div>
  )
}

export default App