import { logout } from '@/actions/auth'
import React from 'react'

const Logout = () => {
  return (
    <div onClick={() => logout()} className='bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer'>Logout</div>
  )
}

export default Logout