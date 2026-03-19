import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function AudienceSection() {
  const { ref, isVisible } = useReveal(0.3)

  const groups = [
    {
      age: "0–12 лет",
      label: "Дети",
      icon: "Baby",
      description: "Семейный отдых, парки развлечений, познавательные экскурсии",
      direction: "top",
    },
    {
      age: "13–17 лет",
      label: "Подростки",
      icon: "Backpack",
      description: "Активный туризм, квесты, образовательные программы",
      direction: "right",
    },
    {
      age: "18–35 лет",
      label: "Молодёжь",
      icon: "Zap",
      description: "Экстремальный туризм, фестивали, городские маршруты",
      direction: "bottom",
    },
    {
      age: "36–60 лет",
      label: "Взрослые",
      icon: "Landmark",
      description: "Культурно-познавательный, гастрономический, деловой туризм",
      direction: "left",
    },
    {
      age: "60+ лет",
      label: "Старшее поколение",
      icon: "Heart",
      description: "Оздоровительный, паломнический, ностальгический туризм",
      direction: "bottom",
    },
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
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Кто наш турист?
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Возрастные категории</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {groups.map((group, i) => (
            <div
              key={i}
              className={`group rounded-lg border border-foreground/10 bg-foreground/5 p-4 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/10 md:p-6 ${getRevealClass(group.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
                <Icon name={group.icon} size={16} className="text-foreground/80" fallback="User" />
              </div>
              <div className="mb-1 font-mono text-xs text-foreground/50">{group.age}</div>
              <div className="mb-2 font-sans text-base font-light text-foreground md:text-lg">{group.label}</div>
              <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
