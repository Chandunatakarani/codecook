import Link from "next/link";

const cards = [
  {
    title: "Programming Language",
    tag: "NEW",
    description: "Turn coding practice into an epic adventure",
    buttonLabel: "Begin Now",
    href: "/quest",
    gradient: "from-slate-100 to-slate-200",
  },
  {
    title: "Project-Based Learning",
    subtitle: "30 Days Challenge",
    badge: "Beginner Friendly",
    buttonLabel: "Start Learning",
    href: "/javascript-30-days",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    title: "Beginner DSA",
    buttonLabel: "Get Started",
    href: "/interview-questions",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Algorithms",
    buttonLabel: "Get Started",
    href: "/interview-questions",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Difficulty rating wise",
    buttonLabel: "Get Started",
    href: "/interview-questions",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Interview Questions",
    subtitle: "30 Days Challenge",
    badge: "Beginner Friendly",
    buttonLabel: "Start Learning",
    href: "/javascript-30-days",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    title: "Company-wise Questions",
    subtitle: "30 Days Challenge",
    badge: "Beginner Friendly",
    buttonLabel: "Start Learning",
    href: "/javascript-30-days",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    title: "Advanced Coding Problems",
    subtitle: "30 Days Challenge",
    badge: "Beginner Friendly",
    buttonLabel: "Start Learning",
    href: "/javascript-30-days",
    gradient: "from-orange-400 to-orange-500",
  },
];

export default function HomeBanners() {
  return (
    <div
      className="
        w-full
        flex
        gap-4
        overflow-x-auto
        snap-x snap-mandatory
        pb-3
        scrollbar-thin
        scrollbar-thumb-gray-400
        scrollbar-track-transparent
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className={`
            snap-start
            shrink-0
            min-w-[260px] md:min-w-[300px]
            rounded-2xl px-6 py-5
            bg-gradient-to-r ${card.gradient}
            shadow-md text-left
            flex flex-col justify-between
            min-h-[140px]
          `}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h2>

              {card.tag && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black text-white">
                  {card.tag}
                </span>
              )}
            </div>

            {card.subtitle && (
              <p className="text-sm font-medium text-gray-900">
                {card.subtitle}
              </p>
            )}

            {card.badge && (
              <p className="text-xs text-gray-800 mt-1">{card.badge}</p>
            )}

            {card.description && (
              <p className="text-xs text-gray-700 mt-2 max-w-[200px]">
                {card.description}
              </p>
            )}
          </div>

          <div className="mt-4">
            <Link
              href={card.href}
              className="
                inline-flex items-center justify-center
                rounded-full px-4 py-2
                text-xs font-semibold
                bg-black text-white
                hover:bg-gray-900
                transition
              "
            >
              {card.buttonLabel}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
