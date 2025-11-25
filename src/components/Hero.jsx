import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 my-5">
      {/* Optional Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg" // Replace with your background image or remove if not needed
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Learn, Build, and Grow Your Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Join thousands of students and developers mastering web development
          with hands-on projects.
        </p>
        <Link
          href="/courses"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
