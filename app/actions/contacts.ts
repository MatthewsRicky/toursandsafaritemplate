"use server";

import { Resend } from "resend";

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  phone?: string;
  travelers?: string;
  dates?: string;
  destination?: string;
  practiceArea?: string;
  message: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
  const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL?.trim();
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL?.trim();

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      success: false,
      error:
        "Email service not configured. Add RESEND_API_KEY in Vercel project settings.",
    };
  }
  if (!RESEND_FROM_EMAIL) {
    console.error("Missing RESEND_FROM_EMAIL environment variable");
    return {
      success: false,
      error:
        "Email service not configured. Add RESEND_FROM_EMAIL in Vercel project settings.",
    };
  }

  if (!CONTACT_TO_EMAIL) {
    console.error("Missing CONTACT_TO_EMAIL environment variable");
    return {
      success: false,
      error:
        "Email service not configured. Add CONTACT_TO_EMAIL in Vercel project settings.",
    };
  }

  const resend = new Resend(RESEND_API_KEY);
  const destination =
    formData.destination || formData.practiceArea || "Custom itinerary";

  try {
    const data = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Travel enquiry from ${formData.fullName || "Guest"}`,
      replyTo: formData.email,
      text: `Full name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone ?? ""}\nTravelers: ${formData.travelers ?? ""}\nTravel dates: ${formData.dates ?? ""}\nDestination: ${destination}\n\nMessage:\n${formData.message}`,
      html: `<p><strong>Full name:</strong> ${formData.fullName}</p><p><strong>Email:</strong> ${formData.email}</p><p><strong>Phone:</strong> ${formData.phone ?? ""}</p><p><strong>Travelers:</strong> ${formData.travelers ?? ""}</p><p><strong>Travel dates:</strong> ${formData.dates ?? ""}</p><p><strong>Destination:</strong> ${destination}</p><p><strong>Message:</strong></p><p>${String(
        formData.message,
      ).replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return { success: false, error: "Failed to send email" };
  }
}
