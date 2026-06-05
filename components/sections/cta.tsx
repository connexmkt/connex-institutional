"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertCircle } from "lucide-react";

const contatoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  telefone: z.string().min(8, "Informe um telefone válido"),
  email: z.string().email("Informe um e-mail válido"),
  dificuldade: z.string().optional(),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

const errorClass = "text-red-400 text-sm mt-1 text-left";

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
      className="relative py-24 md:py-32 overflow-hidden bg-[#161622]"
    >
      <div className="absolute inset-0 bg-[#161622] noise" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Pronto para conectar sua marca ao{" "}
            <span className="text-primary">crescimento</span>?
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Entre em contato e descubra como podemos transformar sua presença
            digital em conexões e resultados reais.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-6 max-w-md mx-auto"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-left">
                Mensagem recebida. Em breve nossa equipe entrará em contato.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("nome")}
                    type="text"
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    className={inputClass}
                  />
                  {errors.nome && (
                    <p className={errorClass}>{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("telefone")}
                    type="tel"
                    placeholder="Seu telefone / WhatsApp"
                    autoComplete="tel"
                    className={inputClass}
                  />
                  {errors.telefone && (
                    <p className={errorClass}>{errors.telefone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Seu melhor e-mail"
                  autoComplete="email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("dificuldade")}
                  rows={3}
                  placeholder="Qual sua maior dificuldade em relação à visibilidade do seu negócio? (opcional)"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {apiError && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="text-sm">{apiError}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl gap-2 mt-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Entrar em contato
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
