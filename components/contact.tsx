"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/xovpezan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a href="mailto:jaheermaseed@gmail.com" className="text-lg font-medium text-primary hover:underline">
                      jaheermaseed@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/zaheer-maseed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      linkedin.com/in/zaheer-maseed
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Github className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">GitHub</p>
                    <a
                      href="https://github.com/zaheer037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      github.com/zaheer037
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted && (
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <p className="text-green-700 dark:text-green-300">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-transition disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-transition disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-transition resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full smooth-transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
