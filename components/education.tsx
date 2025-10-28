import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    institution: "Chalapathi Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering(AI)",
    status: "Pursuing",
    location: "Guntur, Andhra Pradesh",
    duration: "2022 - 2026",
    // description: "Specializing in software development, data structures, algorithms, and modern web technologies.",
    highlights: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Web Development",
      "Backend Development"
    ],
    gpa: "9.2/10",
    type: "Undergraduate"
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              My academic journey and educational background in computer science and engineering
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-card rounded-2xl border border-border hover:border-primary/50 smooth-transition hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 smooth-transition" />
                
                <div className="relative p-8">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 smooth-transition">
                        <GraduationCap className="text-primary" size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                            {edu.type}
                          </span>
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            edu.status === 'Pursuing' 
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary smooth-transition">
                          {edu.degree}
                        </h3>
                        <p className="text-foreground/60 text-lg font-medium mb-4">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* GPA Badge */}
                    {edu.gpa && (
                      <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <Award className="text-primary" size={20} />
                        <div>
                          <p className="text-xs text-foreground/60">CGPA</p>
                          <p className="font-bold text-primary">{edu.gpa}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-primary/70" size={20} />
                      <span className="text-foreground/70">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary/70" size={20} />
                      <span className="text-foreground/70">{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {/* <p className="text-foreground/70 leading-relaxed mb-6">
                    {edu.description}
                  </p> */}

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground/80">Key Areas of Study</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 hover:bg-primary/20 smooth-transition"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
              <GraduationCap className="text-primary" size={20} />
              <span className="text-foreground/70">Currently pursuing final year of studies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
