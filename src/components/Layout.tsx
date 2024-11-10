'use client';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-amber-950 text-yellow-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Company Name</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:underline transition-all duration-300 hover:text-teal-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline transition-all duration-300 hover:text-teal-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/servicess"
                className="hover:underline transition-all duration-300 hover:text-teal-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline transition-all duration-300 hover:text-teal-400"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Icon */}
          <button
            className="md:hidden text-yellow-500"
            onClick={toggleMenu}
            type='submit'
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden top-0 right-0 bg-amber-950 text-yellow-500 p-4 w-3/5 z-50">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:underline transition-all duration-300 hover:text-teal-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline transition-all duration-300 hover:text-teal-400"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/servicess"
                  className="hover:underline transition-all duration-300 hover:text-teal-400"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
                <li>
                <Link
                  href="/contact"
                  className="hover:underline transition-all duration-300 hover:text-teal-400"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-amber-950 text-yellow-500 p-4 text-center">
        <p>© 2024 My Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
