import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_280px] md:gap-12 lg:gap-20">
          <div>
            <div
              className={`mb-10 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Регионы
              </h2>
              <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ключевые туристические направления</p>
            </div>

            <div className="space-y-4 md:space-y-6">
          {[
            {
              number: "01",
              title: "Байкал и Сибирь",
              category: "Экотуризм · Активный отдых · Природные заповедники",
              year: "Круглый год",
              direction: "left",
            },
            {
              number: "02",
              title: "Золотое кольцо",
              category: "Культурно-исторический туризм · Архитектура · Фольклор",
              year: "Круглый год",
              direction: "right",
            },
            {
              number: "03",
              title: "Кавказ и Черноморье",
              category: "Горнолыжный · Пляжный · Оздоровительный туризм",
              year: "Круглый год",
              direction: "left",
            },
            {
              number: "04",
              title: "Санкт-Петербург",
              category: "Городской · Музейный · Гастрономический туризм",
              year: "Круглый год",
              direction: "right",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
            </div>
          </div>

          <div
            className={`hidden overflow-hidden rounded-2xl md:block transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <img
              src="https://cdn.poehali.dev/projects/08cb0b83-56e7-493e-86dd-a486209c7368/files/a1b64e83-9d31-4720-be1b-f1e89ab3a45b.jpg"
              alt="Санкт-Петербург белые ночи"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}