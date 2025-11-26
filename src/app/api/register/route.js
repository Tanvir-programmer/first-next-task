import bcrypt from "bcryptjs";

let users = global.users || (global.users = []);

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (users.find((u) => u.email === email)) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ name, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: "User registered" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
