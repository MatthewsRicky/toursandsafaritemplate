import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      practiceArea,
      message,
      phone,
      travelers,
      dates,
      destination,
    } = body as Record<string, string>;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM_EMAIL =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const CONTACT_TO_EMAIL =
      process.env.CONTACT_TO_EMAIL || "matthewsrickypro@gmail.com";

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const html = `
      <h3>New contact enquiry</h3>
      <p><strong>Name:</strong> ${fullName || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Travelers:</strong> ${travelers || "-"}</p>
      <p><strong>Dates:</strong> ${dates || "-"}</p>
      <p><strong>Destination / Package:</strong> ${destination || practiceArea || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message || "-").replace(/\n/g, "<br>")}</p>
    `;

    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Website enquiry from ${fullName || "visitor"}`,
      replyTo: email,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/contact route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
