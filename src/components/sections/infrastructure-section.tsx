import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function InfrastructureSection() {
  const { ref, isVisible } = useReveal(0.3)

  const items = [
    { icon: "Hotel", title: "Размещение", description: "Гостиницы, гостевые дома, кемпинги для любого бюджета", direction: "left" },
    { icon: "Plane", title: "Транспорт", description: "Аэропорты, ж/д вокзалы, автодороги — развитая сеть по всей стране", direction: "top" },
    { icon: "UtensilsCrossed", title: "Питание", description: "Рестораны и кафе с региональной национальной кухней", direction: "right" },
    { icon: "Users", title: "Туроператоры и гиды", description: "Профессиональные услуги сопровождения на всех языках", direction: "bottom" },
    { icon: "Smartphone", title: "Цифровые сервисы", description: "Информационные центры, мобильные приложения, онлайн-бронирование", direction: "left" },
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
            Инфраструктура
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что уже есть для приёма туристов</p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-3 border-l border-foreground/15 pl-4 transition-all duration-700 hover:border-foreground/35 md:pl-6 ${getRevealClass(item.direction, isVisible)}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/20">
                <Icon name={item.icon} size={18} className="text-foreground/80" fallback="CheckCircle" />
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
