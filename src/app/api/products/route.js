let courses = [
  {
    id: 1,
    name: "Complete React Developer",
    price: 79,
    description:
      "Learn React from scratch and build dynamic, responsive web applications. Covers components, hooks, state management, and modern best practices.",
    duration: "6 weeks",
    level: "Beginner to Advanced",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Advanced Next.js & App Router",
    price: 99,
    description:
      "Master Next.js features like App Router, Server Components, API Routes, and optimized performance for production-ready apps.",
    duration: "4 weeks",
    level: "Intermediate to Advanced",
    category: "Web Development",
  },
  {
    id: 3,
    name: "MERN Stack Bootcamp",
    price: 129,
    description:
      "Build full-stack applications using MongoDB, Express.js, React, and Node.js. Includes authentication, CRUD operations, and deployment.",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Full-Stack Development",
  },
  {
    id: 4,
    name: "JavaScript Essentials",
    price: 49,
    description:
      "A strong foundation in JavaScript covering ES6+, asynchronous programming, DOM manipulation, and real-world projects.",
    duration: "3 weeks",
    level: "Beginner",
    category: "Programming Basics",
  },
  {
    id: 5,
    name: "TypeScript Masterclass",
    price: 69,
    description:
      "Learn TypeScript to write safer, scalable code. Covers types, interfaces, generics, and integration with React and Node.js.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Programming",
  },
  {
    id: 6,
    name: "Tailwind CSS & Responsive Design",
    price: 39,
    description:
      "Design beautiful and responsive UI quickly with Tailwind CSS. Learn utilities, layout, animations, and building real-world components.",
    duration: "2 weeks",
    level: "Beginner",
    category: "UI/UX Design",
  },
  {
    id: 7,
    name: "Node.js & Express.js API Development",
    price: 59,
    description:
      "Build RESTful APIs with Node.js and Express.js. Covers routing, middleware, JWT authentication, and connecting with MongoDB.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Backend Development",
  },
  {
    id: 8,
    name: "Python for Data Science",
    price: 89,
    description:
      "Learn Python basics, NumPy, Pandas, and Matplotlib to analyze data and create visualizations for real-world datasets.",
    duration: "5 weeks",
    level: "Beginner to Intermediate",
    category: "Data Science",
  },
  {
    id: 9,
    name: "Machine Learning A-Z",
    price: 149,
    description:
      "Master machine learning concepts with Python. Covers regression, classification, clustering, neural networks, and deployment.",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    category: "Data Science / AI",
  },
  {
    id: 10,
    name: "Full-Stack Portfolio Projects",
    price: 119,
    description:
      "Build 5+ full-stack projects using modern technologies including React, Node.js, Express, MongoDB, and Next.js to showcase in your portfolio.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Full-Stack Development",
  },
];

// GET route
export async function GET() {
  return new Response(JSON.stringify(courses), { status: 200 });
}

// POST route to add new course
export async function POST(req) {
  const body = await req.json();
  const newCourse = {
    id: courses.length + 1,
    name: body.name,
    price: body.price,
    description: body.description || "No description provided.",
    duration: body.duration || "N/A",
    level: body.level || "Beginner",
    category: body.category || "General",
  };
  courses.push(newCourse);
  return new Response(JSON.stringify(newCourse), { status: 201 });
}
