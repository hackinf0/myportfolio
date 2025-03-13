export default function Projects() {
  const projects = [
    {
      name: "openbabi.dev",
      description:
        "Open Babi is a platform dedicated to sharing and discovering open-source projects from Côte d'Ivoire. It connects developers, fosters collaboration, and promotes innovation within the local tech ecosystem.",
      badge: null,
      technologies: [
        "Next.js",
        "Javascript",
        "ShadcnUI",
        "Tailwind CSS",
        "MongoDB",
        "Vercel",
        "Github"
      ],
      links: [{ label: "🌐 Visit Website", url: "https://openbabi.dev" }],
    },
    {
      name: "Wizdeal",
      description:
        "Wizdeal is a web application that enables users to buy and sell second-hand items seamlessly. It provides a user-friendly marketplace for individuals to list, discover, and purchase pre-owned products.",
      badge: null,
      technologies: [
        "React js",
        "JavaScript",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        { label: "🌐 Visit Website", url: "https://front.openbabi.dev" },
      ],
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-12 text-white">
   
        <h1 className="text-3xl font-bold mb-4">Projects</h1>

 
        <p className="text-gray-400 mb-8 leading-relaxed">
          I have worked on a variety of projects over the years—some as hobbies,
          others as proofs of concept. Here are the most significant
          projects I’ve developed.
        </p>
 
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            > 
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                {project.badge && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-md ${project.badge.color}`}
                  >
                    {project.badge.text}
                  </span>
                )}
              </div> 
              <p className="text-gray-400 mt-2">{project.description}</p>
 
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-md text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
 
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
