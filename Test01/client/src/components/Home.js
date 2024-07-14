import React from 'react'
import EncryptForm from './services/EncryptForm';
import DecryptForm from './services/DecryptForm';

const Home = () => {
  return (
    <div className='home-outer'>
      <EncryptForm />
      <DecryptForm />
    </div>
  )
}

export default Home