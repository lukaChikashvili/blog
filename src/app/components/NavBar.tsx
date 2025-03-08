import { auth, signIn, signOut } from '@/auth'

import Link from 'next/link';
import React from 'react'

const NavBar = async () => {
   
    const session = await auth();

  return (
    <div>
        <nav className='flex  items-center  gap-4'>
      
         <div>
            logo
         </div>

        <div className='flex items-center gap-4'>
           {session && session?.user ? (
              <>
                 <Link href ="/blog/create">
                 <span>create</span>
                 </Link>

                 <form action = {async() => {
                    "use server";

                    await signOut({redirectTo: "/"});
                 }}>
                    <button>Logout</button>
                 </form>

                 <Link href = {`user/${session?.user?.id}`}>
                    <span>{session?.user?.name}</span>
                 </Link>
              </>
           ) : (
              <form action = {async () => {
                "use server";

                await signIn('github');
              }}>
                <button type='submit'>Login</button>

              </form>
           )}
        </div>
        </nav>
    </div>
  )
}

export default NavBar
