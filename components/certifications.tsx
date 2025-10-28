import { Briefcase as Certificate } from "lucide-react"

const certifications = [
  "MongoDB Node.js Developer Certification",
  "AWS Fundamentals (Free Tier + CloudFront Implementation)",
  "Full Stack Web Development Certification - Udemy",
  "Oracle OCI AI Foundations Certificate",
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 smooth-transition flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Certificate className="text-primary" size={24} />
                </div>
                <p className="text-lg font-medium text-foreground/80">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
