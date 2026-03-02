import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    await resend.emails.send({
  from: "BRB Website <onboarding@resend.dev>",
  to: ["mdsravanidatascience@gmail.com"],
  subject: "New Website Inquiry",
  text: `
Name: ${name}
Email: ${email}

Message:
${message}
  `,
});

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500 }
    );
  }
}