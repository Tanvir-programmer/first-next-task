"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: loginEmail,
      password: loginPassword,
    });
    if (res?.error) setError("Invalid credentials");
    else router.push("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.message || "Registration failed");
    } else {
      setError("");
      setTab("login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 ${
              tab === "login" ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 ${
              tab === "register" ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {/* Social Login */}
        {tab === "login" && (
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full py-3 bg-blue-600 text-white rounded mb-4"
          >
            Sign in with Google
          </button>
        )}

        {/* Forms */}
        {tab === "login" ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-2"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-2"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button className="w-full py-3 bg-green-600 text-white rounded mb-2">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded mb-2"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-2"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded mb-2"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
            <button className="w-full py-3 bg-green-600 text-white rounded mb-2">
              Register
            </button>
          </form>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
