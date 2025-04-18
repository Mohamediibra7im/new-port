// import { stat } from "fs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMToAX6tHsIRJglXdvZDBSsVL8NptFnijwCbGu",
    demoLink: "https://mohamed-ibrahim-omar.vercel.app",
    githubLink: "https://github.com/Mohamediibra7im/new-port",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    status: "Completed",
  },
  {
    name: "FCFS Scheduling Calculator",
    description:
      "Web-based FCFS scheduling calculator using Flask and JavaScript, Users input process data and view scheduling results with visualization.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMYBBY5Fyfz6Mm2PYwX1GIl8K0pg7hWVdBZy3N",
    demoLink: "https://fcfs-scheduling-calculator.vercel.app/",
    githubLink: "https://github.com/Mohamediibra7im/FCFS-Scheduling-Calculator",
    technologies: ["Python", "Flask", "JavaScript", "HTML/CSS", "Bootstrap", "SQLite"],
    status: "Completed",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Django and React. It features user authentication, product management, and a shopping cart system.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMcko9WzNkRhuDOr7WMXlTdm6LQ9xSJ83v1f2j",
    demoLink: "https://demo.example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS"],
    status: "Completed",
  },
  {
    name: "FilmAPI",
    description:
      "A RESTful API for managing film data, built with Go and PostgreSQL. It supports CRUD operations, user authentication, and advanced search features.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMHNsoCbyF4PaobKweHshEyj7cQ3WAnrSZVpJf",
    demoLink: "#",
    githubLink: "https://github.com/Mohamediibra7im/FilmApi",
    technologies: ["Go (Golang)", "Fiber", "PostgreSQL", "Logrus", "Rate Limiting"],
    status: "still working",
  },
  {
    name: "Weather Application",
    description:
      "A responsive weather application using React and OpenWeatherMap API. It provides real-time weather information, forecasts, and location-based services.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMlaTfEyLoR1OPV9X5uQF6KS2Nb07TndEwBGvp",
    demoLink: "https://demo.example.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app",
    technologies: ["React", "OpenWeatherMap API", "Geolocation API", "Tailwind CSS"],
    status: "still working",
  },
  {
    name: "Task Management System",
    description:
      "A comprehensive task management system with features like task creation, assignment, progress tracking, and team collaboration tools.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMrC5ni9fzWN9TU3Vd0gvfMxOqa1CRD8I64tH2",
    demoLink: "https://demo.example.com/task-management",
    githubLink: "https://github.com/yourusername/task-management",
    technologies: [".NET Core", "React", "MongoDB", "Tilwind CSS"],
    status: "still working",
  },
  {
    name: "Todo List Application",
    description:
      "A feature-rich Todo list application built with React and TypeScript. Includes task prioritization, due dates, and local storage persistence.",
    image: "https://d3moma7wl9.ufs.sh/f/xRZhVxWEJbFMreCLcsNfzWN9TU3Vd0gvfMxOqa1CRD8I64tH",
    demoLink: "https://demo.example.com/todo-list",
    githubLink: "https://github.com/yourusername/todo-list-app",
    technologies: ["React", "TypeScript", "LocalStorage API", "Tailwind CSS"],
    status: "still working",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tech}
                </span>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
                >
                <ExternalLink className="w-4 h-4 mr-2 " />
                Demo
                </a>
                <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                >
                <Github className="w-4 h-4 mr-2" />
                Code
                </a>
                {project.status.toLowerCase() === "still working" && (
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-xl">
                  <svg
                  className="w-4 h-4 mr-2 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                  </svg>
                  Under Development
                </span>
                )}
                {project.status.toLowerCase() === "completed" && (
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-xl">
                  <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                  </svg>
                  Completed
                </span>
                )}
              </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

