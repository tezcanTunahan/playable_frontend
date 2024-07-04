import React from 'react';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='bg-black w-full h-screen flex items-center justify-center'>
      <div className='bg-white  p-32 rounded-xl flex items-center flex-col gap-4'>
        <h1 className='text-4xl font-semibold'>
          Welcome to{' '}
          <Link href='/' className='text-purple-500'>
            Playable Factory!
          </Link>
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
