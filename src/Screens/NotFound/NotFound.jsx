import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const nav = useNavigate();
  return (
    <>
    <div style={{position:"relative", top:250, left:559}}>

        <h1>404</h1>
        <h2>Page Not Found</h2>
        <button className='ItemButton1 mt-5' onClick={()=>nav("/")}>Back To Home</button>
    </div>
    
    
    </>
  )
}

export default NotFound
