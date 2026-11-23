import { courses, profile, projects, roles, skillGroups } from "@/lib/profile";

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero" id="about">
        <p className="kicker">Full-stack · React.js, React Native, Spring Boot</p>
        <h1>
          React for the web and the phone.{" "}
          <em>Java, Spring&nbsp;Boot, and MySQL.</em>
        </h1>
        <p className="lede">
          I am Karthikeyan, a full-stack developer in Coimbatore. For four years I have shipped
          React.js and React Native applications for insurance and open-finance clients, and I
          build the backend with Java, Spring Boot, and MySQL.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#work">
            Selected work
          </a>
          <a className="btn ghost" href={`mailto:${profile.email}`}>
            Email Karthikeyan
          </a>
        </div>
        <dl className="facts">
          <div>
            <dt>Based in</dt>
            <dd>Coimbatore</dd>
          </div>
          <div>
            <dt>Current role</dt>
            <dd>Associate Developer, KGISL</dd>
          </div>
          <div>
            <dt>Since</dt>
            <dd>Mar 2023</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>Java, Spring&nbsp;Boot, MySQL</dd>
          </div>
        </dl>
      </section>

      <section id="work" className="section">
        <header className="section-head">
          <p className="kicker">Selected work</p>
          <h2>Products shipped for enterprise clients</h2>
        </header>
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <div className={`poster poster-${project.tone}`}>
              <span>{project.index}</span>
              <strong>{project.name}</strong>
              <em>{project.medium}</em>
            </div>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section id="experience" className="section">
        <header className="section-head">
          <p className="kicker">Experience</p>
          <h2>From the shop floor into software</h2>
        </header>
        <ol className="timeline">
          {roles.map((role) => (
            <li key={role.title}>
              <div className="when">
                <time dateTime={role.dateTime}>{role.dates}</time>
                <span>{role.place}</span>
              </div>
              <div>
                <h3>
                  {role.title}
                  {role.org ? <span>{role.org}</span> : null}
                </h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <p className="education">
          <span>Education</span>
          Bachelor of Engineering, Mechanical Engineering, Coimbatore, 2017.
        </p>
      </section>

      <section id="skills" className="section">
        <header className="section-head">
          <p className="kicker">Skills</p>
          <h2>What I use</h2>
        </header>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="certs">
          <h3>Courses</h3>
          <ul>
            {courses.map((course) => (
              <li key={course.name}>
                <strong>{course.name}</strong>
                <span>{course.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section contact">
        <header className="section-head">
          <p className="kicker">Contact</p>
          <h2>Available for full-stack work.</h2>
        </header>
        <p className="lede">
          Front end and mobile with React. Backend with Java, Spring Boot, and MySQL. Write or call.
        </p>
        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {profile.linkedinLabel}
            </a>
          </li>
          <li>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </li>
        </ul>
      </section>

      <footer className="colophon">
        <p>Karthikeyan R · Full-stack</p>
        <p>Mechanical engineering, 2017. Software since 2022.</p>
      </footer>
    </main>
  );
}
