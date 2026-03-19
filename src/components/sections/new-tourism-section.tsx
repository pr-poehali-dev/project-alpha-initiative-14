import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function NewTourismSection() {
  const { ref, isVisible } = useReveal(0.3)

  const types = [
    { icon: "ChefHat", title: "Гастрономический", description: "Дегустации, мастер-классы, фермерские маршруты", direction: "top" },
    { icon: "Factory", title: "Промышленный", description: "Экскурсии на предприятия, заводы и производства", direction: "right" },
    { icon: "Telescope", title: "Научный", description: "Посещение лабораторий, обсерваторий и технопарков", direction: "bottom" },
    { icon: "Tractor", title: "Сельский", description: "Жизнь в деревне, фермерские продукты, агротуризм", direction: "left" },
    { icon: "Clapperboard", title: "Кинотуризм", description: "Маршруты по местам съёмок фильмов и сериалов", direction: "top" },
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
          className={`mb-12 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Новые форматы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Перспективные виды туризма</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
          {types.map((type, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${getRevealClass(type.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/25 transition-all duration-300 group-hover:w-14 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/50">0{i + 1}</span>
              </div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/20">
                <Icon name={type.icon} size={18} className="text-foreground/80" fallback="Star" />
              </div>
              <h3 className="mb-1.5 font-sans text-base font-light text-foreground md:text-lg">{type.title}</h3>
              <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">{type.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 flex gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="font-mono text-xs text-foreground/50">Целевая аудитория:</span>
          {["Молодёжь 18–35", "Взрослые 36–60"].map((tag) => (
            <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-0.5 font-mono text-xs text-foreground/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
