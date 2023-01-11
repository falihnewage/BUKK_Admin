import React from 'react'
import NavBar from '../components/NavBar'
import Wrapper from '../components/LoginWrapper'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(event.target.value)
  }
  return (
    <>
      <NavBar />
      <Wrapper />
    </>
  )
}

export default Login
