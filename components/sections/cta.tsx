"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Send,
  Check,
  AlertCircle,
  Instagram,
  ShieldCheck,
  TrendingDown,
  Clock,
  Phone,
} from "lucide-react";

const contatoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  telefone: z.string().min(8, "Informe um telefone válido"),
  email: z.string().email("Informe um e-mail válido"),
  dificuldade: z.string().optional(),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all";

const labelClass = "block text-sm font-medium text-neutral-300 mb-2";

const errorClass = "text-red-400 text-xs mt-1";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
  });

  const onSubmit = async (data: ContatoFormData) => {
    setApiError(null);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar. Tente novamente.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.",
      );
    }
  };

  return (
    <section
      id="contato"
      className="pt-40 pb-40 md:pt-40 relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* Spline background */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full -z-10">
        <iframe
          src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Connex background"
          tabIndex={-1}
        />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-40 top-10 h-[70vh] w-[60vh] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(91,95,232,0.4), rgba(0,0,0,0))",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-300 font-medium">
            <Clock className="h-3.5 w-3.5" />
            Vagas limitadas
          </span>

          <h2 className="mt-4 text-4xl sm:text-6xl tracking-tight font-semibold text-white">
            Cada dia parado é{" "}
            <span className="italic font-medium text-neutral-200">
              cliente no concorrente
            </span>
          </h2>

          <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
            Enquanto você adia, outra marca do seu setor está conquistando o
            espaço digital que deveria ser seu. Vamos mudar isso agora.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          {/* Form card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white mb-6">
              Envie uma mensagem
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-5"
              >
                <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-green-300">
                  Mensagem recebida! Em breve nossa equipe entrará em contato.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-nome" className={labelClass}>
                      Nome completo
                    </label>
                    <input
                      id="ct-nome"
                      {...register("nome")}
                      type="text"
                      autoComplete="name"
                      placeholder="João Silva"
                      className={inputClass}
                    />
                    {errors.nome && (
                      <p className={errorClass}>{errors.nome.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="ct-telefone" className={labelClass}>
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="ct-telefone"
                      {...register("telefone")}
                      type="tel"
                      autoComplete="tel"
                      placeholder="(84) 99999-9999"
                      className={inputClass}
                    />
                    {errors.telefone && (
                      <p className={errorClass}>{errors.telefone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="ct-email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="ct-email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com.br"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="ct-dificuldade" className={labelClass}>
                    Qual sua maior dificuldade de visibilidade?
                  </label>
                  <textarea
                    id="ct-dificuldade"
                    {...register("dificuldade")}
                    rows={4}
                    placeholder="Conte um pouco sobre seu negócio e seus desafios… (opcional)"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {apiError && (
                  <div className="flex items-center gap-2 text-red-400 border border-red-500/20 bg-red-500/10 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{apiError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-white font-semibold hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                  <span>
                    {isSubmitting ? "Enviando..." : "Entrar em contato"}
                  </span>
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
                <p className="text-center text-xs text-neutral-500">
                  Sem compromisso · Resposta em até 24h
                </p>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {/* Custo da inação */}
            <div className="relative rounded-2xl border border-red-500/20 bg-red-500/5 p-6 shadow-xl backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center shrink-0">
                  <TrendingDown className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    O custo real de esperar
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Cada semana sem presença digital consistente é{" "}
                    <span className="text-neutral-200 font-medium">
                      autoridade cedida ao concorrente
                    </span>{" "}
                    e clientes perdidos que você nunca vai conseguir recuperar.
                  </p>
                </div>
              </div>
            </div>

            {/* Garantia */}
            <div className="relative rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 shadow-xl backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Processo contínuo
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Acompanhamento{" "}
                    <span className="text-neutral-200 font-medium">
                      contínuo
                    </span>{" "}
                    e ajuste de rota{" "}
                    <span className="text-neutral-200 font-medium">
                      em tempo real.
                    </span>{" "}
                    Você nunca fica no escuro sobre o que está sendo feito e o porquê.
                  </p>
                </div>
              </div>
            </div>

            {/* Email + Social */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <a
                  href="https://instagram.com/connex.mkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                  aria-label="Instagram da Connex"
                >
                  <Instagram className="w-4 h-4" />
                  @connex.mkt
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <a
                  href="mailto:agenciaconnex@gmail.com"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  agenciaconnex@gmail.com
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <a
                  href="https://wa.me/558499757038"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25 w-[60%] h-8"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 30%, transparent 70%)",
          }}
        />
        <div className="h-px bg-white/10 w-full" />
      </div>
    </section>
  );
}
