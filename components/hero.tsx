"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10 -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                <span className="gradient-text">Maseed Zaheer</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Full Stack Developer | AI & Cloud Enthusiast
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
                Building scalable web applications & intelligent digital experiences with modern technologies and clean
                architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="smooth-transition hover:scale-105">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="smooth-transition bg-transparent hover:scale-105">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 animate-fade-in-up animate-delay-300">
              <a
                href="https://www.github.com/zaheer037"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zaheer-maseed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jaheermaseed@gmail.com"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition hover:scale-110 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

                    <div className="hidden md:flex items-center justify-center animate-fade-in-right">
            <div className="relative w-80 h-80 animate-float" style={{ perspective: '1000px' }}>
              {/* Profile Card with Flip Effect */}
              <div 
                className="relative w-full h-full transition-transform duration-700 hover:transform-[rotateY(180deg)] group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face - Profile Picture */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                  <img 
                    src="/profile_pic.jpg" 
                    alt="Maseed Zaheer - Full Stack Developer"
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium opacity-90">Maseed Zaheer</p>
                    <p className="text-xs opacity-70">MERN Stack Developer</p>
                  </div>
                </div>
                
                {/* Back Face - Action Buttons */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-2xl flex flex-col items-center justify-center space-y-6 p-6"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold gradient-text">👋</div>
                    <p className="text-lg font-semibold text-foreground">Let's Connect!</p>
                  </div>
                  
                  <div className="space-y-3 w-full">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-sm text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      📄 Download Resume
                    </a>
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 text-sm text-primary bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                    >
                      💼 Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
