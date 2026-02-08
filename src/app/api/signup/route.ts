import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = await request.json();

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "BCP <hello@bookcontextprotocol.com>",
      to: email,
      subject: "Welcome to Book Context Protocol",
      text: [
        `Hey ${firstName},`,
        "",
        "Thanks for signing up for updates on Book Context Protocol.",
        "",
        "We're building BCP in the open — a content and retrieval standard for books, papers, and deep reference material built for AI. We'll send you updates as things take shape.",
        "",
        "In the meantime, if you have questions or ideas, just reply to this email.",
        "",
        "— The BCP team",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
