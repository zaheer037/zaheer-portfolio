export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                A dedicated Full Stack Developer with hands-on experience in building high-performance applications
                using <strong>MERN</strong> stack, AI integrations, and scalable backend services. Passionate about solving real-world
                problems with clean architecture and user-centric design.
              </p>
              <p>
                Currently working as a Full Stack Developer Intern at <strong>Bodega</strong>, where I'm involved in developing
                scalable MERN applications, integrating AI technologies, implementing DevOps tools, and deploying
                applications to the cloud.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. My goal is to create
                impactful digital solutions that make a difference in people's lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <p className="text-foreground/60">Client Projects Completed</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition">
                <div className="text-3xl font-bold gradient-text mb-2">1+</div>
                <p className="text-foreground/60">Years Experience</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <p className="text-foreground/60">Technologies</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <p className="text-foreground/60">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
