import React from 'react';
import { useSelector } from 'react-redux';

const Welcom = () => {
   const {user} = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className='title'>DashBoard</h1>
      <h2 className='subtitle'> Welcome Back  <strong>{user && user.name}</strong>
      </h2>
    </div>
  )
}

export default Welcom
