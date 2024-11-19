import React from 'react';
import  Link from 'next/link';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen size={24} />
          <span className="text-xl ">Online German Classes </span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link href="/courses" className="hover:text-blue-200">Courses</Link></li>
            <li><Link href="/schedules" className="hover:text-blue-200">Schedule</Link></li>
            <li><a href="#" className="hover:text-blue-200">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;