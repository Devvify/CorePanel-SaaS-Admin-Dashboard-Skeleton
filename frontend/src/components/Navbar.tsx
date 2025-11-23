import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{padding:'10px',background:'#1976d2',color:'#fff'}}>
      <Link href="/">Dashboard</Link> | <Link href="/login">Login</Link>
    </nav>
  );
}
