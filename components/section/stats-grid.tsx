"use client"

interface StatItem {
    value: string;
    label: string;
}

export function StatsGrid({ stats }: { stats: StatItem[] }) {
    return (
        <section className="bg-admaf-red text-white py-24 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="block text-5xl md:text-6xl font-display font-medium">
                                    {stat.value}
                                </span>
                            </div>
                            <span className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60 font-bold group-hover:opacity-100 transition-opacity">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
