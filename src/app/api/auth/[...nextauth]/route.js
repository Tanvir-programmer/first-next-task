import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let users = global.users || (global.users = []);

export async function POST(req) {
  const { email, password, name } = await req.json();

  if (users.find((u) => u.email === email)) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ email, password: hashedPassword, name });

  return NextResponse.json({ message: "User registered" }, { status: 201 });
}
