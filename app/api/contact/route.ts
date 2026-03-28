import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
    const body = await request.json();
    const { name, email, phone, message, type, state } = body;

    const subject = `New contact from ${name}`;

    const html = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      ${state ? `<p><strong>State:</strong> ${state}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
      <hr>
      <p style="color: #888; font-size: 12px;">Sent via biohazards.net</p>
    `;

    await resend.emails.send({
      from: 'biohazards.net <noreply@biohazards.net>',
      to: process.env.CONTACT_EMAIL || 'ben.mustonen@brisbanebiohazardcleaning.com.au',
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
