// import { NextRequest, NextResponse } from "next/server";
// // import verifyRecaptcha from "@/lib/verifyRecaptcha";
// // import { sendContactEmail } from "@/lib/sendEmail";

// export async function POST(req: NextRequest) {
//   const { name, email, subject, message, captcha } = await req.json();

//   const recaptchaValid = await verifyRecaptcha(captcha);
//   if (!recaptchaValid) return NextResponse.json({ error: "Invalid CAPTCHA" }, { status: 400 });

//   // Basic regex email check
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

//   // TODO: Check for disposable domains with an API or list

//   // Generate verification token & store it
//   const token = crypto.randomUUID();
//   // store in-memory or Redis with TTL for verification

//   // Send verification email
//   const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/verify?token=${token}`;
//   await sendContactEmail({ name, email, subject, message, verifyUrl });

//   return NextResponse.json({ success: true });
// }
