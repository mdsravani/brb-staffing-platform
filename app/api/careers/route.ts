import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name   = formData.get("name")   as string;
    const email  = formData.get("email")  as string;
    const phone  = formData.get("phone")  as string;
    const domain = formData.get("domain") as string;
    const resume = formData.get("resume") as File | null;

    // Validation
    if (!name || !email || !phone || !domain || !resume) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Convert resume file to buffer for attachment
    const resumeBytes  = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(resumeBytes);

    // Send to your inbox
    await resend.emails.send({
      from: "BRB Website <onboarding@resend.dev>",
      to:   ["mdsravanidatascience@gmail.com"],
      subject: `New Career Application — ${name} (${domain})`,
      attachments: [
        {
          filename: resume.name,
          content:  resumeBuffer,
        },
      ],
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
          <div style="background:#1e3a5f;padding:24px 32px;border-radius:10px 10px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">New Career Application</h2>
          </div>
          <div style="background:#f8fafc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr style="border-bottom:1px solid #e2e8f0">
                <td style="padding:10px 0;color:#64748b;width:120px">Name</td>
                <td style="padding:10px 0;color:#0f172a;font-weight:600">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0">
                <td style="padding:10px 0;color:#64748b">Email</td>
                <td style="padding:10px 0;color:#0f172a;font-weight:600">
                  <a href="mailto:${email}" style="color:#1d4ed8">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0">
                <td style="padding:10px 0;color:#64748b">Phone</td>
                <td style="padding:10px 0;color:#0f172a;font-weight:600">${phone}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#64748b">Domain</td>
                <td style="padding:10px 0">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">
                    ${domain}
                  </span>
                </td>
              </tr>
            </table>
            <p style="margin:20px 0 0;font-size:13px;color:#94a3b8">
              Resume attached — ${resume.name}
            </p>
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Career form error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500 }
    );
  }
}