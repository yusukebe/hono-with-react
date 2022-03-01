import React, { useState, useEffect } from 'react'

const App = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api')
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.message)
        })
    }
    fetchData()
  }, [])
  return <h1>{message}</h1>
}

export default App
