import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createAdminClient } from "@/utils/supabase/admin";

const contatoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  dificuldade: z.string().optional(),
});

const DESTINATARIOS = [
  "henriquepennalima@gmail.com",
  "luizfernandosant26@gmail.com",
  "rodrigodnfilho@gmail.com",
];

async function notificarIntegrantes(
  nome: string,
  telefone: string,
  email: string,
  dificuldade?: string,
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>Novo lead recebido pelo site</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Nome</strong></td><td>${nome}</td></tr>
      <tr><td><strong>Telefone</strong></td><td>${telefone}</td></tr>
      <tr><td><strong>E-mail</strong></td><td>${email}</td></tr>
      ${dificuldade ? `<tr><td><strong>Maior dificuldade</strong></td><td>${dificuldade}</td></tr>` : ""}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Connex <noreply@connexmkt.com.br>",
    to: DESTINATARIOS,
    subject: `Novo lead recebido pelo site — ${nome}`,
    html,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
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
