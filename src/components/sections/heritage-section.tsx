import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function HeritageSection() {
  const { ref, isVisible } = useReveal(0.3)

  const items = [
    { icon: "Landmark", title: "Исторические памятники", description: "Музеи, крепости, монастыри, археологические объекты по всей стране" },
    { icon: "Building2", title: "Архитектурные ансамбли", description: "Кремли, дворцы, храмы — Московский Кремль, Эрмитаж, Петергоф" },
    { icon: "Music", title: "Традиции и фольклор", description: "Народные промыслы, хоровое пение, традиционные ремёсла регионов" },
    { icon: "PartyPopper", title: "Фестивали и праздники", description: "Масленица, День народного единства, региональные культурные фестивали" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] md:gap-12 lg:gap-20">
          <div className="flex flex-col justify-between">
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                История и культура —
                <br />
                <span className="text-foreground/40">магнит для туристов</span>
              </h2>
              <p className="font-mono text-sm text-foreground/60 md:text-base">/ Культурно-историческое наследие</p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div
                className={`mb-5 overflow-hidden rounded-xl transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/08cb0b83-56e7-493e-86dd-a486209c7368/files/682f8acc-549e-4bdf-9d95-be8cd47e0466.jpg"
                  alt="Московский Кремль"
                  className="h-44 w-full object-cover"
                />
              </div>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                Россия — в топе стран по числу объектов ЮНЕСКО. Более 150 000 памятников культуры ждут своих гостей.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Взрослые", "Пожилые", "Школьники"].map((tag) => (
                  <span key={tag} className="rounded-full border border-foreground/20 bg-foreground/10 px-3 py-1 font-mono text-xs text-foreground/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-5">
            {items.map((item, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 130}ms` }}
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/20">
                  <Icon name={item.icon} size={14} className="text-foreground/80" fallback="Star" />
                </div>
                <div>
                  <div className="mb-0.5 font-sans text-sm font-medium text-foreground md:text-base">{item.title}</div>
                  <div className="text-xs leading-relaxed text-foreground/65 md:text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}