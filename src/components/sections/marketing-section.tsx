import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function MarketingSection() {
  const { ref, isVisible } = useReveal(0.3)

  const channels = [
    { icon: "Globe", title: "Единый портал и приложение", description: "Цифровой хаб для планирования путешествий по России" },
    { icon: "Building", title: "Международные выставки", description: "Участие в ведущих туристических форумах мира" },
    { icon: "Share2", title: "Соцсети и блогеры", description: "Вирусный контент, рилсы, коллаборации с инфлюенсерами" },
    { icon: "Handshake", title: "Зарубежные туроператоры", description: "Партнёрские соглашения для продвижения на внешних рынках" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Маркетинг
                <br />
                и продвижение
              </h2>
              <p className="font-mono text-sm text-foreground/60 md:text-base">/ Как рассказать о России туристам</p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-lg">
                Брендовые маршруты станут визитной карточкой страны: «Золотое кольцо», «Вкус России», «По следам великих» и другие.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            {channels.map((ch, i) => (
              <div
                key={i}
                className={`group flex items-start gap-5 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 130}ms` }}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/20">
                  <Icon name={ch.icon} size={16} className="text-foreground/80" fallback="Megaphone" />
                </div>
                <div>
                  <div className="mb-0.5 font-sans text-sm font-medium text-foreground md:text-base">{ch.title}</div>
                  <div className="text-xs leading-relaxed text-foreground/65 md:text-sm">{ch.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
