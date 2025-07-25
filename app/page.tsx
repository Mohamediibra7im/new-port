import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Qualification from "@/components/Qualification"
import Projects from "@/components/Projects"
import Certificates from "@/components/Certificates"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { AOSInit } from "@/components/aos-init"
import "aos/dist/aos.css"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen flex flex-col">
      <AOSInit />
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <section id="hero" className="pt-12">
        <Hero />
      </section>
      <section id="about" data-aos="fade-up">
        <About />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <section id="qualification" data-aos="fade-up">
        <Qualification />
      </section>
      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>
      <section id="certificates" data-aos="fade-up">
        <Certificates />
      </section>
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  )
}

