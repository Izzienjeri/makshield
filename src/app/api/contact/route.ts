import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const submissionSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("contact"),
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(9).max(30),
    company: z.string().trim().max(120).optional().default(""),
    service: z.string().trim().min(1).max(80),
    message: z.string().trim().min(20).max(5000),
    website: z.string().max(0).optional().default(""),
  }),
  z.object({
    kind: z.literal("quote"),
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(9).max(30),
    cover: z.string().trim().min(1).max(100),
    details: z.string().trim().max(5000).optional().default(""),
    website: z.string().max(0).optional().default(""),
  }),
]);

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 20_000) {
      return Response.json({ error: "Submission is too large." }, { status: 413 });
    }

    const result = submissionSchema.safeParse(await request.json());
    if (!result.success) {
      return Response.json({ error: "Please check the form and try again." }, { status: 400 });
    }

    const submission = result.data;
    const smtpPort = Number(requireEnv("SMTP_PORT"));
    if (!Number.isInteger(smtpPort)) throw new Error("SMTP_PORT must be a number");

    const transporter = nodemailer.createTransport({
      host: requireEnv("SMTP_HOST"),
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: requireEnv("SMTP_USER"),
        pass: requireEnv("SMTP_PASSWORD"),
      },
    });

    const rows = submission.kind === "contact"
      ? [
          ["Name", submission.name],
          ["Email", submission.email],
          ["Phone", submission.phone],
          ["Company", submission.company || "Not provided"],
          ["Service", submission.service],
          ["Message", submission.message],
        ]
      : [
          ["Name", submission.name],
          ["Email", submission.email],
          ["Phone", submission.phone],
          ["Cover requested", submission.cover],
          ["Details", submission.details || "Not provided"],
        ];

    const label = submission.kind === "contact" ? "Contact inquiry" : "Quote request";
    const text = rows.map(([key, value]) => `${key}: ${value}`).join("\n\n");
    const html = rows
      .map(([key, value]) => `<p><strong>${escapeHtml(key)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`)
      .join("");

    const delivery = await transporter.sendMail({
      from: `Mak Shield Website <${requireEnv("CONTACT_FROM")}>`,
      to: requireEnv("CONTACT_TO"),
      replyTo: submission.email,
      subject: `${label} from ${submission.name}`,
      text,
      html,
    });

    console.info(`[contact-form] ${label} sent successfully`, {
      messageId: delivery.messageId,
    });

    return Response.json({ ok: true, messageId: delivery.messageId });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return Response.json(
      { error: "We could not send your request. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
