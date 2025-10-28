import { Code2, Database, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AI & Cloud",
    icon: Brain,
    skills: ["Machine Learning", "Scikit-learn", "AWS (EC2, S3)", "Docker", "CI/CD"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Website SEO (basic)"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.title}
                  className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 smooth-transition">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-secondary/50 text-foreground/80 rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary smooth-transition cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
