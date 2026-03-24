export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically send the email or save the data
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}