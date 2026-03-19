import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function GoalsSection() {
  const { ref, isVisible } = useReveal(0.3)

  const goals = [
    { icon: "TrendingUp", text: "Увеличение въездного и внутреннего туризма на 20% за 3 года" },
    { icon: "Briefcase", text: "Создание новых рабочих мест в регионах" },
    { icon: "Globe", text: "Повышение узнаваемости страны на международном рынке" },
    { icon: "Map", text: "Раскрытие потенциала всех регионов России" },
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
            Зачем это нужно?
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Цели и задачи стратегии</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {goals.map((goal, i) => (
            <div
              key={i}
              className={`group flex items-start gap-6 border-l border-foreground/20 pl-6 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10 backdrop-blur-md transition-all duration-300 group-hover:bg-foreground/20">
                <Icon name={goal.icon} size={18} className="text-foreground/80" fallback="Star" />
              </div>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{goal.text}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 grid grid-cols-3 gap-8 border-t border-foreground/10 pt-10 transition-all duration-700 md:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {[
            { value: "+20%", label: "Рост туризма", sub: "за 3 года" },
            { value: "10к+", label: "Рабочих мест", sub: "в регионах" },
            { value: "85", label: "Регионов", sub: "России" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-1 font-sans text-3xl font-light text-foreground md:text-5xl">{stat.value}</div>
              <div className="font-sans text-sm text-foreground/80">{stat.label}</div>
              <div className="font-mono text-xs text-foreground/50">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
