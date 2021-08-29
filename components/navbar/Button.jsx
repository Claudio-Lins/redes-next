import React from 'react';
import Link from 'next/link';

export default function Button() {
  return (
    <Link href='#'>
      <a><button className='btn bg-blue-600'>Sign Up</button></a>
    </Link>
  );
}