"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.2 7.9H1.6V19h3.6V7.9ZM3.4 2.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM11 7.9H7.5V19H11v-5.5c0-1.4.3-2.8 2.1-2.8 1.8 0 1.8 1.7 1.8 2.9V19h3.6v-6.1c0-3-0.7-5.3-4.2-5.3-1.7 0-2.8.9-3.3 1.8V7.9Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z" />
  </svg>
);

const modules = [
  ["DATA", "Data Analytics with R", "Data Analysis and Programming"],
  ["INFERENCE", "Statistical Inference for Data Science", "Estimation and Inference"],
  ["MACHINE LEARNING", "Machine Learning and Applications", "Predictive Modelling"],
  ["PROBABILITY", "Probability Theory and Application", "Probability Modelling"],
  ["ECONOMETRICS", "Intermediate Econometrics", "Regression and Causal Methods"],
  ["STATISTICS", "Introduction to Statistical Theory", "Statistical Foundations"],
];

const sqlTrackCourses = [
  {
    title: "Introduction to SQL",
  },
  {
    title: "Intermediate SQL",
  },
  {
    title: "Joining Data in SQL",
  },
  {
    title: "Data Manipulation in SQL",
  },
  {
    title: "PostgreSQL Summary Stats and Window Functions",
  },
  {
    title: "Functions for Manipulating Data in PostgreSQL",
  },
  {
    title: "Introduction to Statistics",
  },
  {
    title: "Exploratory Data Analysis in SQL",
  },
  {
    title: "Data-Driven Decision Making in SQL",
  },
  {
    title: "Understanding Data Visualization",
  },
  {
    title: "Data Communication Concepts",
  },
];

const certificates = [
  {
    type: "COURSE",
    date: "AUG 2026",
    title: "Introduction to Power BI",
    issuer: "DataCamp",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8a3ca41e4d2474f2aceb5228ac8a87ea637bb56a",
  },
  {
    type: "COURSE",
    date: "AUG 2026",
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/11886c699aadeb728a5f2c0becf4c7f6d812b3292591c69924c0d827275efc63/?trk=share_certificate",
  },
  {
    type: "COURSE",
    date: "MAY 2026",
    title: "Excel and ChatGPT: Data Analysis Power Tips",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/dc1f9ef1a9904e611667489bd78a276806e4f91191e0567e43561900498d8821/",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [certificationOpen, setCertificationOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <main id="top">
      <header className="siteHeader">
        <a className="siteName" href="#top">CHETAN KISHNANI / DATA PORTFOLIO</a>
        <div className="headerActions">
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#certificates">Certs</a>
            <a href="#projects">Projects</a>
            <a href="#school">School</a>
          </nav>
          <button
            className="themeToggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
          >
            <span className="themeTrack" aria-hidden="true">
              <span className="themeOption themeSun">☀</span>
              <span className="themeOption themeMoon">☾</span>
              <span className="themeKnob">{theme === "dark" ? "☾" : "☀"}</span>
            </span>
          </button>
        </div>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <p className="prompt">chetan@portfolio:~$ whoami</p>
      </section>

      <section className="notebookSection about" id="about">
        <div className="sectionLabel">01 — ABOUT ME</div>
        <div className="aboutGrid">
          <div className="aboutCopy">
            <h2>Hello, I&apos;m Chetan.</h2>
            <p>
              I am an undergraduate at Singapore Management University pursuing a BSc (Economics) with a second major in Data Science and Analytics, and I expect to graduate in April 2028.
            </p>
            <p>
              My experience in finance and operations sparked my interest in using data to understand problems and support better decisions. I have since developed practical skills in SQL, Excel, R and Python through university coursework, professional certification and hands-on projects involving data cleaning, exploratory analysis, statistical analysis, regression and forecasting. I am also expanding my knowledge of artificial intelligence through further training and applied learning.
            </p>
            <p>
              This portfolio showcases the projects I have built, the insights I have uncovered and the technical skills I continue to strengthen as I pursue a career in data analytics.
            </p>
          </div>

          <aside className="profilePanel" aria-label="Profile links and skills">
            <div className="findMePanel">
              <p className="miniLabel">FIND ME</p>
              <p className="findMeIntro">Connect with me or explore the work behind this portfolio.</p>
              <div className="socialLinks">
                <a className="socialCard socialCardLinkedIn" href="https://www.linkedin.com/in/chetan-kishnani/" target="_blank" rel="noreferrer">
                  <span className="socialIcon"><LinkedInIcon /></span>
                  <span><strong>LinkedIn</strong><small>Professional profile</small></span>
                  <Arrow />
                </a>
                <a className="socialCard socialCardGitHub" href="https://github.com/chetankish" target="_blank" rel="noreferrer">
                  <span className="socialIcon"><GitHubIcon /></span>
                  <span><strong>GitHub</strong><small>Code and repositories</small></span>
                  <Arrow />
                </a>
              </div>
            </div>
            <div>
              <p className="miniLabel">TOOLS</p>
              <p>SQL / Excel / R / Python</p>
            </div>
            <div>
              <p className="miniLabel">METHODS</p>
              <p>Data Cleaning / Exploratory Data Analysis / Data Visualisation / Statistical Analysis / Regression Analysis / Forecasting / Model Evaluation</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="notebookSection" id="projects">
        <div className="sectionLabel">03 — PROJECTS</div>
        <div className="projectHeader">
          <div>
            <p className="miniLabel">FEATURED CASE STUDY / INDIVIDUAL PROJECT</p>
            <h2>Singapore HDB Resale Price Drivers &amp; 2031 Forecast</h2>
          </div>
          <span className="projectNumber">001</span>
        </div>

        <div className="projectSummary">
          <p>
            I examined 977,756 HDB resale transactions from January 1990 to May 2026 to understand the factors associated with resale prices and build a scenario-based forecast towards 2031.
          </p>
          <dl className="projectFacts">
            <div><dt>DATA</dt><dd>977,756 transactions</dd></div>
            <div><dt>PERIOD</dt><dd>Jan 1990 — May 2026</dd></div>
            <div><dt>TOOLS</dt><dd>SQL / Excel</dd></div>
            <div><dt>WORK</dt><dd>Cleaning / EDA / regression / forecasting</dd></div>
          </dl>
        </div>

        <div className="processLine" aria-label="Project process">
          <span>01 FRAME</span><i>→</i><span>02 CLEAN</span><i>→</i><span>03 EXPLORE</span><i>→</i><span>04 MODEL</span><i>→</i><span>05 EVALUATE</span>
        </div>

        <div className="projectNotes">
          <div>
            <h3>Question</h3>
            <p>Which characteristics and market conditions best explain differences in HDB resale prices, and what might a transparent forecast to 2031 look like?</p>
          </div>
          <div>
            <h3>Approach</h3>
            <p>I built a structured SQL workflow, prepared and visualised the data in Excel, compared regression approaches and tested forecast performance through backtesting.</p>
          </div>
          <div>
            <h3>Output</h3>
            <p>The final report connects the data workflow, market context, modelling choices and evaluation results in one interactive explanation for technical and non-technical readers.</p>
          </div>
        </div>

        <a className="projectCta" href="https://chetankish.github.io/singapore-hdb-resale-price-drivers-2031-forecast/" target="_blank" rel="noreferrer">
          OPEN THE INTERACTIVE REPORT <Arrow />
        </a>
      </section>

      <section className="notebookSection school" id="school">
        <div className="sectionLabel">04 — EDUCATION</div>
        <div className="schoolIntro">
          <div>
            <p className="miniLabel">SINGAPORE MANAGEMENT UNIVERSITY</p>
            <h2>BSc (Economics)</h2>
            <p className="secondMajor">2nd Major in Data Science &amp; Analytics</p>
          </div>
          <div className="graduationBlock">
            <p className="graduationLabel">EXPECTED GRADUATION</p>
            <p className="graduationDate">April 2028</p>
          </div>
        </div>
        <p className="tableTitle">SELECTED DATA-RELATED MODULES</p>
        <div className="moduleTable">
          {modules.map(([code, title, focus]) => (
            <div className="moduleRow" key={title}>
              <span>{code}</span>
              <strong>{title}</strong>
              <p>{focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="notebookSection" id="certificates">
        <div className="sectionLabel">02 — COURSES &amp; CERTIFICATIONS</div>
        <details
          className="professionalCertification"
          open={certificationOpen}
          onToggle={(event) => setCertificationOpen(event.currentTarget.open)}
        >
          <summary className="certificationGroupTitle">
            <span className="certificationSummaryCopy">
              <small>DATACAMP PROFESSIONAL CREDENTIAL</small>
              <strong>Associate Data Analyst in SQL</strong>
              <span>1 CERTIFICATION · 1 CAREER TRACK · 11 COURSES</span>
            </span>
            <span className="certificationToggle" aria-hidden="true">
              {certificationOpen ? "CLOSE" : "EXPLORE"}
              <span>{certificationOpen ? "−" : "+"}</span>
            </span>
          </summary>
          <div className="certificationBody">
            <div className="credentialGrid">
              <a className="credentialCard credentialCardPrimary" href="/data-analyst-associate-certificate.pdf" target="_blank" rel="noreferrer">
                <span className="credentialMeta"><small>CERTIFICATION</small><span>SEP 2026</span></span>
                <strong>Data Analyst Associate</strong>
                <p>Data management, validation, exploratory analysis, statistics and data-driven decision-making.</p>
                <span className="credentialAction">VIEW CERTIFICATE <Arrow /></span>
              </a>
              <a className="credentialCard" href="https://www.datacamp.com/statement-of-accomplishment/track/573ead8928aa8acab876fdd12e21bfca48a3fafc?raw=1" target="_blank" rel="noreferrer">
                <span className="credentialMeta"><small>CAREER TRACK</small><span>SEP 2026</span></span>
                <strong>Associate Data Analyst in SQL</strong>
                <p>Completed an 11-course pathway covering SQL analysis, statistics, visualisation and communication.</p>
                <span className="credentialAction">VIEW CAREER TRACK <Arrow /></span>
              </a>
            </div>
            <div className="courseworkHeader">
              <span>COURSEWORK</span>
              <span>11 COURSES</span>
            </div>
            <ol className="trackCourses">
              {sqlTrackCourses.map((course, index) => (
                <li key={course.title}>
                  <span className="courseNumber">{String(index + 1).padStart(2, "0")}</span>
                  <span className="courseName">{course.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </details>
        <div className="certificateList">
          {certificates.map((cert) => (
            <a key={cert.title} href={cert.href} target="_blank" rel="noreferrer">
              <span className="certificateTitle">
                <small>{cert.issuer.toUpperCase()}</small>
                <strong>{cert.title}</strong>
                <span>{cert.type}</span>
              </span>
              <span className="certificateAction" aria-hidden="true">
                VIEW
                <span><Arrow /></span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>Built as a record of work in progress.</p>
        <p>Singapore / 2026</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
