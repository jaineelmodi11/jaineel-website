"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
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
  Sparkles,
  Zap,
  Globe,
  Star,
} from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"
import ProjectCard from "@/components/project-card"
import SkillOrb from "@/components/skill-orb"
import ExperienceTimeline from "@/components/experience-timeline"

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

  // Enhanced parallax effects
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const heroYSpring = useSpring(heroY, springConfig)
  const heroOpacitySpring = useSpring(heroOpacity, springConfig)
  const heroScaleSpring = useSpring(heroScale, springConfig)

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

  // Enhanced skills array
  const skills = [
    // Languages
    { name: "Python", level: 98, category: "Languages", color: "#3776ab" },
    { name: "Java", level: 92, category: "Languages", color: "#f89820" },
    { name: "C++", level: 85, category: "Languages", color: "#00599c" },
    { name: "C#", level: 82, category: "Languages", color: "#239120" },
    { name: "TypeScript", level: 90, category: "Languages", color: "#3178c6" },
    { name: "JavaScript", level: 95, category: "Languages", color: "#f7df1e" },
    { name: "SQL", level: 85, category: "Languages", color: "#336791" },
    { name: "Swift", level: 78, category: "Languages", color: "#fa7343" },
    // Frontend / UI
    { name: "React", level: 92, category: "Frontend", color: "#61dafb" },
    { name: "Next.js", level: 85, category: "Frontend", color: "#000000" },
    { name: "Tailwind CSS", level: 94, category: "Frontend", color: "#06b6d4" },
    { name: "Material-UI", level: 88, category: "Frontend", color: "#0081cb" },
    { name: "Flutter", level: 82, category: "Frontend", color: "#02569b" },
    { name: "Expo", level: 78, category: "Frontend", color: "#000020" },
    // Backend
    { name: "Node.js", level: 93, category: "Backend", color: "#339933" },
    { name: "Express.js", level: 90, category: "Backend", color: "#000000" },
    { name: "Flask", level: 88, category: "Backend", color: "#000000" },
    { name: "FastAPI", level: 85, category: "Backend", color: "#009688" },
    { name: ".NET Core", level: 82, category: "Backend", color: "#512bd4" },
    { name: "TensorFlow", level: 92, category: "AI/ML", color: "#ff6f00" },
    { name: "PyTorch", level: 88, category: "AI/ML", color: "#ee4c2c" },
    { name: "Scikit-learn", level: 90, category: "AI/ML", color: "#f7931e" },
    { name: "Pandas", level: 95, category: "AI/ML", color: "#150458" },
    { name: "NumPy", level: 94, category: "AI/ML", color: "#013243" },
    { name: "KNN", level: 85, category: "AI/ML", color: "#ff6b6b" },
    { name: "Vision Models", level: 82, category: "AI/ML", color: "#4ecdc4" },
    // Database / DevOps
    { name: "MySQL", level: 90, category: "Database/DevOps", color: "#4479a1" },
    { name: "PostgreSQL", level: 85, category: "Database/DevOps", color: "#336791" },
    { name: "MongoDB", level: 88, category: "Database/DevOps", color: "#47a248" },
    { name: "Docker", level: 82, category: "Database/DevOps", color: "#2496ed" },
    { name: "GitHub", level: 95, category: "Database/DevOps", color: "#181717" },
    { name: "RecSend CLI", level: 87, category: "Database/DevOps", color: "#ff9500" },
    { name: "Microsoft Azure", level: 85, category: "Database/DevOps", color: "#0078d4" },
    { name: "AWS", level: 85, category: "Database/DevOps", color: "#ff9900" },
  ]

  // Enhanced projects array
  const projects = [
    {
      title: "MovieMatchApp",
      description:
        "An iOS swipe-based movie recommendation app that learns user preferences from swipe actions and delivers tailored film suggestions using advanced machine learning algorithms.",
      image: "/Projects/moviematch.png",
      technologies: ["Swift", "SwiftUI", "Firebase", "Flask", "PostgreSQL", "ML"],
      github: "https://github.com/jaineelmodi11/MovieMatchApp",
      live: "https://github.com/user-attachments/assets/cd57a3d8-373b-4e89-afb9-21fd22350006",
      featured: true,
      color: "#007AFF",
      category: "Mobile App",
    },
    {
      title: "RecSend CLI",
      description:
        "A powerful command-line tool that automates end-to-end API testing with YAML-defined suites for rapid backend validation and seamless CI integration.",
      image: "/Projects/recsend.png",
      technologies: ["Python", "Click", "YAML", "REST APIs", "CI/CD"],
      github: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
      live: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
      featured: true,
      color: "#34C759",
      category: "Developer Tool",
    },
    {
      title: "TOSSIT (Waste Identification App)",
      description:
        "A ML-driven application that identifies waste from photos, enhances recycling outcomes, and provides users with comprehensive waste-tracking insights and environmental impact data.",
      image: "/Projects/Tossit.png",
      technologies: ["React", "React Native", "Expo", "TensorFlow", "Node.js", "Express"],
      github: "https://github.com/jaineelmodi11/Tossit/tree/main/tossit-master",
      live: "https://user-images.githubusercontent.com/67121244/167263145-62d1ecbb-d913-4aa8-85a0-bc55cf39aa13.mp4",
      featured: true,
      color: "#FF9500",
      category: "Environmental Tech",
    },
  ]

  // Enhanced internship data
  const internships = [
    {
      title: "AI Development Intern",
      company: "Mulvey & Banani International",
      period: "Summer 2024 & Summer 2025",
      description:
        "Architected CI/CD workflows saving $20K/month, developed a C#/.NET Revit plugin to automate placement of electrical components to boost productivity and streamline workflows.",
      skills: ["C#", ".NET Core", "Revit API", "Python", "FastAPI", "CI/CD", "Azure", "WPF"],
      icon: <Zap className="w-5 h-5" />,
      color: "#3b82f6",
    },
    {
      title: "AI Development Intern",
      company: "ConverseCart",
      period: "January 2024 – May 2024",
      description:
        "Developed an AI-driven shopping interface using KNN and deep learning for personalized recommendations, boosting conversion by 18% and average order value by 25%.",
      skills: ["Python", "MongoDB", "KNN", "Deep Learning", "GPT-4 Prompting", "ETL", "API Development"],
      icon: <Brain className="w-5 h-5" />,
      color: "#8b5cf6",
    },
    {
      title: "Junior Summer Program Intern",
      company: "Geotab",
      period: "Summer 2021 & Summer 2022",
      description:
        "Developed Python crash simulation software to enhance driver safety, created an HR talent-tracking dashboard for 30+ roles, and automated reimbursement/work-abroad requests for 3,000+ employees via Excel macros.",
      skills: ["Python", "Data Visualization", "Excel Automation", "Dashboard Development"],
      icon: <Globe className="w-5 h-5" />,
      color: "#10b981",
    },
    {
      title: "Web Developer Intern",
      company: "NSTEM",
      period: "Summer 2022",
      description:
        "Designed dynamic e-commerce website layouts using Figma, WordPress, HTML, and CSS to enhance visual experience and usability.",
      skills: ["Figma", "WordPress", "HTML", "CSS", "UI/UX Design"],
      icon: <Palette className="w-5 h-5" />,
      color: "#f59e0b",
    },
  ]

  return (
    <div className="min-h-screen text-gray-900 overflow-hidden relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <CustomCursor mousePosition={mousePosition} cursorVariant={cursorVariant} />
      <ParticleBackground />

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/70 backdrop-blur-xl border-b border-white/20 py-4 shadow-lg shadow-blue-500/5" 
            : "bg-transparent py-6"
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
              <span className="gradient-text-blue text-display">
                Jaineel Modi
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8 relative z-10">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-full ${
                    activeSection === item.toLowerCase() 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-5 animate-pulse" />
        </div>

        <motion.div 
          style={{ y: heroYSpring, opacity: heroOpacitySpring, scale: heroScaleSpring }} 
          className="max-w-6xl mx-auto text-center z-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Enhanced profile section */}
            <div className="relative mb-12">
              <motion.div 
                className="w-48 h-48 mx-auto mb-8 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 animate-spin-slow opacity-20 blur-xl" />
                <div className="absolute inset-4 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-100 glass">
                  <span className="text-6xl font-bold gradient-text-blue text-display">JM</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse-glow">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex justify-center space-x-4 mb-8"
              >
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for Work
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  1.5+ Years Experience
                </Badge>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold mb-8 tracking-tight text-display"
            >
              <span className="block text-gray-900">Software</span>
              <span className="block gradient-text-blue">Developer</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              I craft exceptional digital experiences through{" "}
              <span className="gradient-text-purple font-medium">innovative code</span>{" "}
              and{" "}
              <span className="gradient-text-blue font-medium">creative design</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl rounded-full px-10 py-4 font-medium text-lg btn-modern transition-bounce"
              onClick={() => scrollToSection("projects")}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              Explore My Work
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-10 py-4 font-medium text-lg btn-modern transition-bounce"
              asChild
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <a href="/resume.pdf" download="Jaineel_Modi_Resume.pdf">
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, href: "https://github.com/jaineelmodi11", color: "hover:text-gray-800" },
              { icon: Linkedin, href: "https://linkedin.com/in/jaineelmodi", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:jaineelmodi04@gmail.com", color: "hover:text-red-500" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                className={`text-gray-500 ${color} transition-all duration-300 p-3 rounded-full hover:bg-white hover:shadow-lg`}
                whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="section-padding min-h-screen flex items-center relative bg-gradient-to-br from-white via-blue-50 to-purple-50"
      >
        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-display">
              About{" "}
              <span className="gradient-text-blue">Me</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Innovation through simplicity and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl opacity-10 blur-3xl animate-pulse" />
                <div className="relative aspect-square rounded-3xl bg-white shadow-2xl p-8 backdrop-blur-sm flex items-center justify-center overflow-hidden group border border-gray-100 card-modern">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center z-10">
                    <Code className="w-32 h-32 text-blue-600 mx-auto mb-6" />
                    <p className="text-gray-500 font-light text-lg">Professional Photo</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Hey, I'm Jaineel, a volleyball player, a ramen noodles connoisseur, and most profoundly a{" "}
                <span className="gradient-text-purple font-medium">programming fanatic</span>. I love bringing people together through technology and solving problems to make life easier for others.
              </p>

              <ExperienceTimeline experiences={internships} />

              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { icon: MapPin, text: "Toronto, ON", color: "bg-blue-100 text-blue-600" },
                  { icon: Calendar, text: "1.5+ Years Experience", color: "bg-purple-100 text-purple-600" }
                ].map(({ icon: Icon, text, color }, index) => (
                  <motion.div 
                    key={text}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-700 font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="section-padding min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="container-modern z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-display">
              Skills &{" "}
              <span className="gradient-text-blue">Expertise</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Technologies that power innovation
            </p>
          </motion.div>

          <div className="relative h-[600px] w-full mb-16">
            <SkillOrb skills={skills} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {[
              { category: "Languages", icon: Code, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
              { category: "Frontend", icon: Palette, color: "from-green-500 to-green-600", bgColor: "bg-green-50" },
              { category: "Backend", icon: Server, color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50" },
              { category: "AI/ML", icon: Brain, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
              { category: "Database/DevOps", icon: Database, color: "from-red-500 to-red-600", bgColor: "bg-red-50" }
            ].map(({ category, icon: Icon, color, bgColor }, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className={`${bgColor} border-gray-200 p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl card-modern overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">{category}</h3>
                    <div className="space-y-3">
                      {skills
                        .filter((skill) => skill.category === category)
                        .slice(0, 4)
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="bg-white/80 border-gray-200 text-gray-700 text-sm font-medium px-3 py-1 hover:bg-white transition-colors"
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

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="section-padding min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="container-modern w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-display">
              Featured{" "}
              <span className="gradient-text-blue">Projects</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Innovation meets execution
            </p>
          </motion.div>

          <div className="grid gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="section-padding min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="max-w-6xl mx-auto z-10 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 text-display">
              Get In{" "}
              <span className="gradient-text-blue">Touch</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Let's create something extraordinary together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-10"
              onMouseEnter={enterText}
              onMouseLeave={leaveButton}
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 font-light text-lg leading-relaxed">
                  Whether you have a groundbreaking idea or want to discuss the future of technology, I'd love to hear
                  from you.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email", value: "jaineelmodi04@gmail.com", color: "bg-blue-100 text-blue-600" },
                  { icon: Phone, title: "Phone", value: "647-275-5055", color: "bg-green-100 text-green-600" },
                  { icon: MapPin, title: "Location", value: "Toronto, ON", color: "bg-purple-100 text-purple-600" }
                ].map(({ icon: Icon, title, value, color }) => (
                  <motion.div 
                    key={title}
                    whileHover={{ x: 5, scale: 1.02 }} 
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{title}</p>
                      <p className="text-gray-600 font-light">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 p-10 shadow-2xl rounded-3xl card-modern">
                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium text-lg">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-2 h-12 text-lg focus-ring"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium text-lg">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-2 h-12 text-lg focus-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium text-lg">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-2 h-12 text-lg focus-ring"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium text-lg">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-2 h-12 text-lg focus-ring"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium text-lg">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[150px] bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-xl mt-2 text-lg focus-ring resize-none"
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl rounded-xl py-4 font-medium text-lg btn-modern"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 relative bg-gradient-to-br from-gray-50 to-white">
        <div className="container-modern relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 mb-6 md:mb-0 font-light text-lg"
            >
              © {new Date().getFullYear()} Jaineel Modi. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              {[
                { icon: Github, href: "https://github.com/jaineelmodi11", color: "hover:text-gray-800" },
                { icon: Linkedin, href: "https://linkedin.com/in/jaineelmodi", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:jaineelmodi04@gmail.com", color: "hover:text-red-500" }
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`text-gray-500 ${color} transition-all duration-300 p-3 rounded-full hover:bg-white hover:shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}