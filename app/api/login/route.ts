import { NextResponse } from "next/server";
import { db } from "../../../db";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const query = `
    SELECT * FROM users WHERE username = '${username}' AND password = '${password}'
  `;

  try {
    const result = await db.execute(query);

    if (result.length > 0) {
      return NextResponse.json({ message: "Login Successful!" });
    } else {
      return NextResponse.json({ message: "Login Failed!" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
