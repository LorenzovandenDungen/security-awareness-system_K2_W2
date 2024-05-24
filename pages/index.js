import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Security Awareness System</h1>
        <div className="space-y-4">
          <Link href="/admin">
            <a className="block w-64 text-center bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
              Admin Dashboard
            </a>
          </Link>
          <Link href="/employee">
            <a className="block w-64 text-center bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300">
              Employee Dashboard
            </a>
          </Link>
          <Link href="/company">
            <a className="block w-64 text-center bg-purple-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-purple-600 transition duration-300">
              Company Dashboard
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
