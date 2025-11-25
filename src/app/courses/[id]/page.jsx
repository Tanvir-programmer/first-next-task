"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setCourse(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!course)
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
      {/* Course Header */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-6xl">
          📚
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="text-gray-700 font-semibold text-lg">
            Price: <span className="text-blue-600">${course.price}</span>
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Duration: {course.duration}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Level: {course.level}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              Category: {course.category}
            </span>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Course Description</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>

      {/* Back Button */}
      <Link
        href="/courses"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Courses
      </Link>
    </div>
  );
}
