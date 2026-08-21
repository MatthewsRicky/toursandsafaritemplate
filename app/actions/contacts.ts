"use server";

import { Resend } from "resend";

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  practiceArea: string;
  message: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_FROM_EMAIL =
    process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const CONTACT_TO_EMAIL =
    process.env.CONTACT_TO_EMAIL || "matthewsrickypro@gmail.com";

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, error: "Email service not configured" };
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: `Legal Inquiry - ${formData.practiceArea}`,
      replyTo: formData.email,
      text: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPractice Area: ${formData.practiceArea}\n\nMessage:\n${formData.message}`,
      html: `<p><strong>Name:</strong> ${formData.fullName}</p><p><strong>Email:</strong> ${formData.email}</p><p><strong>Practice Area:</strong> ${formData.practiceArea}</p><p><strong>Message:</strong></p><p>${String(
        formData.message,
      ).replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return { success: false, error: "Failed to send email" };
  }
}
