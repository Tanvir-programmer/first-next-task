import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MyApp</h2>
          <p className="text-gray-400">
            MyApp is a modern platform for managing courses, connecting users,
            and providing seamless online learning experiences.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-white transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@myapp.com"
                className="hover:text-white transition-colors"
              >
                support@myapp.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-white transition-colors"
              >
                +1 234 567 890
              </a>
            </li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
