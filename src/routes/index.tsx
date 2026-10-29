import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Check,
  CloudLightning,
  Crown,
  Eye,
  ListChecks,
  ScrollText,
  Users,
} from "lucide-react";
import {
  beats,
  blanks,
  houses,
  oral,
  people,
  questions,
  readyPhrases,
  talk,
  themes,
  traps,
  vocab,
  type House,
} from "@/data/lear";

export const Route = createFileRoute("/")({ component: Home });

const sections = [
  { id: "ficha", label: "Ficha", icon: BookOpen },
  { id: "trama", label: "Trama", icon: ScrollText },
  { id: "personagens", label: "Personagens", icon: Users },
  { id: "analise", label: "Análise", icon: Eye },
  { id: "revisao", label: "Revisão", icon: ListChecks },
] as const;

const studyKeys = [
  { id: "ficha", short: "Ficha" },
  { id: "trama", short: "Trama" },
  { id: "personagens", short: "Elenco" },
  { id: "analise", short: "Análise" },
  { id: "revisao", short: "Prova" },
] as const;

function Home() {
  const [large, setLarge] = useState(false);
  const [house, setHouse] = useState<House | "todos">("todos");
  const [openPerson, setOpenPerson] = useState<string | null>("Rei Lear");
  const [showBlanks, setShowBlanks] = useState(false);
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lear-9c-estudo");
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore broken local storage */
    }
  }, []);

  function toggleDone(key: string) {
    setDone((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem("lear-9c-estudo", JSON.stringify(next));
      return next;
    });
  }

  const studied = studyKeys.filter((k) => done[k.id]).length;
  const score = questions.reduce(
    (n, q, i) => n + (picked[i] === q.answer ? 1 : 0),
    0,
  );
  const answered = Object.keys(picked).length;
  const visiblePeople =
    house === "todos" ? people : people.filter((p) => p.house === house);

  return (
    <main className={large ? "text-lg" : ""}>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
          <p className="font-display text-lg leading-none font-semibold tracking-tight text-fg">
            Rei Lear
          </p>
          <button
            type="button"
            onClick={() => setLarge((v) => !v)}
            className="min-h-11 rounded-full border border-line px-4 text-sm font-semibold text-muted"
            aria-pressed={large}
          >
            {large ? "Texto padrão" : "Texto maior"}
          </button>
        </div>
        <nav className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-5 pb-3" aria-label="Seções">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-fg"
              >
                <Icon className="size-4 text-accent" aria-hidden />
                {s.label}
              </a>
            );
          })}
        </nav>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-8 pb-24">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Ficha auxiliar · 9º ano C
        </p>
        <h1 className="font-display mt-3 text-5xl leading-none font-semibold tracking-tight text-fg">
          Rei Lear
        </h1>
        <p className="font-display mt-4 text-2xl leading-snug font-medium text-fg italic">
          Bajulação não é amor. O orgulho cobra o reino inteiro.
        </p>
        <p className="mt-5 max-w-prose text-muted">
          Resumo da adaptação em prosa de Hildegard Feist (Scipione, série
          Reencontro), feita a partir da tragédia de William Shakespeare. Serve
          para revisar a trama, os personagens e a análise. Não substitui a
          leitura do livro.
        </p>

        <ol className="mt-8 grid grid-cols-5 gap-2" aria-label="Progresso de estudo">
          {studyKeys.map((key) => (
            <li key={key.id}>
              <button
                type="button"
                onClick={() => toggleDone(key.id)}
                className={`flex min-h-11 w-full flex-col items-center justify-center rounded-2xl border px-1 py-2 text-xs font-semibold ${
                  done[key.id]
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line bg-surface text-muted"
                }`}
                aria-pressed={!!done[key.id]}
              >
                {done[key.id] ? <Check className="mb-0.5 size-3.5" aria-hidden /> : null}
                {key.short}
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-2 text-sm text-muted">
          {studied === 0
            ? "Marque cada parte quando terminar de estudar."
            : `${studied} de 5 partes marcadas neste aparelho.`}
        </p>

        <section id="ficha" className="scroll-mt-36 pt-14">
          <SectionLabel icon={BookOpen} kicker="01" title="Ficha da obra" />
          <dl className="mt-6 divide-y divide-line border-y border-line">
            <Fact k="Obra" v="Rei Lear" />
            <Fact k="Autor" v="William Shakespeare (1564–1616)" />
            <Fact k="Adaptação" v="Hildegard Feist — tradução e adaptação em prosa" />
            <Fact k="Ilustrações" v="Augusto Sampaio" />
            <Fact k="Edição" v="Scipione, série Reencontro Literatura (1ª ed., 2002)" />
            <Fact k="Origem" v="Tragédia teatral King Lear, por volta de 1605–1606" />
            <Fact k="Gênero" v="Tragédia, recontada em prosa para leitores jovens" />
            <Fact k="Espaço" v="Antiga Bretanha: palácio, castelos, charneca, campo de batalha" />
            <Fact k="Em uma frase" v="Um rei idoso entrega o poder a quem melhor o bajula e descobre, tarde demais, a diferença entre palavras bonitas e amor verdadeiro." />
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Na capa o nome da adaptadora é Hildegard Feist — não “Hildeberg”.
            Para citar: Shakespeare, William. <em>Rei Lear</em>. Tradução e
            adaptação de Hildegard Feist. Ilustrações de Augusto Sampaio. São
            Paulo: Scipione, série Reencontro.
          </p>
        </section>

        <section id="trama" className="scroll-mt-36 pt-14">
          <SectionLabel icon={ScrollText} kicker="02" title="A trama, em ordem" />
          <p className="mt-4 max-w-prose text-muted">
            Sete movimentos. Leia nesta sequência: é a ordem em que a desgraça
            se arma, não um spoiler solto.
          </p>
          <ol className="mt-8 border-l border-line">
            {beats.map((b) => (
              <li key={b.n} className="relative pb-8 pl-6">
                <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-accent" aria-hidden />
                <p className="font-display text-sm font-semibold tracking-widest text-accent">
                  {b.n}
                </p>
                <h3 className="font-display mt-1 text-2xl leading-tight font-semibold text-fg">
                  {b.title}
                </h3>
                <p className="mt-2 max-w-prose text-fg/95">{b.text}</p>
              </li>
            ))}
          </ol>
          <aside className="rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-center gap-2 text-accent">
              <CloudLightning className="size-4" aria-hidden />
              <p className="text-sm font-semibold tracking-widest uppercase">
                O fio da história
              </p>
            </div>
            <p className="mt-3 text-fg">
              Lear pede amor em palavras → premia a mentira e expulsa a verdade
              → as filhas mais velhas o humilham → Gloucester cai no mesmo
              engano com Edmundo → a tempestade desmonta o rei → Cordélia volta
              e perdoa → a guerra mata os cruéis e também os inocentes.
            </p>
          </aside>
        </section>

        <section id="personagens" className="scroll-mt-36 pt-14">
          <SectionLabel icon={Users} kicker="03" title="Personagens" />
          <p className="mt-4 max-w-prose text-muted">
            Duas famílias. Não misture os filhos de Lear com os de Gloucester —
            a prova adora essa troca.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Family
              title="Casa de Lear"
              lines={["Goneril — duque de Albany", "Regana — duque da Cornualha", "Cordélia — rei da França"]}
            />
            <Family
              title="Casa de Gloucester"
              lines={["Edgar — filho legítimo", "Edmundo — filho bastardo", "O pai julga os dois pelo avesso"]}
            />
          </div>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filtrar personagens">
            {houses.map((h) => (
              <button
                key={h.id}
                type="button"
                role="tab"
                aria-selected={house === h.id}
                onClick={() => setHouse(h.id)}
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${
                  house === h.id
                    ? "bg-accent text-on-accent"
                    : "border border-line bg-surface text-fg"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {visiblePeople.map((p) => {
              const open = openPerson === p.name;
              return (
                <li key={p.name} className="rounded-2xl border border-line bg-surface">
                  <button
                    type="button"
                    className="flex min-h-16 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenPerson(open ? null : p.name)}
                  >
                    <span>
                      <span className="block font-display text-xl leading-tight font-semibold text-fg">
                        {p.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">{p.role}</span>
                    </span>
                    <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
                      {p.tag}
                    </span>
                  </button>
                  {open ? <p className="px-4 pb-4 text-fg/95">{p.text}</p> : null}
                </li>
              );
            })}
          </ul>
        </section>

        <section id="analise" className="scroll-mt-36 pt-14">
          <SectionLabel icon={Eye} kicker="04" title="Análise para a prova" />
          <div className="mt-6 flex flex-col gap-8">
            {themes.map((t, i) => (
              <article key={t.title}>
                <h3 className="font-display text-2xl leading-tight font-semibold text-fg">
                  <span className="mr-2 text-accent">{i + 1}.</span>
                  {t.title}
                </h3>
                <p className="mt-2 max-w-prose text-fg/95">{t.body}</p>
              </article>
            ))}
          </div>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Cinco frases prontas
          </h3>
          <p className="mt-2 text-muted">
            Não decore soltas. Use cada uma como primeira linha de um parágrafo
            e explique com um exemplo da trama.
          </p>
          <ol className="mt-4 flex flex-col gap-3">
            {readyPhrases.map((phrase, i) => (
              <li
                key={phrase}
                className="rounded-2xl border border-line bg-surface px-4 py-4"
              >
                <span className="font-display text-accent">{i + 1}. </span>
                {phrase}
              </li>
            ))}
          </ol>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Vocabulário
          </h3>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {vocab.map((item) => (
              <div key={item.word} className="py-4">
                <dt className="font-display text-xl font-semibold text-fg">{item.word}</dt>
                <dd className="mt-1 text-muted">{item.def}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="revisao" className="scroll-mt-36 pt-14">
          <SectionLabel icon={ListChecks} kicker="05" title="Revisão do 9º C" />

          <h3 className="font-display mt-8 text-2xl font-semibold text-fg">
            Não confunda
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {traps.map((t) => (
              <li key={t.wrong} className="rounded-2xl border border-line bg-surface p-4">
                <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                  Pegadinha
                </p>
                <p className="mt-1 text-muted line-through decoration-accent/80">{t.wrong}</p>
                <p className="mt-2 text-fg">{t.right}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Complete
          </h3>
          <p className="mt-2 text-muted">Tente fechar as lacunas antes de mostrar as respostas.</p>
          <ol className="mt-4 flex flex-col gap-3">
            {blanks.map((b, i) => (
              <li key={b.prompt} className="rounded-2xl border border-line bg-surface px-4 py-4">
                <span className="text-muted">{i + 1}. </span>
                {showBlanks ? (
                  <BlankShown prompt={b.prompt} answer={b.answer} />
                ) : (
                  b.prompt
                )}
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => setShowBlanks((v) => !v)}
            className="mt-4 min-h-11 rounded-full bg-accent px-5 font-semibold text-on-accent"
          >
            {showBlanks ? "Esconder respostas" : "Mostrar respostas"}
          </button>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Oito questões
          </h3>
          <p className="mt-2 text-muted">
            {answered === 0
              ? "Toque na alternativa. A explicação aparece na hora."
              : `${score} certas de ${answered} respondidas · ${questions.length} no total.`}
          </p>
          <ol className="mt-5 flex flex-col gap-6">
            {questions.map((q, qi) => (
              <li key={q.prompt} className="rounded-2xl border border-line bg-surface p-4">
                <p className="font-semibold text-fg">
                  <span className="text-accent">{qi + 1}. </span>
                  {q.prompt}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {q.options.map((op, oi) => {
                    const chosen = picked[qi];
                    const revealed = chosen !== undefined;
                    const isRight = oi === q.answer;
                    const isChosen = chosen === oi;
                    let style = "border-line text-fg";
                    if (revealed && isRight) style = "border-accent bg-accent text-on-accent";
                    else if (revealed && isChosen) style = "border-line text-muted";
                    return (
                      <li key={op}>
                        <button
                          type="button"
                          disabled={revealed}
                          onClick={() => setPicked((prev) => ({ ...prev, [qi]: oi }))}
                          className={`min-h-11 w-full rounded-xl border px-3 py-3 text-left text-base disabled:cursor-default ${style}`}
                        >
                          {op}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {picked[qi] !== undefined ? (
                  <p className="mt-3 text-sm leading-relaxed text-fg">
                    {picked[qi] === q.answer ? "Certo. " : "Não é essa. "}
                    {q.why}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Para discutir em aula
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {talk.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="font-display text-accent">{i + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-display mt-12 text-2xl font-semibold text-fg">
            Fala de um minuto
          </h3>
          <p className="mt-2 text-muted">
            Se a professora pedir para apresentar o livro de pé, este é o roteiro.
          </p>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-fg italic">
            {oral}
          </blockquote>

          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
            <Crown className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-muted">
              Shakespeare escreveu a peça por volta de 1605. A turma lê a
              adaptação de Hildegard Feist: mesma tragédia, prosa mais direta,
              ilustrações de Augusto Sampaio. Alguns detalhes de cena podem ser
              mais curtos do que na peça original em verso. O núcleo — teste do
              amor, ingratidão, Edmundo, tempestade, cegueira e mortes — permanece.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionLabel({
  icon: Icon,
  kicker,
  title,
}: {
  icon: typeof BookOpen;
  kicker: string;
  title: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-accent uppercase">
        <Icon className="size-4" aria-hidden />
        {kicker}
      </p>
      <h2 className="font-display mt-2 text-4xl leading-none font-semibold tracking-tight text-fg">
        {title}
      </h2>
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
      <dt className="text-sm font-semibold tracking-wide text-muted uppercase">{k}</dt>
      <dd className="text-fg">{v}</dd>
    </div>
  );
}

function Family({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-2 px-4 py-4">
      <p className="font-display text-lg font-semibold text-fg">{title}</p>
      <ul className="mt-2 flex flex-col gap-1 text-sm text-muted">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function BlankShown({ prompt, answer }: { prompt: string; answer: string }) {
  const [before, after] = prompt.split("______");
  return (
    <>
      {before}
      <strong className="text-accent">{answer}</strong>
      {after}
    </>
  );
}
