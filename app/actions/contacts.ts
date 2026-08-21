"use server";

import { Resend } from "resend";

function getEmailConfig() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY?.trim(),
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL?.trim(),
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL?.trim(),
  };
}

export async function sendContactForm(formData: {
  fullName: string;
  email: string;
  practiceArea: string;
  message: string;
}) {
  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } =
    getEmailConfig();

  if (!RESEND_API_KEY) {
    console.error(
      "Missing RESEND_API_KEY environment variable. Configure it in Vercel and redeploy.",
    );
    return {
      success: false,
      error:
        "Email service not configured. Add RESEND_API_KEY in Vercel project settings.",
    };
  }

  const FROM_EMAIL = RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const TO_EMAIL = CONTACT_TO_EMAIL || "matthewsrickypro@gmail.com";

  if (!FROM_EMAIL || FROM_EMAIL === "onboarding@resend.dev") {
    console.error(
      "RESEND_FROM_EMAIL is missing or still using the Resend sandbox address. Set a verified sender in Vercel.",
    );
    return {
      success: false,
      error:
        "Email service not configured. Set RESEND_FROM_EMAIL to a verified sender address in Vercel.",
    };
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
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
