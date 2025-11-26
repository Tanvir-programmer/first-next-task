"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Best <span className="text-orange-500">Course</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/addCourse">Add Course</Link>
          <Link href="/contact">Contact</Link>

          {/* Right Section: Login/Register or Profile */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-1 border rounded flex items-center gap-2"
              >
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt="profile"
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span>{session.user.name || session.user.email}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md flex flex-col">
                  <Link href="/profile" className="px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/addCourse" className="px-4 py-2 hover:bg-gray-100">
                    Add Course
                  </Link>
                  <Link href="/manageCourses" className="px-4 py-2 hover:bg-gray-100">
                    Manage Courses
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 border"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t flex flex-col">
          <Link href="/" className="px-4 py-2">Home</Link>
          <Link href="/courses" className="px-4 py-2">Courses</Link>
          <Link href="/addCourse" className="px-4 py-2">Add Course</Link>
          <Link href="/contact" className="px-4 py-2">Contact</Link>

          {session ? (
            <div className="border-t">
              <Link href="/profile" className="block px-4 py-2">Profile</Link>
              <Link href="/addCourse" className="block px-4 py-2">Add Course</Link>
              <Link href="/manageCourses" className="block px-4 py-2">Manage Courses</Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 p-2 border-t">
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
