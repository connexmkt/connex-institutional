import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { createAdminClient } from "@/utils/supabase/admin";

const contatoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  dificuldade: z.string().optional(),
});

async function notificarIntegrantes(
  nome: string,
  telefone: string,
  email: string,
  dificuldade?: string,
) {
  const supabase = createAdminClient();
  const { data, error: authError } = await supabase.auth.admin.listUsers();

  if (authError || !data?.users?.length) {
    console.error("[api/contato] Erro ao buscar usuários:", authError);
    return;
  }

  const destinatarios = data.users
    .map((u) => u.email)
    .filter((e): e is string => !!e);

  if (!destinatarios.length) return;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <h2>Novo lead recebido pelo site</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Nome</strong></td><td>${nome}</td></tr>
      <tr><td><strong>Telefone</strong></td><td>${telefone}</td></tr>
      <tr><td><strong>E-mail</strong></td><td>${email}</td></tr>
      ${dificuldade ? `<tr><td><strong>Maior dificuldade</strong></td><td>${dificuldade}</td></tr>` : ""}
    </table>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "Connex <noreply@connex.com.br>",
    to: destinatarios,
    subject: `Novo lead recebido pelo site — ${nome}`,
    html,
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const result = contatoSchema.safeParse(body);

  if (!result.success) {
    const message = result.error.errors[0]?.message ?? "Dados inválidos";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { nome, telefone, email, dificuldade } = result.data;

  const supabase = createAdminClient();

  const { error } = await supabase.from("pipeline_leads").insert({
    contact_name: nome,
    company_name: nome,
    contact_phone: telefone,
    contact_email: email,
    notes: dificuldade ?? null,
    responsible: { name: "Não atribuido" },
    source: "site",
  });

  if (error) {
    console.error("[api/contato] Supabase insert error:", error);
    return NextResponse.json(
      { error: "Erro ao salvar. Tente novamente." },
      { status: 500 },
    );
  }

  notificarIntegrantes(nome, telefone, email, dificuldade).catch((err) =>
    console.error("[api/contato] Erro ao enviar e-mail:", err),
  );

  return NextResponse.json({ ok: true }, { status: 200 });
}
