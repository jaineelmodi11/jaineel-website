"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Database,
  Server,
  ChevronDown,
  Send,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  Brain,
} from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"
import ProjectCard from "@/components/project-card"
import SkillOrb from "@/components/skill-orb"
import ExperienceTimeline from "@/components/experience-timeline"

// This comment is added to trigger a new deployment
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]

      const current = sections.find((section) => {
        if (section.ref.current) {
          const rect = (section.ref.current as HTMLElement).getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current.id)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const enterButton = () => setCursorVariant("button")
  const enterText = () => setCursorVariant("text")
  const leaveButton = () => setCursorVariant("default")

  // Skills array matching resume "Technical Skills"
  const skills = [
    // Languages
    { name: "Python", level: 98, category: "Languages", color: "#007AFF" },
    { name: "Java", level: 92, category: "Languages", color: "#007AFF" },
    { name: "C++", level: 85, category: "Languages", color: "#007AFF" },
    { name: "C#", level: 82, category: "Languages", color: "#007AFF" },
    { name: "TypeScript", level: 90, category: "Languages", color: "#007AFF" },
    { name: "JavaScript", level: 95, category: "Languages", color: "#007AFF" },
    { name: "SQL", level: 85, category: "Languages", color: "#007AFF" },
    { name: "Swift", level: 78, category: "Languages", color: "#007AFF" },
    // Frontend / UI
    { name: "React", level: 92, category: "Frontend", color: "#34C759" },
    { name: "Next.js", level: 85, category: "Frontend", color: "#34C759" },
    { name: "Tailwind CSS", level: 94, category: "Frontend", color: "#34C759" },
    { name: "Material-UI", level: 88, category: "Frontend", color: "#34C759" },
    { name: "Flutter", level: 82, category: "Frontend", color: "#34C759" },
    { name: "Expo", level: 78, category: "Frontend", color: "#34C759" },
    // Backend
    { name: "Node.js", level: 93, category: "Backend", color: "#FF9500" },
    { name: "Express.js", level: 90, category: "Backend", color: "#FF9500" },
    { name: "Flask", level: 88, category: "Backend", color: "#FF9500" },
    { name: "FastAPI", level: 85, category: "Backend", color: "#FF9500" },
    { name: ".NET Core", level: 82, category: "Backend", color: "#FF9500" },
    { name: "TensorFlow", level: 92, category: "AI/ML", color: "#5856D6" },
    { name: "PyTorch", level: 88, category: "AI/ML", color: "#5856D6" },
    { name: "Scikit-learn", level: 90, category: "AI/ML", color: "#5856D6" },
    { name: "Pandas", level: 95, category: "AI/ML", color: "#5856D6" },
    { name: "NumPy", level: 94, category: "AI/ML", color: "#5856D6" },
    { name: "KNN", level: 85, category: "AI/ML", color: "#5856D6" },
    { name: "Vision Models", level: 82, category: "AI/ML", color: "#5856D6" },
    // Database / DevOps
    { name: "MySQL", level: 90, category: "Database/DevOps", color: "#FF3B30" },
    { name: "PostgreSQL", level: 85, category: "Database/DevOps", color: "#FF3B30" },
    { name: "MongoDB", level: 88, category: "Database/DevOps", color: "#FF3B30" },
    { name: "Docker", level: 82, category: "Database/DevOps", color: "#FF3B30" },
    { name: "GitHub", level: 95, category: "Database/DevOps", color: "#FF3B30" },
    { name: "RecSend CLI", level: 87, category: "Database/DevOps", color: "#FF3B30" },
    { name: "Microsoft Azure", level: 85, category: "Database/DevOps", color: "#FF3B30" },
    { name: "AWS", level: 85, category: "Database/DevOps", color: "#FF3B30" },
  ]

  // Projects array updated to reflect resume details
  const projects = [
    {
      title: "MovieMatchApp",
      description:
        "An iOS swipe-based movie recommendation app that learns user preferences from swipe actions and delivers tailored film suggestions..",
      image: "https://placehold.co/800x450/007AFF/FFFFFF/png?text=MovieMatch+App",
      technologies: ["Swift", "SwiftUI", "Firebase", "Flask", "PostgreSQL"],
      github: "https://github.com/jaineelmodi11/MovieMatchApp",
      live: "https://github.com/user-attachments/assets/cd57a3d8-373b-4e89-afb9-21fd22350006",
      featured: true,
      color: "#007AFF",
    },
    {
      title: "RecSend CLI",
      description:
        "A command-line tool that automates end-to-end API testing with YAML-defined suites forrapid backend validation and seamless CI integration.",
      image: "https://placehold.co/800x450/34C759/FFFFFF/png?text=RecSend+CLI",
      technologies: ["Python", "Click"],
      github: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
      live: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
      featured: true,
      color: "#34C759",
    },
    {
      title: "TOSSIT (Waste Identification App)",
      description:
        "A ML-driven application that identifies waste from photos, enhances recycling outcomes, and provides users with waste-tracking insights.",
      image: "https://placehold.co/800x450/FF9500/FFFFFF/png?text=TOSSIT+App",
      technologies: ["React", "React Native", "Expo", "TensorFlow", "Node.js", "Express"],
      github: "https://github.com/jaineelmodi11/Tossit/tree/main/tossit-master",
      live: "https://user-images.githubusercontent.com/67121244/167263145-62d1ecbb-d913-4aa8-85a0-bc55cf39aa13.mp4",
      featured: true,
      color: "#FF9500",
    },
  ]

  // Internship / experience timeline data pulled from resume
  const internships = [
    {
      title: "AI Development Intern",
      company: "Mulvey & Banani International",
      period: "Summer 2024 & Summer 2025",
      description:
        "Architected CI/CD workflows saving $20K/month, developed a C#/.NET Revit plugin to automate placement of electrical components to boost productivity and streamline workflows.",
      skills: ["C#", ".NET Core", "Revit API", "Python", "FastAPI", "CI/CD", "Azure", "WPF"],
    },
    {
      title: "AI Development Intern",
      company: "ConverseCart",
      period: "January 2024 – May 2024",
      description:
        "Developed an AI-driven shopping interface using KNN and deep learning for personalized recommendations, boosting conversion by 18% and average order value by 25%.",
      skills: ["Python", "MongoDB", "KNN", "Deep Learning", "GPT-4 Prompting", "ETL", "API Development"],
    },
    {
      title: "Junior Summer Program Intern",
      company: "Geotab",
      period: "Summer 2021 & Summer 2022",
      description:
        "Developed Python crash simulation software to enhance driver safety, created an HR talent-tracking dashboard for 30+ roles, and automated reimbursement/work-abroad requests for 3,000+ employees via Excel macros.",
      skills: ["Python", "Data Visualization", "Excel Automation", "Dashboard Development"],
    },
    {
      title: "Web Developer Intern",
      company: "NSTEM",
      period: "Summer 2022",
      description:
        "Designed dynamic e-commerce website layouts using Figma, WordPress, HTML, and CSS to enhance visual experience and usability.",
      skills: ["Figma", "WordPress", "HTML", "CSS"],
    },
  ]

  return (
    <div className="min-h-screen text-gray-900 overflow-hidden relative">
      <CustomCursor mousePosition={mousePosition} cursorVariant={cursorVariant} />
      <ParticleBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold relative z-10"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900">
                Jaineel Modi
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8 relative z-10">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        style={{ background: "linear-gradient(to bottom, rgba(249, 250, 251, 0.8), rgba(255, 255, 255, 0.8))" }}
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 animate-spin-slow opacity-20 blur-xl" />
              <div className="absolute inset-2 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100">
                <span className="text-5xl font-bold text-gray-900">JM</span>
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="block text-gray-900">Software</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                Developer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              I craft exceptional digital experiences through innovative code and creative design.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg rounded-full px-8 py-3 font-medium"
              onClick={() => scrollToSection("projects")}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              Explore My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="/resume.pdf"
              download="Jaineel_Modi_Resume.pdf"
              className="inline-flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-8 py-3 font-medium transition-colors"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/jaineelmodi11"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jaineelmodi"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:jaineelmodi04@gmail.com"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
        style={{ background: "rgba(249, 250, 251, 0.8)" }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Innovation through simplicity and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl opacity-10 blur-2xl" />
                <div className="relative aspect-square rounded-3xl bg-white shadow-2xl p-8 backdrop-blur-sm flex items-center justify-center overflow-hidden group border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center z-10">
                    <Code className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-500 font-light">Professional Photo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              <p className="text-lg text-gray-700 leading-relaxed font-light">
              Hey, I'm Jaineel, a volleyball player, a ramen noodles connoisseur, and most profoundly a programming fanatic. I love bringing people together through technology and solving problems to make life easier for others.
              </p>

              <ExperienceTimeline experiences={internships} />

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-light">Toronto, ON</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-light">1.5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
        style={{ background: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="max-w-6xl mx-auto z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Skills &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Technologies that power innovation</p>
          </motion.div>

          <div className="relative h-[500px] w-full">
            <SkillOrb skills={skills} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16"
          >
            {["Languages", "Frontend", "Backend", "AI/ML", "Database/DevOps"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="bg-white border-gray-200 p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                  <div className="flex flex-col items-center text-center">
                    {category === "Languages" && <Code className="w-8 h-8 text-blue-600 mb-3" />}
                    {category === "Frontend" && <Palette className="w-8 h-8 text-green-600 mb-3" />}
                    {category === "Backend" && <Server className="w-8 h-8 text-orange-600 mb-3" />}
                    {category === "AI/ML" && <Brain className="w-8 h-8 text-purple-600 mb-3" />}
                    {category === "Database/DevOps" && <Database className="w-8 h-8 text-red-600 mb-3" />}
                    <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                    <div className="space-y-2">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="bg-gray-50 border-gray-200 text-gray-700 text-xs font-medium"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
        style={{ background: "rgba(249, 250, 251, 0.8)" }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Innovation meets execution</p>
          </motion.div>

          <div className="grid gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative"
        style={{ background: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="max-w-4xl mx-auto z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get In{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Let's create something extraordinary together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 font-light">
                  Whether you have a groundbreaking idea or want to discuss the future of technology, I'd love to hear
                  from you.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 font-light">jaineelmodi04@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 font-light">647-275-5055</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600 font-light">Toronto, ON</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 p-8 shadow-2xl rounded-3xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px] bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-1"
                    />
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg rounded-xl py-3 font-medium"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 relative"
        style={{ background: "rgba(249, 250, 251, 0.8)" }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 mb-4 md:mb-0 font-light"
            >
              © {new Date().getFullYear()} Jaineel Modi. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/jaineelmodi11"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jaineelmodi"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:jaineelmodi04@gmail.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
