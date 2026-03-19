import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ResultsSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const results = [
    { value: "15–25%", label: "Рост числа туристов", sub: "ежегодно" },
    { value: "+", label: "Увеличение доходов", sub: "во всех регионах" },
    { value: "10к+", label: "Новых рабочих мест", sub: "по всей стране" },
    { value: "↑", label: "Качество жизни", sub: "в малых городах" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Что получим в итоге?
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ожидаемые результаты стратегии</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {results.map((r, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-3 border-b border-foreground/15 pb-3 font-sans text-4xl font-light text-foreground transition-all duration-300 group-hover:border-foreground/35 md:text-6xl">
                {r.value}
              </div>
              <div className="font-sans text-sm text-foreground/90 md:text-base">{r.label}</div>
              <div className="font-mono text-xs text-foreground/50">{r.sub}</div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 rounded-xl border border-foreground/15 bg-foreground/5 p-6 backdrop-blur-sm transition-all duration-700 md:mt-16 md:p-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <p className="mb-6 font-sans text-base leading-relaxed text-foreground/85 md:text-xl">
            Укрепление имиджа России как мирового туристического направления — цель, достижимая при совместной работе государства, бизнеса и гражданского общества.
          </p>
          <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(10)}>
            Обсудить сотрудничество
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
