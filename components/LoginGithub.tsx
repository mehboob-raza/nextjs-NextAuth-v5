"use client"
import { login } from '@/actions/auth'
import { signIn } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import {FaGithub} from 'react-icons/fa'
const LoginGithub = () => {
  return (
    <div onClick={() => login('github')} className='w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-slate-700 rounded-md p-4 flex items-center'>
        <FaGithub />
        <p className='text-white'>SignIn With Github</p>
    </div>
  )
}

export default LoginGithub