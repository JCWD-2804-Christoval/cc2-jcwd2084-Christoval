// src/app/layout.tsx
import '../styles/globals.css'
import Link from 'next/link'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
    <body>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Company Logo" className="h-10"/>
          <h1 className="text-2xl">Daffascript Ltd.</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/teams">Teams</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 Daffascript Ltd. All rights reserved.
      </footer>
    </div>
    </body>
    </html>
  );
}

export default Layout;
