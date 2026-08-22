import { NextResponse } from "next/server";

import { sendContactForm } from "@/app/actions/contacts";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  travelers?: string;
  dates?: string;
  destination?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const formData = {
      fullName: String(body.fullName ?? "").trim(),
      email: String(body.email ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      travelers: String(body.travelers ?? "").trim(),
      dates: String(body.dates ?? "").trim(),
      destination: String(body.destination ?? "").trim(),
      message: String(body.message ?? "").trim(),
    };

    if (!formData.fullName || !formData.email || !formData.message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in your name, email, and message.",
        },
        { status: 400 },
      );
    }

    const result = await sendContactForm({
      ...formData,
      practiceArea: formData.destination || "Custom itinerary",
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to send message" },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Invalid contact form payload." },
      { status: 400 },
    );
  }
}
