import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const { name, email, subject, message } = body;

    // --- Server-side validation ---
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // --- Nodemailer transporter ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${sanitize(subject)}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 24px; background: #0f172a; color: #e2e8f0; border-radius: 8px;">
          <h2 style="color: #38bdf8; margin-top: 0;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #94a3b8; padding: 6px 0; width: 80px;">Name</td>
              <td style="color: #f1f5f9;">${sanitize(name)}</td>
            </tr>
            <tr>
              <td style="color: #94a3b8; padding: 6px 0;">Email</td>
              <td style="color: #f1f5f9;">${sanitize(email)}</td>
            </tr>
            <tr>
              <td style="color: #94a3b8; padding: 6px 0;">Subject</td>
              <td style="color: #f1f5f9;">${sanitize(subject)}</td>
            </tr>
          </table>
          <hr style="border-color: #1e293b; margin: 16px 0;" />
          <p style="color: #94a3b8; margin: 0 0 8px;">Message</p>
          <p style="color: #f1f5f9; white-space: pre-wrap; margin: 0;">${sanitize(message)}</p>
        </div>
      `,
    });

    // --- Auto-reply to SENDER ---
    await transporter.sendMail({
      from: `"Marc Adrian Cuano" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${sanitize(name.split(" ")[0])}!`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 24px; background: #0f172a; color: #e2e8f0; border-radius: 8px;">
          <h2 style="color: #38bdf8; margin-top: 0;">Thanks for reaching out!</h2>
          <p style="color: #cbd5e1;">
            Hey ${sanitize(name.split(" ")[0])}, I received your message and I'll get back to you as soon as possible.
          </p>
          <p style="color: #cbd5e1;">
            In the meantime, feel free to check out my work or connect with me on LinkedIn.
          </p>
          <hr style="border-color: #1e293b; margin: 16px 0;" />
          <p style="color: #475569; font-size: 12px; margin: 0;">
            This is an automated reply. Please do not reply directly to this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err: unknown) {
    console.error("[emailRoutes] Error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}