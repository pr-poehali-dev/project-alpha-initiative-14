import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function SupportSection() {
  const { ref, isVisible } = useReveal(0.3)

  const items = [
    { icon: "BadgeDollarSign", title: "Субсидии и гранты", description: "Финансовая поддержка малого бизнеса в туристической отрасли", direction: "top" },
    { icon: "Receipt", title: "Налоговые льготы", description: "Преференции для инвесторов, вкладывающих в туристическую инфраструктуру", direction: "right" },
    { icon: "GraduationCap", title: "Обучение персонала", description: "Программы подготовки гидов, отельеров и туроператоров", direction: "bottom" },
    { icon: "Route", title: "Транспортная доступность", description: "Развитие дорог, авиамаршрутов и ж/д сообщения в регионах", direction: "left" },
    { icon: "Shield", title: "Безопасность", description: "Обеспечение комфортной и безопасной среды для туристов", direction: "top" },
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
            Поддержка
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что поможет развитию туризма</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-3 transition-all duration-700 ${getRevealClass(item.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/15">
                <Icon name={item.icon} size={20} className="text-foreground/80" fallback="Star" />
              </div>
              <div className="font-sans text-sm font-medium text-foreground md:text-base">{item.title}</div>
              <div className="text-xs leading-relaxed text-foreground/65 md:text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
