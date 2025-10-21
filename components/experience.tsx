import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "CodeBegun",
    role: "Full Stack Developer Intern",
    duration: "2024 - Present",
    description:
      "Working on scalable MERN applications, AI integrations, DevOps tools, real-time API development, user analytics, and cloud deployment",
    highlights: ["MERN Stack", "AI Integration", "DevOps", "Cloud Deployment"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-foreground/60 text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
