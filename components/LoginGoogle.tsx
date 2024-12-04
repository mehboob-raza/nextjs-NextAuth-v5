"use client"
import { login } from '@/actions/auth'
import React from 'react'
import {FaGoogle} from 'react-icons/fa'
const Google = () => {
  return (
    <div onClick={() => login('google')} className='w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-gray-900 rounded-md p-4 flex items-center'>
        <FaGoogle />
        <p className='text-white'>SignIn With Google</p>
    </div>
  )
}

export default Google