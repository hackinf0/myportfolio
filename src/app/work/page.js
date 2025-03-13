export default function Work() {
  const jobs = [
    {
      location: "Online",
      date: "Nov 2024 — Feb 2025",
      position: "Wordpress Developer (Freelance)",
      company: "N/A(Independent Client)",
      description:
        "I developed a WordPress-based web application for a marketing company, enhancing its online presence and streamlining its digital operations..",
      badge: { text: "via acquisition", color: "bg-yellow-500 text-black" },
      skills: ["Wordpress", "Elementor"],
    },
    {
      location: "Online",
      date: "April 2024 — July 2024",
      position: "Full stack dev (Freelance)",
      company: "N/A(Independent Client)",
      description:
        "I developed a full-stack e-commerce web application enabling farmers to sell their products across Côte d'Ivoire. Additionally, I built a delivery system that allows both clients and farmers to track orders in real time.",
      badge: { text: "via acquisition", color: "bg-yellow-500 text-black" },
      skills: [
        "React.js",
        "Node.js",
        "TailwindCSS",
        "RESTful APIs",
        "Tailwind",
        "MINIO",
        "Twilio",
        "AWS",
        "GitHub",
      ],
    },
    {
      location: "Online",
      date: "Jan 2023 — May 2023",
      position: "Full stack dev (Freelance)",
      company: "N/A(Independent Client)",
      description:
        "A company specializing in agricultural growth products. I developed a web and mobile application that enabled stakeholders to track and verify product deliveries, ensuring that delivery personnel successfully fulfilled orders to clients.",
      badge: { text: "via acquisition", color: "bg-yellow-500 text-black" },
      skills: [
        "React.js",
        "Node.js",
        "TailwindCSS",
        "RESTful APIs",
        "Tailwind",
        "GitHub",
      ],
    },
    {
      location: "Abidjan , Côte D'Ivoire",
      date: "Feb 2021 — Dec 2021",
      position: "Web developer",
      company: "Keiwa",
      description:
        "Keiwa is a mobile accounting application designed to simplify financial management for businesses. Manage your business effortlessly with Keiwa.",
      extra:
        "I worked as a web developer, designing and enhancing a web dashboard to optimize the functionality and user experience of the mobile application.",
      skills: ["React js", "RESTful APIs", "Github"],
    },
    {
      location: "Abidjan , Côte D'Ivoire",
      date: "May 2017 — Jan 2019",
      position: "Web Developer",
      company: "Ecademy",
      description:
        "As a Front-End Developer at eCademy, I built a responsive e-learning interface, integrated it with the back end, and added interactive features like quizzes and progress tracking.",
      skills: ["HTML5", "CSS", "JAVASCRIPT",],
    },
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-2xl mx-auto  px-6 py-12 text-white"> 
        <h1 className="text-3xl font-bold mb-4">Employment History</h1>
 
        <p className="text-gray-400 mb-8 leading-relaxed">
          I’ve had the opportunity to work with incredible teams, primarily
          collaborating with startups and independent clients. Here’s a brief
          overview of my professional experience.
        </p>
 
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            > 
              <div className="flex justify-between text-sm text-gray-400">
                <span>{job.location}</span>
                <span>{job.date}</span>
              </div>
 
              <h2 className="text-xl font-semibold mt-2">
                {job.position}{" "}
                <span className="text-gray-400">at {job.company}</span>
              </h2>
 
              {/* {job.badge && (
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-md ${job.badge.color}`}
                >
                  {job.badge.text}
                </span>
              )} */}
 
              <p className="text-gray-400 mt-4">{job.description}</p>
              <p className="text-gray-400 mt-2">{job.extra}</p>
 
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-md text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
