'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
            PA
          </div>
          PlanetAuto
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link 
            href="/" 
            className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <Link 
            href="/cars" 
            className={`hover:text-blue-600 transition-colors ${pathname === '/cars' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
          >
            Cars
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-blue-600 transition-colors ${pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-blue-600 transition-colors ${pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {status === 'loading' ? (
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
          ) : session ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase()}
                </div>
                <span className="hidden md:block text-sm">{session.user?.name || session.user?.email}</span>
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium">{session.user?.name}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Sign up
              </Link>
            </div>
          )}

          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link 
              href="/" 
              className={`py-3 px-2 hover:bg-gray-50 rounded-md ${pathname === '/' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/cars" 
              className={`py-3 px-2 hover:bg-gray-50 rounded-md ${pathname === '/cars' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Cars
            </Link>
            <Link 
              href="/about" 
              className={`py-3 px-2 hover:bg-gray-50 rounded-md ${pathname === '/about' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`py-3 px-2 hover:bg-gray-50 rounded-md ${pathname === '/contact' ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t my-2"></div>
            {session ? (
              <>
                <div className="px-2 py-3 text-sm font-medium">
                  Signed in as {session.user?.name || session.user?.email}
                </div>
                <Link
                  href="/profile"
                  className="py-2 px-2 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/bookings"
                  className="py-2 px-2 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-left py-2 px-2 hover:bg-gray-50 rounded-md"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="py-2 px-2 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="py-2 px-2 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
            <div className="border-t my-2"></div>
            <Link 
              href="/cars" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md text-center font-semibold mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Car
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}