import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2, Mail, Clock } from "lucide-react";

import { SiteChrome } from "@/components/site/SiteChrome";
import { PageHeader } from "@/components/institutional/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { smartvoz } from "@/lib/smartvoz";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      { title: "SmartVoz | Fale Conosco" },
      {
        name: "description",
        content:
          "Fale com a equipe SmartVoz sobre cadastro, contratação, pagamentos, indicações e demais assuntos.",
      },
    ],
  }),
  component: FaleConosco,
});

const assuntos = [
  "Cadastro",
  "Conta",
  "Contratação",
  "Pagamentos",
  "Indicações",
  "Comissões",
  "Suporte técnico",
  "Cancelamento",
  "Outro assunto",
] as const;

const schema = z.object({
  nome: z
    .string()
    .min(3, "Informe seu nome completo.")
    .refine((v) => v.trim().split(/\s+/).length >= 2, "Informe nome e sobrenome."),
  documento: z
    .string()
    .min(11, "Informe um CPF ou CNPJ válido.")
    .refine((v) => v.replace(/\D/g, "").length >= 11, "Documento inválido."),
  telefone: z
    .string()
    .min(10, "Informe um telefone válido com DDD.")
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Telefone inválido."),
  email: z.string().email("Informe um e-mail válido."),
  assunto: z.string().min(1, "Selecione um assunto."),
  mensagem: z.string().min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
});

type FormValues = z.infer<typeof schema>;

function FaleConosco() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      documento: "",
      telefone: "",
      email: "",
      assunto: "",
      mensagem: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    if (enviando) return; // impede múltiplos envios consecutivos
    setEnviando(true);
    // Simulação de envio client-side (sem backend). Integração futura.
    await new Promise((r) => setTimeout(r, 1500));
    setEnviando(false);
    setEnviado(true);
    reset();
  };

  return (
    <SiteChrome>
      <PageHeader
        eyebrow="ATENDIMENTO"
        titulo="Fale com a SmartVoz"
        subtitulo="Tem alguma dúvida ou precisa de ajuda? Nossa equipe está disponível para orientar você sobre cadastro, contratação, pagamentos, acesso à plataforma, indicações e demais assuntos relacionados à SmartVoz."
      />

      <section className="mx-auto max-w-2xl px-5 py-8 sm:px-6 sm:py-10">
        {enviado ? (
          <div className="surface-card flex flex-col items-center gap-4 p-8 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary-soft">
              <CheckCircle2 className="size-9 text-primary" aria-hidden="true" />
            </span>
            <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Solicitação recebida com sucesso.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Nossa equipe analisará sua mensagem e retornará pelo canal informado.
            </p>
            <div className="mt-2 w-full max-w-sm space-y-3 rounded-xl border border-border bg-background px-5 py-4 text-left">
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  E-mail:{" "}
                  <a
                    href={`mailto:${smartvoz.email}`}
                    className="font-semibold text-ink transition-colors hover:text-primary"
                  >
                    {smartvoz.email}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Horário: <span className="font-semibold text-ink">{smartvoz.horario}</span>
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setEnviado(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-display text-sm font-bold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              Enviar nova mensagem
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="surface-card space-y-5 p-6 sm:p-8"
          >
            <Field label="Nome completo" error={errors.nome?.message} required>
              <Controller
                name="nome"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Seu nome completo"
                    aria-invalid={!!errors.nome}
                    autoComplete="name"
                  />
                )}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="CPF ou CNPJ" error={errors.documento?.message} required>
                <Controller
                  name="documento"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="000.000.000-00"
                      aria-invalid={!!errors.documento}
                    />
                  )}
                />
              </Field>

              <Field label="Telefone" error={errors.telefone?.message} required>
                <Controller
                  name="telefone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="(00) 00000-0000"
                      aria-invalid={!!errors.telefone}
                      autoComplete="tel"
                    />
                  )}
                />
              </Field>
            </div>

            <Field label="E-mail" error={errors.email?.message} required>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="voce@email.com"
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                )}
              />
            </Field>

            <Field label="Assunto" error={errors.assunto?.message} required>
              <Controller
                name="assunto"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger aria-invalid={!!errors.assunto} className="w-full">
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      {assuntos.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field label="Mensagem" error={errors.mensagem?.message} required>
              <Controller
                name="mensagem"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Descreva sua dúvida ou solicitação"
                    aria-invalid={!!errors.mensagem}
                    rows={5}
                  />
                )}
              />
            </Field>

            <button
              type="submit"
              disabled={enviando}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 font-display text-sm font-extrabold tracking-wide text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:text-base"
            >
              {enviando ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="size-5" aria-hidden="true" />
                  ENVIAR MENSAGEM
                </>
              )}
            </button>
          </form>
        )}
      </section>
    </SiteChrome>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        {required ? <span className="ml-1 text-primary">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p className="text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
