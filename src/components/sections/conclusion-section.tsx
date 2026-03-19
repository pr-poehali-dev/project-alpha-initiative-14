import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ConclusionSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const points = [
    "Использование всех ресурсов даёт синергетический эффект",
    "Важно учитывать потребности разных возрастных групп",
    "Совместная работа государства, бизнеса и общества — ключ к успеху",
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20 lg:gap-32">
          <div>
            <div
              className={`mb-10 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Туризм —
                <br />
                ресурс развития
                <br />
                <span className="text-foreground/40">страны</span>
              </h2>
              <p className="font-mono text-sm text-foreground/60 md:text-base">/ Заключение</p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(11)}>
                Связаться с нами
              </MagneticButton>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {points.map((point, i) => (
              <div
                key={i}
                className={`group flex items-start gap-5 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <span className="mt-1 font-mono text-xs text-foreground/40">0{i + 1}</span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{point}</p>
              </div>
            ))}

            <div
              className={`border-t border-foreground/15 pt-6 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <p className="font-mono text-xs text-foreground/50">
                Стратегия развития туризма · Россия · 2024–2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
