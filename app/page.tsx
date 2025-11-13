import React from 'react'
import Link from 'next/link';

function Home() {
  return (
    <div>
        <Link href="/login">Go to Login </Link>
        <Link href="/signup"> Go to Signup</Link>
    </div>
  )
}

export default Home;