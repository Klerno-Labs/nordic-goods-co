import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Process the contact form data here
  return NextResponse.json({ message: "Success" });
}