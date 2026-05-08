import "./App.css";

const email = "vineetjeccs@gmail.com";
const resumeFile = "/vineet_tiwari_senior_software_engineer.pdf";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="navLogo">VT</a>
        <div className="navLinks">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroContent">
          <div className="heroLeft">
            <p className="badge">Senior Backend Engineer • Open to India & Global Opportunities</p>

            <h1>Vineet Tiwari</h1>
            <h2>Senior Backend Engineer • Scalable Systems • Distributed Architecture</h2>

            <p className="heroText">
              I design and build scalable backend platforms, secure enterprise systems,
              workflow-driven banking solutions, and production-ready microservices using
              Java, Spring Boot, Kafka, Redis, Cloud, DevOps, and AI-enabled engineering.
            </p>

            <p className="heroSubText">
              Strong in system design, API architecture, distributed systems, authentication
              platforms, performance optimization, testing, and reliable production delivery.
            </p>

            <div className="actions">
              <a className="primaryBtn" href={resumeFile} download="Vineet_Tiwari_Senior_Backend_Engineer.pdf">
                ⬇ Download Resume
              </a>
              <a href="https://github.com/vineet21tiwari" target="_blank" rel="noreferrer">🐙 GitHub</a>
              <a href="https://www.linkedin.com/in/vineet-tiwari-0b4134116/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
              <a href={`mailto:${email}`}>📧 Email Me</a>
            </div>
          </div>

          <div className="heroPanel">
            <p className="panelLabel">Senior Engineering Value</p>
            <h3>I help teams ship reliable backend systems.</h3>

            <div className="impactGrid">
              <div><b>Architecture Ownership</b><span>Service design, APIs, workflows, scalability.</span></div>
              <div><b>Production Engineering</b><span>Performance, security, testing, maintainability.</span></div>
              <div><b>Distributed Systems</b><span>Kafka, Redis, microservices, caching, idempotency.</span></div>
              <div><b>AI-Ready Backend</b><span>RAG, LLMs, embeddings, vector search platforms.</span></div>
            </div>
          </div>
        </div>
      </section>

    <section id="skills" className="section skillsSection">
      <div className="sectionHeader">
        <p>ENGINEERING STACK</p>
        <span>Production backend, distributed systems, security, cloud, testing, AI, and architecture.</span>
      </div>

      <div className="skillMatrix">
        <div className="skillRow">
          <h3>Backend</h3>
          <div>
            <span>Java</span><span>TypeScript</span><span>JavaScript</span><span>Spring Boot</span><span>Microservices</span><span>REST APIs</span>
            <span>Spring Data JPA</span><span>Spring Security</span><span>Concurrency</span><span>Design Patterns</span>
          </div>
        </div>

        <div className="skillRow">
          <h3>Distributed Systems</h3>
          <div>
            <span>Kafka</span><span>Redis</span><span>Event-driven Architecture</span><span>API Gateway</span>
            <span>Rate Limiting</span><span>Idempotency</span><span>Caching</span>
          </div>
        </div>

        <div className="skillRow">
          <h3>Cloud & DevOps</h3>
          <div>
            <span>AWS EC2</span><span>S3</span><span>Lambda</span><span>Kinesis</span><span>CloudWatch</span>
            <span>Docker</span><span>Kubernetes</span><span>OpenShift</span><span>ArgoCD</span><span>Jenkins</span><span>GitHub Actions</span>
          </div>
        </div>

        <div className="skillRow">
          <h3>Security & Testing</h3>
          <div>
            <span>OAuth2</span><span>JWT</span><span>SAML</span><span>OIDC</span><span>SSO</span>
            <span>JUnit</span><span>Mockito</span><span>Pytest</span><span>Playwright</span>
          </div>
        </div>

        <div className="skillRow">
          <h3>AI, Data & Architecture</h3>
          <div>
            <span>RAG</span><span>LLM Integration</span><span>Embeddings</span><span>Vector DB</span>
            <span>Prompt Engineering</span><span>PostgreSQL</span><span>MySQL</span><span>System Design</span><span>High Availability</span><span>DSA</span>
          </div>
        </div>
      </div>
    </section>

      <section id="experience" className="section experienceSection">
        <div className="sectionHeader">
          <p>PROFESSIONAL JOURNEY</p>
          {/* <h2>Career Timeline Across Banking, Auth Platforms & Scalable APIs</h2> */}
          <span>Progressive backend engineering experience across enterprise products, secure platforms, APIs, and production systems.</span>
        </div>

        <div className="premiumTimeline">
          <div className="experienceCard premium">
            <div className="yearBadge">2026</div>
            <div className="roleTop">
              <h3>Senior Backend Engineer</h3>
              <span>Backbase • Jan 2026 – Present</span>
            </div>
            <ul>
              <li>Built Camunda BPMN workflows using Java Delegate handlers.</li>
              <li>Developed Spring Boot logic for banking microservices.</li>
              <li>Contributed to code reviews and maintainable delivery.</li>
            </ul>
          </div>

          <div className="experienceCard premium">
            <div className="yearBadge">2023</div>
            <div className="roleTop">
              <h3>Software Engineer</h3>
              <br></br>
              <span>Infor • Dec 2023 – Jan 2026</span>
            </div>
            <ul>
              <li>Worked on STS authentication and token services.</li>
              <li>Implemented OAuth2, SAML, OIDC-based SSO.</li>
              <li>Handled multi-tenant tokens, sessions, and SLO.</li>
            </ul>
          </div>

          <div className="experienceCard premium">
            <div className="yearBadge">2021</div>
            <div className="roleTop">
              <h3>Associate Software Engineer</h3>
              <span>Innominds • Jul 2021 – Nov 2023</span>
            </div>
            <ul>
              <li>Developed 15+ REST APIs using Java & Spring Boot.</li>
              <li>Improved API performance by ~40%.</li>
              <li>Standardized ML data workflows, reducing errors by 25%.</li>
            </ul>
          </div>

          <div className="experienceCard premium">
            <div className="yearBadge">2017</div>
            <div className="roleTop">
              <h3>Software Engineer</h3>
              <br></br>
              <span>MyKingdom • Aug 2017 – Jan 2019</span>
            </div>
            <ul>
              <li>Built backend features for the Pricewar project.</li>
              <li>Delivered stable and maintainable application features.</li>
              <li>Built foundation in backend engineering practices.</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <div className="sectionHeader">
          <p>SELECTED WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projectGrid">
          <div className="projectCard">
            <p className="projectType">AI / RAG PLATFORM</p>
            <h3>DevMind AI</h3>
            <p>Enterprise knowledge assistant using RAG, embeddings, vector search, LLMs, Redis, and Kafka.</p>
            <ul>
              <li>Document ingestion, chunking, embeddings, vector search</li>
              <li>LLM Q&A, summary, code review, and test generation</li>
              <li>Redis caching and Kafka async processing</li>
            </ul>
            <a href="https://github.com/vineet21tiwari/developer-ai-assistant" target="_blank" rel="noreferrer">View GitHub →</a>
          </div>

          <div className="projectCard">
            <p className="projectType">MICROSERVICES</p>
            <h3>Trade Allocation Microservices</h3>
            <p>Production-style financial backend system for trades, allocations, audit logs, and event-driven communication.</p>
            <ul>
              <li>Spring Boot microservices with Kafka and Redis</li>
              <li>Idempotency, rate limiting, distributed locking</li>
              <li>JWT security, audit logs, scalable architecture</li>
            </ul>
            <a href="https://github.com/vineet21tiwari/trade-allocation-microservices" target="_blank" rel="noreferrer">View GitHub →</a>
          </div>

          <div className="projectCard">
            <p className="projectType">WORKFLOW SYSTEM</p>
            <h3>Workforce Orchestration System</h3>
            <p>
              Backend system for employee scheduling, slot booking, location-based work validation, and automated pay calculation.
            </p>
            <ul>
                <li>Designed state-driven workflow engine with idempotent APIs and concurrency-safe slot allocation</li>
                <li>Implemented location-aware execution tracking with event-driven lifecycle and rule-based pay computation</li>
            </ul>
            <a href="https://github.com/vineet21tiwari/workflow-orchestration-system" target="_blank" rel="noreferrer">
              View GitHub →
            </a>
          </div>

          <div className="projectCard">
            <p className="projectType">TESTING FRAMEWORK</p>
            <h3>Playwright Automation Framework</h3>
            <p>Built scalable UI and API automation framework using Playwright, TypeScript, and Node.js.</p>
            <ul>
              <li>UI & API automation testing</li>
              <li>Reusable POM structure</li>
              <li>CI/CD integrated execution</li>
            </ul>
            <a href="https://github.com/vineet21tiwari/playwright-e2e-framework" target="_blank" rel="noreferrer">View GitHub →</a>
          </div>
        </div>
      </section>

      <section className="recruiterNote">
        <h2>Why Recruiters Should Notice</h2>
        <p>
          I bring enterprise backend experience, authentication platform depth, distributed systems thinking,
          AI/RAG exposure, testing mindset, and deployment awareness. I can contribute not only by writing APIs,
          but by designing systems that are secure, scalable, observable, and maintainable.
        </p>
      </section>

      <section id="education" className="section educationSection">
        <div className="sectionHeader">
          <p>EDUCATION</p>
          <h2>Academic Foundation</h2>
        </div>

        <div className="educationGrid">
          <div className="eduCard">
            <img src="/BITS_Pilani.png" alt="BITS Pilani" />
            <div><h3>M.E.</h3><p>Birla Institute of Technology and Science, Pilani</p><span>CGPA: 8.28</span></div>
          </div>

          <div className="eduCard">
            <img src="/jec.jpg" alt="Jabalpur Engineering College" />
            <div><h3>B.E.</h3><p>Jabalpur Engineering College</p><span>CGPA: 7</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s build scalable, reliable backend systems.</h2>
        <p>
          Open to senior software engineering opportunities across India and global markets, including remote roles.
          I bring backend ownership, distributed systems thinking, secure API design, testing discipline, and AI-enabled engineering capability.
        </p>

        <div className="contactTags">
          <span>Backend Architecture</span><span>Microservices</span><span>Kafka / Redis</span><span>AI / RAG</span><span>Security</span><span>Testing</span>
        </div>

        <div className="actions">
          <a href={`mailto:${email}`}>📧 Email Me : Vineetjeccs@gmail.com</a>
          <a className="primaryBtn" href={resumeFile} download="Vineet_Tiwari_Senior_Backend_Engineer.pdf">⬇ Download Resume</a>
        </div>
      </section>
      <br></br>
    </div>
    
  );
}

export default App;