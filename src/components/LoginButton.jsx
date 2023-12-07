
'use client'
import React from 'react'
import Link from 'next/link';


const LoginButton = () => {
  return (
    <Link href={"/login"}>
    <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-6 py-3.5 rounded-xl max-md:px-5">
        Log in
    </div>
    </Link>
  )
}

export default LoginButton
