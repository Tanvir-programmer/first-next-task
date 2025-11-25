"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  const fetchCourses = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: Number(price), description, duration, level, category }),
    });

    if (res.ok) {
      setName(""); setPrice(""); setDescription(""); setDuration(""); setLevel(""); setCategory("");
      fetchCourses();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">

     

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="p-6 bg-white rounded shadow hover:shadow-lg cursor-pointer flex flex-col gap-2 transition">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-4xl">📚</div>
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
              <div className="flex justify-between mt-2 text-gray-700 font-medium">
                <span>${course.price}</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm mt-1">
                <span>{course.level}</span>
                <span>{course.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
