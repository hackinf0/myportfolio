import { FileText, Github, BookMarked } from "lucide-react";

export default function Research() {
  const researchProjects = [
    {
      title: "Discrete-Event Simulation of the Supermarket Model (Power-of-d Choices)",
      description:
        "Discrete-event simulation of the supermarket queueing model (power-of-d choices). Implements memoryless (exponential) and Weibull workloads, and compares Shortest Queue vs Least Work Left routing policies.",
      repo: "https://github.com/hackinf0/supermarket-queue-sim",
      report: "https://github.com/hackinf0/supermarket-queue-sim/blob/main/reports_dc.pdf",
    },
    {
      title: "Network Analysis of Bordeaux's Public Transport Network (TBM)",
      description:
        "Network analysis study of Bordeaux's public transport system (TBM).",
      repo: null,
      report: null,
    },
  ];

  const papersImplemented = [
    {
      title: "Preserving Privacy in Social Networks Against Neighborhood Attacks",
      authors: "Bin Zhou, Jian Pei",
      year: "2008",
      link: "https://www.cs.sfu.ca/~jpei/publications/NeighborhoodAnonymization-ICDE08.pdf",
      notes:
        "Introduces k-neighborhood anonymity to protect graph-structured social network data against neighborhood attacks. Implemented in Python.",
    },
    {
      title:
        "K-Automorphism: A General Framework for Privacy Preserving Network Publication",
      authors: "Lei Zou, Lei Chen, M. Tamer Özsu",
      year: "2009",
      link: "http://www.vldb.org/pvldb/vol2/vldb09-556.pdf",
      notes:
        "Proposes k-automorphism, an anonymization framework defending against a broad class of structural re-identification attacks on published network graphs. Implemented in Python.",
    },
  ];

  const papersRead = [
    {
      title: "Preserving Privacy in Social Networks Against Neighborhood Attacks",
      authors: "Zhou & Pei",
      year: "2008",
      link: "https://www.cs.sfu.ca/~jpei/publications/NeighborhoodAnonymization-ICDE08.pdf",
    },
    {
      title:
        "K-Automorphism: A General Framework for Privacy Preserving Network Publication",
      authors: "Zou, Chen & Özsu",
      year: "2009",
      link: "http://www.vldb.org/pvldb/vol2/vldb09-556.pdf",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-12 text-foreground">
        <h1 className="text-3xl font-bold mb-4">Research</h1>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          A record of research projects, and papers I have read and
          implemented, as I build toward research work in preparation for a
          PhD.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Research Projects</h2>
          <div className="space-y-4">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md border border-border"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
                <div className="flex space-x-4 mt-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm"
                    >
                      <Github size={16} />
                      Repo
                    </a>
                  )}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm"
                    >
                      <FileText size={16} />
                      Report
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Papers Implemented</h2>
          <div className="space-y-4">
            {papersImplemented.map((paper, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md border border-border"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{paper.title}</h3>
                  <span className="text-muted-foreground text-sm">{paper.year}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{paper.authors}</p>
                {paper.notes && (
                  <p className="text-muted-foreground mt-2">{paper.notes}</p>
                )}
                <div className="flex space-x-4 mt-4">
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm"
                    >
                      <FileText size={16} />
                      Paper
                    </a>
                  )}
                  {paper.repo && (
                    <a
                      href={paper.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm"
                    >
                      <Github size={16} />
                      Implementation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Papers Read</h2>
          <ul className="space-y-3">
            {papersRead.map((paper, index) => (
              <li key={index}>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap gap-x-2 group"
                >
                  <BookMarked
                    size={16}
                    className="text-muted-foreground group-hover:text-yellow-500"
                  />
                  <span className="group-hover:text-yellow-500 group-hover:underline transition">
                    {paper.title}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({paper.authors}, {paper.year})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
