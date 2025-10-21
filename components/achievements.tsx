import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    title: "MongoDB Certified Associate Developer",
    icon: Award,
  },
  {
    title: "1st Place - App Builder Competition",
    icon: Trophy,
  },
  {
    title: "3rd Place - Coding Competition at HCET",
    icon: Trophy,
  },
  {
    title: "Developed production-grade applications during internship",
    icon: Award,
  },
]

export default function Achievements() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <p className="text-lg font-medium text-foreground/80">{achievement.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
