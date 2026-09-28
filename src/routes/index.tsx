import { createFileRoute } from "@tanstack/react-router";

import { CHECKOUT_URL } from "@/lib/checkout";
import { useReveal } from "@/lib/use-reveal";
import { JourneyPath } from "@/components/kit/JourneyPath";
import { JobCard, ResumeSheet, Checklist } from "@/components/kit/PaperProps";

const TITLE = "Kit Recolocação Remota e Híbrida — candidaturas claras e organizadas";
const DESCRIPTION =
  "Kit digital com guia de sete dias, modelos de currículo, template de LinkedIn, roteiro de entrevista, planilha de acompanhamento e 10 prompts de IA. R$ 29,90 à vista, entrega digital imediata.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-teal px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_14px_34px_-18px_color-mix(in_oklab,var(--teal)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_20px_44px_-18px_color-mix(in_oklab,var(--navy)_70%,transparent)] ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{children}</p>
  );
}

function Index() {
  useReveal();

  return (
    <main className="relative">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep text-aqua">
        <div className="mesh-layer opacity-70" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--navy-deep)_88%,transparent))]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
          <div>
            <span className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-teal-soft/40 bg-navy/40 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-aqua/90">
              Kit digital <span aria-hidden="true">·</span> currículo <span aria-hidden="true">·</span> LinkedIn{" "}
              <span aria-hidden="true">·</span> IA
            </span>

            <h1 className="mt-7 max-w-[19ch] text-[2.5rem] leading-[1.03] text-aqua sm:text-6xl lg:text-[4.1rem]">
              Prepare candidaturas mais claras e organizadas.
            </h1>

            <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-aqua/75">
              Organize sua transição, adapte suas candidaturas e use IA para comunicar melhor sua
              experiência — sem inventar resultados e sem depender de currículos genéricos.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Cta>Quero organizar minha recolocação</Cta>
              <p className="text-sm text-aqua/60">
                R$ 29,90 à vista · entrega digital imediata
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-teal-soft/25 bg-navy/45 p-5 backdrop-blur-[2px] sm:p-7">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-aqua/55">
                Percurso do método
              </p>
              <div className="mt-2">
                <JourneyPath tone="dark" />
              </div>
            </div>

            <JobCard className="float-slow absolute -left-3 -top-8 w-32 drop-shadow-xl sm:-left-10 sm:w-40" />
            <ResumeSheet className="float-slower absolute -bottom-10 -left-2 w-24 drop-shadow-xl sm:-left-8 sm:w-28" />
            <Checklist className="float-slow absolute -right-2 -bottom-12 w-28 drop-shadow-xl sm:-right-8 sm:w-32" />
          </div>
        </div>
      </section>

      {/* ---------------- IDENTIFICAÇÃO ---------------- */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <Eyebrow>Para o seu momento</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-[2.6rem]">
              Você já sabe o que faz bem. Falta organizar como isso chega às vagas.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              O kit foi escrito para profissionais competentes que estão no meio de um processo
              exigente — e que preferem método a improviso.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Procurando emprego", "com candidaturas em andamento e vontade de acompanhar tudo em um só lugar."],
              ["Em transição de carreira", "traduzindo experiência anterior para uma nova área ou função."],
              ["Ajustando currículo e LinkedIn", "para que a leitura de dez segundos já faça sentido."],
              ["Acompanhando processos", "etapas, retornos e próximas ações sem depender da memória."],
              ["Olhando vagas remotas e híbridas", "além das presenciais, com o mesmo cuidado em cada envio."],
              ["Querendo usar IA com segurança", "com regras de veracidade e privacidade definidas antes de escrever."],
            ].map(([title, text], i) => (
              <li
                key={title}
                className="reveal border-t border-border pt-5"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <p className="font-display text-lg text-navy">{title}</p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- MÉTODO VISUAL ---------------- */}
      <section className="relative overflow-hidden bg-navy py-20 text-aqua sm:py-28">
        <div className="mesh-layer opacity-40" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-soft">
              O mecanismo
            </p>
            <h2 className="mt-4 max-w-[26ch] text-3xl leading-tight sm:text-[2.6rem]">
              Um percurso simples, na ordem certa.
            </h2>
          </div>

          <div className="reveal mt-12 rounded-2xl border border-teal-soft/25 bg-navy-deep/45 p-5 sm:p-10">
            <JourneyPath tone="dark" />
          </div>

          <div className="reveal mt-10 grid gap-6 sm:grid-cols-5">
            {[
              ["Objetivo profissional", "Uma direção clara antes de qualquer envio."],
              ["Competências reais", "O que você de fato entrega, em palavras verificáveis."],
              ["Currículo adaptado", "Ajuste por vaga, sem exagerar nem inventar."],
              ["Candidatura registrada", "Onde, quando, em que etapa e qual o próximo passo."],
              ["Preparação de entrevista", "Respostas ensaiadas a partir da sua experiência."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="text-[0.68rem] tracking-[0.2em] text-teal-soft">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-base text-aqua">{t}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-aqua/65">{d}</p>
              </div>
            ))}
          </div>

          <p className="reveal mt-10 max-w-2xl border-l-2 border-teal-soft/50 pl-4 text-sm leading-relaxed text-aqua/70">
            O material ajuda a organizar o processo. Ele não garante contratação.
          </p>
        </div>
      </section>

      {/* ---------------- RESULTADOS PRÁTICOS ---------------- */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <Eyebrow>Resultados práticos</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-[2.6rem]">
              O que o kit organiza no seu dia a dia.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <article className="reveal relative overflow-hidden rounded-2xl bg-navy p-7 text-aqua sm:p-9 lg:col-span-7">
              <div className="grain-layer" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl text-aqua sm:text-[1.75rem]">Currículo por vaga, sem exageros</h3>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-aqua/75">
                  Um mesmo histórico, reorganizado para cada oportunidade: o que vem primeiro, o que
                  sai, o que precisa de contexto. Tudo apoiado em fatos que você pode confirmar.
                </p>
                <ResumeSheet className="float-slower mt-8 w-28 drop-shadow-xl sm:absolute sm:-bottom-2 sm:right-0 sm:mt-0 sm:w-32" />
              </div>
            </article>

            <article className="reveal rounded-2xl border border-border bg-card p-7 sm:p-8 lg:col-span-5">
              <h3 className="text-xl text-navy">LinkedIn mais claro</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Título, resumo e experiências escritos para serem entendidos rápido — por quem recruta
                e por quem apenas passa os olhos.
              </p>
              <div className="rule-lines mt-6 h-20 rounded-md opacity-60" aria-hidden="true" />
            </article>

            <article className="reveal rounded-2xl border border-border bg-card p-7 sm:p-8 lg:col-span-5">
              <h3 className="text-xl text-navy">Etapas e próximas ações</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Cada candidatura com data, estágio e o próximo movimento definido. Nada depende de
                lembrar.
              </p>
              <Checklist className="float-slow mt-6 w-32" />
            </article>

            <article className="reveal rounded-2xl border border-teal/25 bg-aqua p-7 text-navy sm:p-8 lg:col-span-7">
              <h3 className="text-xl">Prompts com regras de veracidade e privacidade</h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                A IA entra como apoio de escrita: ela ajuda a estruturar e revisar, dentro de limites
                claros — nada de dados pessoais ou confidenciais, nada de resultados inventados, e
                revisão sua antes de enviar.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Sem dados pessoais", "Só fatos verificáveis", "Revisão obrigatória"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal/35 px-3 py-1 text-xs font-medium tracking-wide text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- O QUE ESTÁ INCLUÍDO ---------------- */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <Eyebrow>O que está incluído</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-[2.6rem]">
              Oito peças que trabalham juntas.
            </h2>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              ["Guia principal", "Método de sete dias, do objetivo à preparação de entrevista."],
              ["Modelos de currículo", "Versões para diferentes momentos profissionais."],
              ["Template de LinkedIn", "Estrutura de título, resumo e experiências."],
              ["Mensagens de apresentação", "Textos base para abordagens e candidaturas."],
              ["Roteiro de entrevista", "Perguntas frequentes e como preparar respostas."],
              ["Planilha de acompanhamento", "Registro de candidaturas, etapas e próximas ações."],
              ["Biblioteca base com 10 prompts de IA", "Com instruções e exemplos de uso."],
              ["Checklist de privacidade e revisão", "O que verificar antes de enviar qualquer coisa."],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="reveal bg-card p-6 sm:p-8"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <p className="text-[0.68rem] tracking-[0.2em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-lg text-navy">{t}</p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- PARA QUEM É / NÃO É ---------------- */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-teal/25 bg-card p-7 sm:p-9">
            <h2 className="text-2xl text-navy">Para quem é</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Profissionais procurando emprego.",
                "Quem está em transição de carreira.",
                "Quem se interessa por vagas remotas, híbridas e presenciais.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-0.5 text-teal">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-2xl border border-border bg-muted p-7 sm:p-9">
            <h2 className="text-2xl text-navy">Para quem não é</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Não é para quem procura garantia de emprego, entrevista, salário, renda ou trabalho
              remoto. O kit organiza o processo; a decisão final é sempre de quem contrata.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- OFERTA ---------------- */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-aqua sm:py-28">
        <div className="mesh-layer opacity-55" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-teal-soft">
            A oferta
          </p>
          <h2 className="reveal mt-5 text-3xl leading-tight sm:text-[2.7rem]">
            Kit Recolocação Remota e Híbrida
          </h2>
          <p className="reveal mt-8 font-display text-5xl text-aqua sm:text-6xl">R$ 29,90</p>
          <p className="reveal mt-3 text-aqua/70">à vista · entrega digital imediata</p>

          <div className="reveal mt-10 flex justify-center">
            <Cta>Quero organizar minha recolocação</Cta>
          </div>

          <p className="reveal mx-auto mt-10 max-w-xl text-sm leading-relaxed text-aqua/55">
            No checkout existe um complemento opcional, separado deste kit: a{" "}
            <span className="text-aqua/80">Biblioteca de Prompts de IA para Recolocação</span>, um PDF
            com 12 prompts avançados, por R$ 9,90. Ele não faz parte do kit de R$ 29,90 nem dos 10
            prompts base.
          </p>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="reveal">
            <Eyebrow>Perguntas frequentes</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-navy sm:text-[2.4rem]">
              Antes de comprar.
            </h2>
          </div>

          <dl className="mt-12 divide-y divide-border border-t border-border">
            {[
              [
                "O kit garante um emprego?",
                "Não. Ele organiza documentos, argumentos e acompanhamento para que a pessoa faça candidaturas mais claras e consistentes.",
              ],
              [
                "Preciso saber usar IA?",
                "Não. Os prompts vêm com instruções e exemplos. A pessoa deve revisar o resultado antes de usar.",
              ],
              [
                "O material serve para vagas presenciais?",
                "Sim. O método funciona para vagas remotas, híbridas e presenciais.",
              ],
              [
                "Posso enviar meu CPF para a IA?",
                "Não é recomendado. Use exemplos anonimizados e remova dados pessoais e confidenciais.",
              ],
              [
                "Posso usar o currículo gerado sem revisar?",
                "Não. A IA pode cometer erros. Confirme todas as informações e mantenha apenas fatos verdadeiros.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="reveal py-6">
                <dt className="font-display text-lg text-navy">{q}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- RODAPÉ ---------------- */}
      <footer className="border-t border-border bg-muted py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-lg text-navy">Kit Recolocação Remota e Híbrida</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Material educacional. Não há garantia de emprego, entrevista, salário, renda ou
                trabalho remoto.
              </p>
            </div>
            <Cta className="px-6 py-3 text-sm">Quero organizar minha recolocação</Cta>
          </div>
        </div>
      </footer>
    </main>
  );
}
