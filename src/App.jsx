
import "./App.css";

const skills = [
  "JavaScript",
  "React",
  "Python",
  "Go",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
];

const projects = [
  {
    number: "01",
    name: "Go Delivery System",
    description:
      "A transport management application focused on delivery operations, organization and workflow management.",
    stack: ["Go", "JavaScript", "HTML", "CSS"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    name: "Business Portfolio",
    description:
      "A responsive professional portfolio showcasing software development skills, projects and professional experience.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    status: "LIVE DEMO",
  },
  {
    number: "03",
    name: "Digital Solutions",
    description:
      "A collection of practical technology experiments and digital solutions focused on usability and modern web development.",
    stack: ["Python", "JavaScript", "React"],
    status: "EXPLORATION",
  },
];

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="brand" href="#home">
          JI<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's talk ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="intro">SOFTWARE ENGINEER · PORTFOLIO 2026</p>

        <h1>
          Building digital
          <br />
          solutions with <span>purpose.</span>
        </h1>

        <p className="hero-description">
          I am João Ildefonso, a technology professional focused on
          software development, modern web technologies and practical
          digital solutions.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore my work ↗
          </a>
          <a className="secondary-button" href="#about">
            More about me
          </a>
        </div>

        <div className="hero-bottom">
          <span>BASED IN IRELAND</span>
          <span>WORKING WITH TECHNOLOGY</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <p className="section-label">01 / ABOUT</p>
        <h2>
          Technology should solve
          <br />
          <span>real problems.</span>
        </h2>
        <p className="section-description">
          I am a technology professional with experience in IT support,
          computer and mobile device maintenance, and an ongoing focus
          on software development. I enjoy building practical digital
          solutions and continuously improving my technical skills.
        </p>
      </section>

      <section className="content-section" id="skills">
        <p className="section-label">02 / SKILLS</p>
        <h2>Tools I work with.</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <p className="section-label">03 / SELECTED WORK</p>
        <h2>Projects & experiments.</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <h3>{project.name}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <p className="section-label">04 / CONTACT</p>

        <h2>
          Have a project
          <br />
          in mind? <span>Let's connect.</span>
        </h2>

        <p className="section-description">
          Open to discussing software engineering opportunities
          and practical technology projects.
        </p>

        <div className="contact-actions">
          <a
            className="primary-button"
            href="mailto:joao.iseventech@gmail.com"
          >
            Get in touch ↗
          </a>

          <a
            className="secondary-button"
            href="https://www.linkedin.com/in/joao-ildefonso-oliveira-júnior-6176002a4/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 João Ildefonso</span>
        <span>Designed & built with React</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
