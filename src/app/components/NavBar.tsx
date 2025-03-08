import { auth } from '@/auth'
import Link from 'next/link';
import React from 'react'

const NavBar = async () => {
   
    const session = await auth();

  return (
    <div>
        <nav className='flex items-center gap-4'>
      
         <div>
            logo
         </div>

        <div>
           {session && session?.user && (
              <>
                 <Link href ="/blog/create">
                 <span>create</span>
                 </Link>
              </>
           )}
        </div>
        </nav>
    </div>
  )
}

export default NavBar
