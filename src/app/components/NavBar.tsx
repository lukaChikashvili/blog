import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link';
import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image';

const NavBar = async () => {
    const session = await auth();

    return (
        <div className='w-full px-12 py-2 bg-transparent text-white text-xl flex items-center justify-between'>
            <nav className='flex items-center gap-4 w-full'>

               
                <div>
                    <Image src={logo} alt="logo" width={100} />
                </div>

                
                {session && session?.user ? (
                    <div className='flex items-center gap-4'>
                        <Link href="/blog/create">
                            <span>Create</span>
                        </Link>
                        <Link href={`/user/${session?.user?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </div>
                ) : null}

             
                <div className='ml-auto'>
                    {session && session?.user ? (
                        <form action={async () => {
                            "use server";
                            await signOut({ redirectTo: "/" });
                        }}>
                            <button>Logout</button>
                        </form>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn('github');
                        }}>
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
