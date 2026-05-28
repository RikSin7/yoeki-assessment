export async function POST(req: Request) {
  const body = await req.json();

  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!body.email) {
    return Response.json(
      {
        message: "Email is required",
      },
      {
        status: 400,
      }
    );
  }

  return Response.json({
    success: true,
    message: "Form submitted successfully",
  });
}