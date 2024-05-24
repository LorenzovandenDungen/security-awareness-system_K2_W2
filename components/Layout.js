import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li><Link href="/admin"><a className="text-white">Admin</a></Link></li>
        <li><Link href="/employee"><a className="text-white">Employee</a></Link></li>
        <li><Link href="/company"><a className="text-white">Company</a></Link></li>
      </ul>
    </nav>
    <main className="p-4">
      {children}
    </main>
  </div>
);

export default Layout;
