"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "AI Music Generator",
    description: "Generated original music sequences based on user input using deep learning",
    techStack: ["LSTM", "TensorFlow", "Flask", "React"],
    status: "Live",
    link: "https://your-deployment-link.com",
    github: "https://github.com/zaheer037/ai-music-generator",
  },
  {
    name: "CodeQuest - Stack Overflow Clone",
    description: "A developer-centric Q&A platform with authentication and voting system",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://code-stack-clone.netlify.app",
    github: "https://github.com/zaheer037/codequest",
  },
  {
    name: "Amazon Clone App",
    description: "E-commerce platform with authentication, shopping cart & checkout functionality",
    techStack: ["MERN Stack", "Stripe", "Redux"],
    github: "https://github.com/zaheer037/amazon-clone-app",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-border hover:border-primary/50 smooth-transition flex flex-col animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">{project.name}</h3>
                    {project.status && (
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold animate-glow">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium smooth-transition group-hover:bg-primary/20 group-hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 smooth-transition bg-transparent hover:scale-105"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          View
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 smooth-transition bg-transparent hover:scale-105"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
