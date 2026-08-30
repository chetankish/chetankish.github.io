"use client";

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const modules = [
  ["DATA", "Data Analytics with R", "Data Analysis and Programming"],
  ["INFERENCE", "Statistical Inference for Data Science", "Estimation and Inference"],
  ["MACHINE LEARNING", "Machine Learning and Applications", "Predictive Modelling"],
  ["PROBABILITY", "Probability Theory and Application", "Probability Modelling"],
  ["ECONOMETRICS", "Intermediate Econometrics", "Regression and Causal Methods"],
  ["STATISTICS", "Introduction to Statistical Theory", "Statistical Foundations"],
];

const certificates = [
  {
    date: "AUG 2026",
    title: "Joining Data in SQL",
    issuer: "DataCamp",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/febd33049b60ebb353c2204a6a31392b3c5da17e?raw=1",
  },
  {
    date: "AUG 2026",
    title: "Intermediate SQL",
    issuer: "DataCamp",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/102395fc951b4beb3038f940a1ede75e0e2b6127?raw=1",
  },
  {
    date: "AUG 2026",
    title: "Introduction to SQL",
    issuer: "DataCamp",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/3daa063d033eaf131c8c7ecfaa3e1693ba4b95a7?raw=1",
  },
  {
    date: "AUG 2026",
    title: "Introduction to Power BI",
    issuer: "DataCamp",
    href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8a3ca41e4d2474f2aceb5228ac8a87ea637bb56a",
  },
  {
    date: "AUG 2026",
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/11886c699aadeb728a5f2c0becf4c7f6d812b3292591c69924c0d827275efc63/?trk=share_certificate",
  },
  {
    date: "MAY 2026",
    title: "Excel and ChatGPT: Data Analysis Power Tips",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/learning/certificates/dc1f9ef1a9904e611667489bd78a276806e4f91191e0567e43561900498d8821/",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
            <a href="#projects">Projects</a>
            <a href="#school">School</a>
            <a href="#certificates">Certs</a>
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
              I&apos;m an undergraduate at Singapore Management University studying Economics and Data Science &amp; Analytics, with an expected graduation in April 2028.
            </p>
            <p>
              My experience in finance and operations showed me how much I enjoy analysing data, uncovering patterns and drawing meaningful conclusions from it. I&apos;m now building on that foundation through statistics, econometrics and hands-on analytics projects as I work towards becoming a data analyst who can turn complex datasets into clear, practical insights.
            </p>
            <p>
              This site is a record of that learning: what I have built, what I have studied and the tools I am becoming more confident with.
            </p>
          </div>

          <aside className="profilePanel" aria-label="Profile links and skills">
            <div>
              <p className="miniLabel">FIND ME</p>
              <a href="https://www.linkedin.com/in/chetan-kishnani/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://github.com/chetankish" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
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
        <div className="sectionLabel">02 — PROJECTS</div>
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
        <div className="sectionLabel">03 — SCHOOL</div>
        <div className="schoolIntro">
          <div>
            <p className="miniLabel">SINGAPORE MANAGEMENT UNIVERSITY</p>
            <h2>BSc (Economics)</h2>
          </div>
          <div>
            <p>Economics and Data Science &amp; Analytics</p>
            <p>Expected graduation / April 2028</p>
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
        <div className="sectionLabel">04 — CERTIFICATIONS (DATA RELATED)</div>
        <div className="certificateList">
          {certificates.map((cert) => (
            <a key={cert.title} href={cert.href} target="_blank" rel="noreferrer">
              <span>{cert.date}</span>
              <strong>{cert.title}</strong>
              <span>{cert.issuer}</span>
              <Arrow />
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
