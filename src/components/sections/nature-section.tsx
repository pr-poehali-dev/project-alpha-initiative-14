import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function NatureSection() {
  const { ref, isVisible } = useReveal(0.3)

  const resources = [
    { icon: "Mountain", title: "Горы, леса, озёра", description: "Активный и экологический туризм — Алтай, Байкал, Карелия, Кавказ", direction: "left" },
    { icon: "Waves", title: "Морские побережья", description: "Пляжный отдых — Чёрное море, Японское море, Финский залив", direction: "top" },
    { icon: "TreePine", title: "Национальные парки", description: "Экотуризм в заповедниках — Кроноцкий, Лосиный Остров, Самарская Лука", direction: "right" },
    { icon: "Droplets", title: "Минеральные источники", description: "Оздоровительные курорты — Кавказские Минеральные Воды, Алтай", direction: "bottom" },
  ]

  const getRevealClass = (direction: string, visible: boolean) => {
    if (visible) return "translate-x-0 translate-y-0 opacity-100"
    switch (direction) {
      case "left": return "-translate-x-16 opacity-0"
      case "right": return "translate-x-16 opacity-0"
      case "top": return "-translate-y-16 opacity-0"
      case "bottom": return "translate-y-16 opacity-0"
      default: return "translate-y-12 opacity-0"
    }
  }

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
            Природа как основа
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Природные ресурсы России</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {resources.map((item, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${getRevealClass(item.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/20">
                  <Icon name={item.icon} size={20} className="text-foreground/80" fallback="Leaf" />
                </div>
                <div className="h-px flex-1 bg-foreground/15 transition-all duration-300 group-hover:bg-foreground/30" />
              </div>
              <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{item.title}</h3>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/75 md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
