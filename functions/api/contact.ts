/// <reference types="@cloudflare/workers-types" />
interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
}

interface ContactRequest {
  name: string;
  email: string;
  category: string;
  message: string;
  'cf-turnstile-response': string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data: ContactRequest = await context.request.json() as ContactRequest;
    const { name, email, category, message, 'cf-turnstile-response': token } = data;

    // 1. Verify Turnstile Token
    const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: context.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const turnstileOutcome = await turnstileResult.json() as { success: boolean };

    if (!turnstileOutcome.success) {
      return new Response(JSON.stringify({ success: false, message: 'Turnstile verification failed' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Send Email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Update this if you have a verified domain
        to: ['jakub@kolacek.dev'],
        subject: `[Project Inquiry] ${category} - ${name}`,
        html: `
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; margin-left: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        `,
      }),
    });

    if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error('Resend API Error:', errorText);
        throw new Error('Failed to send email');
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err: any) {
    console.error('Contact function error:', err);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
