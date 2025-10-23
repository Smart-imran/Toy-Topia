import React from 'react'
import { Navigate } from 'react-router'

function Home() {
  return <Navigate to="/category/0"></Navigate>
}

export default Home