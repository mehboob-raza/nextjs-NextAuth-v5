import LoginGithub from '@/components/LoginGithub'
import Google from '@/components/LoginGoogle'
import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full flex mt-20 justify-center'>
        <div className='flex flex-col w-[400px]'>
            <h1 className='text-4xl w-full text-center font-bold mb-10'>Sign In</h1>
            <LoginGithub />
            <Google />
        </div>
    </div>
  )
}

export default SignIn