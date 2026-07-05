import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // ── Server-side validation ────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    // ── Nodemailer transporter ────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const dateStr = new Date().toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    // ── 1. Notification email → you ───────────────────────
    // Plain text is REQUIRED alongside HTML to pass spam filters
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New message from ${name} via ankit.dev`,
      text: `
New contact form submission — ankit.dev
========================================

From   : ${name}
Email  : ${email}
Date   : ${dateStr}

Message:
${message}

----------------------------------------
Hit Reply to respond directly to ${name}.
      `.trim(),
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <tr>
          <td style="background:#064e3b;padding:28px 36px;">
            <p style="margin:0 0 4px;font-size:11px;color:#6ee7b7;text-transform:uppercase;letter-spacing:0.08em;font-family:monospace;">ankit.dev · Portfolio Contact</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">New message from ${name}</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 36px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:12px;color:#6b7280;font-family:monospace;text-transform:uppercase;width:80px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;font-weight:600;color:#111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:12px;color:#6b7280;font-family:monospace;text-transform:uppercase;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;">
                  <a href="mailto:${email}" style="color:#059669;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-size:12px;color:#6b7280;font-family:monospace;text-transform:uppercase;">Sent</td>
                <td style="padding:10px 0;font-size:14px;color:#374151;">${dateStr}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 36px;">
            <p style="margin:0 0 10px;font-size:12px;color:#6b7280;font-family:monospace;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:18px;font-size:15px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</div>
          </td>
        </tr>

        <tr>
          <td style="padding:0 36px 32px;">
            <a href="mailto:${email}?subject=Re: Your message via ankit.dev"
               style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
              Reply to ${name} →
            </a>
          </td>
        </tr>

        <tr>
          <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 36px;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">Sent via ankit.dev contact form · ${dateStr}</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `.trim(),
      headers: {
        "X-Priority": "1",
        "X-Mailer": "ankit.dev Portfolio",
        "Importance": "High",
      },
    });

    // ── 2. Auto-reply → sender ────────────────────────────
    await transporter.sendMail({
      from: `"Ankit Kumar" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out — Ankit Kumar",
      text: `
Hey ${name},

Thanks for getting in touch! I've received your message and will get back to you within 24 hours.

In the meantime, feel free to check out my work:
- GitHub: https://github.com/ankitkumar25-rk
- LinkedIn: https://www.linkedin.com/in/ankit-kumar-478316378/

— Ankit

---
This is an automated reply from ankit.dev. Please do not reply to this email.
      `.trim(),
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:560px;width:100%;">
        <tr>
          <td style="background:#064e3b;padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">Got your message 👋</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151;">Hey ${name},</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#374151;">
              Thanks for reaching out! I received your message and will reply within <strong>24 hours</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#374151;">
              In the meantime, feel free to explore my work on
              <a href="https://github.com/ankitkumar25-rk" style="color:#059669;">GitHub</a> or connect on
              <a href="https://www.linkedin.com/in/ankit-kumar-478316378/" style="color:#059669;">LinkedIn</a>.
            </p>
            <p style="margin:0;font-size:15px;color:#374151;">— Ankit 🚜</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:14px 32px;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">Automated reply from ankit.dev · Do not reply to this email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err: unknown) {
    console.error("[Contact API] SMTP error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
