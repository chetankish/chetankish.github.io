const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">CK<span>.</span>DATA</a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#modules">SMU Modules</a>
          <a href="#certificates">Certificates</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Data portfolio · Singapore</div>
        <h1>Chetan<br /><em>Kishnani</em></h1>
        <div className="heroBottom">
          <p>Economics × Data Science &amp; Analytics</p>
          <p className="heroCopy">A focused collection of analytical projects, university modules and certifications—built around evidence, clarity and useful decisions.</p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHead">
          <p>01 / Selected work</p>
          <h2>Projects</h2>
        </div>
        <article className="featureCard">
          <div className="projectIndex">01</div>
          <div className="projectMain">
            <p className="label">Flagship project · SQL · Forecasting</p>
            <h3>Singapore HDB Resale Price Drivers &amp; 2031 Forecast</h3>
            <p>Analysed 977,756 resale transactions from 1990 to May 2026, built a reproducible SQL workflow and compared regression approaches to understand market drivers and forecast a scenario-based 2031 price range.</p>
            <div className="tags">
              <span>SQL</span><span>Data cleaning</span><span>Feature engineering</span><span>Regression</span><span>Backtesting</span>
            </div>
          </div>
          <a className="projectLink" href="https://chetankish.github.io/singapore-hdb-resale-price-drivers-2031-forecast/" target="_blank" rel="noreferrer">
            View interactive report <Arrow />
          </a>
        </article>
      </section>

      <section className="learningSection" id="modules">
        <div className="sectionHead darkHead">
          <p>02 / Coursework</p>
          <h2>SMU Modules</h2>
        </div>
        <div className="moduleGrid">
          {[
            ["01", "Introduction to Statistical Theory", "Statistical foundations"],
            ["02", "Data Analytics with R", "Data analysis & programming"],
            ["03", "Statistical Inference for Data Science", "Estimation & inference"],
            ["04", "Probability Theory and Application", "Probability modelling"],
            ["05", "Intermediate Econometrics", "Causal & regression methods"],
          ].map(([number, title, focus]) => (
            <article className="moduleCard" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="certificateSection" id="certificates">
        <div className="sectionHead">
          <p>03 / Continuous learning</p>
          <h2>Certificates</h2>
        </div>
        <div className="certificateList">
          <a href="https://www.linkedin.com/learning/certificates/11886c699aadeb728a5f2c0becf4c7f6d812b3292591c69924c0d827275efc63/?trk=share_certificate" target="_blank" rel="noreferrer">
            <span className="certDate">Aug 2026</span><strong>Learning Data Analytics: 1 Foundations</strong><span className="issuer">LinkedIn Learning</span><Arrow />
          </a>
          <a href="https://www.linkedin.com/learning/certificates/dc1f9ef1a9904e611667489bd78a276806e4f91191e0567e43561900498d8821/" target="_blank" rel="noreferrer">
            <span className="certDate">May 2026</span><strong>Excel and ChatGPT: Data Analysis Power Tips</strong><span className="issuer">LinkedIn Learning</span><Arrow />
          </a>
          <a href="https://www.linkedin.com/learning/certificates/1463d593e213d2dc0e8d6d6cb3e36479a8826848c179875b4257655838e040d7/" target="_blank" rel="noreferrer">
            <span className="certDate">May 2026</span><strong>Algorithmic Trading and Stocks Essential Training</strong><span className="issuer">LinkedIn Learning</span><Arrow />
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">CK<span>.</span>DATA</a>
        <p>Data projects, learning and applied analysis.</p>
        <div>
          <a href="https://www.linkedin.com/in/chetan-kishnani/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/chetankish" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </footer>
    </main>
  );
}
