import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Maseed Zaheer</h3>
            <p className="text-foreground/60">Full Stack Developer | AI & Cloud Enthusiast</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <a href="#about" className="hover:text-primary smooth-transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary smooth-transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/zaheer037"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/zaheer-maseed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jaheermaseed@gmail.com"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary smooth-transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-foreground/60 text-sm">
          <p>&copy; {currentYear} Maseed Zaheer. All rights reserved.</p>
          <p>Crafted with passion using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
