"use client";

import { useEffect, useState } from "react";

export default function BannerPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products") // your API route
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.slice(0, 4)); // show only first 4 courses
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded shadow hover:shadow-lg transition p-6 flex flex-col">
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center text-5xl mb-4">
              📚
            </div>
            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
            <p className="text-gray-600 mb-2">{course.description.substring(0, 70)}...</p>
            <p className="text-gray-700 font-semibold mb-2">Price: ${course.price}</p>
            <p className="text-gray-600 text-sm">{course.duration} | {course.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

