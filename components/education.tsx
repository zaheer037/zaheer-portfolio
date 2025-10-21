import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Chalapathi Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    status: "Pursuing",
  },
]

export default function Education() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-foreground/60 text-lg mb-3">{edu.institution}</p>
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
