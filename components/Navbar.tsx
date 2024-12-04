import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logout from './Logout'

const Navbar =async () => {
    const session = await auth()
  return (
      <nav className='border-b border-gray-300 bg-background w-full flex items-center'>
          <div className='flex w-full items-center justify-between my-4'>
            <Link href={'/'} className='font-bold'>Home</Link>
            <div className='flex items-center gap-x-5'>
                <Link href={'/dashboard'} className='font-bold'>Dashboard</Link>
                <Link href={'/add-new'} className='font-bold'>Add New</Link>
            </div>
            <div className='flex items-center gap-x-5'>
                  {!session?.user ? <Link href={'/sign-in'} className='font-bold bg-indigo-500 text-white px-4 py-2 rounded-md'>SignIn</Link> : (
                    <div>
                        {session.user.name}
                        {session?.user?.image && <Image src={session?.user?.image} width={30} height={30} alt='user avatar' className='rounded-full' />}
                        <Logout />

                    </div>      
  
                )}
                <Link href={'/contact'} className='font-bold'>Contact</Link>
            </div>
          </div>
          
    </nav>

  )
}

export default Navbar