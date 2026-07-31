const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6h16v12H4z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9v9M6 6v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
  </svg>
);

const FlowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="6" height="5" rx="1" />
    <rect x="15" y="15" width="6" height="5" rx="1" />
    <path d="M9 6.5h4a4 4 0 0 1 4 4V15M12 12l-2-2m2 2-2 2" />
  </svg>
);

const DataIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
);

const competencies = [
  {
    number: "01",
    title: "Softwareentwicklung",
    text: "C#, .NET, Java, Python, JavaScript, HTML, JSP und Git",
    icon: <CodeIcon />
  },
  {
    number: "02",
    title: "Workflows & Input Management",
    text: "NOVO CxP, Prozessmodellierung, Routing, Validierung und Fehleranalyse",
    icon: <FlowIcon />
  },
  {
    number: "03",
    title: "Daten & Reporting",
    text: "Oracle SQL, Oracle APEX, Datenmodellierung, Power BI und BI-Dashboards",
    icon: <DataIcon />
  },
  {
    number: "04",
    title: "Business & IT",
    text: "Anforderungsanalyse, Prozessoptimierung, Tests und Stakeholder-Kommunikation",
    icon: <CompassIcon />
  }
];

const experience = [
  {
    period: "04/2025 – heute",
    role: "Business Solution Developer",
    company: "Janitos Versicherung AG · Heidelberg",
    bullets: [
      "Entwicklung und Stabilisierung von Lösungen für Input Management, Dokumentenverarbeitung und Versicherungsprozesse.",
      "Workflow-Modellierung in NOVO CxP sowie kundenspezifische Module mit C#/.NET, XML, JSON und Oracle.",
      "Release-, Test- und Betriebsunterstützung in enger Abstimmung mit Fachbereichen und IT-Teams."
    ]
  },
  {
    period: "09/2023 – 03/2025",
    role: "Werkstudent Digitalisierung",
    company: "EnBW-GNR · Philippsburg",
    bullets: [
      "Digitalisierung von Geschäftsprozessen und Einführung neuer IT-Lösungen.",
      "Low-Code-/No-Code-Anwendungen, BI-Dashboards und fachliche Anforderungsanalyse."
    ]
  },
  {
    period: "03/2022 – 08/2023",
    role: "Tutor für Programmierung",
    company: "Hochschule für Wirtschaft und Gesellschaft Ludwigshafen",
    bullets: [
      "Begleitung von Studierenden in objektorientierter Programmierung mit Java.",
      "Unterstützung bei Webanwendungen mit Java, JavaScript, HTML und JSP."
    ]
  },
  {
    period: "04/2021 – 08/2022",
    role: "Werkstudent Telemedizinprojekt",
    company: "Universitätsklinikum Heidelberg · Institut für Rechtsmedizin",
    bullets: [
      "Mitarbeit im Regierungsprojekt ARMED zur digitalen Unterstützung medizinischer Versorgung.",
      "Unterstützung bei AR-gestützter Dokumentation und digitalen Projektprozessen."
    ]
  }
];

const focusAreas = [
  {
    label: "Versicherung & Dokumente",
    title: "Prozesse stabilisieren, bevor sie zum Engpass werden",
    text: "Von Routing und Validierung bis Export und Monitoring: Ich verbinde Workflow-Logik, Schnittstellen und Fehleranalyse zu robusten digitalen Prozessketten.",
    tags: ["NOVO CxP", "C#/.NET", "XML & JSON", "Oracle"]
  },
  {
    label: "Low-Code & Analytics",
    title: "Fachliche Anforderungen schnell nutzbar machen",
    text: "Ich übersetze operative Bedürfnisse in schlanke Anwendungen, Auswertungen und Automatisierungen – mit Blick auf Akzeptanz, Wartbarkeit und echten Nutzen.",
    tags: ["Power Apps", "Power Automate", "Power BI", "SharePoint"]
  },
  {
    label: "Zusammenarbeit",
    title: "Technik so kommunizieren, dass Teams handeln können",
    text: "Durch Erfahrung in Entwicklung, Lehre und Projekten bewege ich mich sicher zwischen Fachbereich, Betrieb, Dienstleistern und Softwareentwicklung.",
    tags: ["Requirements", "Testing", "Dokumentation", "Stakeholder"]
  }
];

export default function Portfolio() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zur Startseite">
          <span className="brand-mark">FT</span>
          <span className="brand-name">Frank Tsidie</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#profil">Profil</a>
          <a href="#kompetenzen">Kompetenzen</a>
          <a href="#erfahrung">Erfahrung</a>
        </nav>
        <a className="header-cta" href="mailto:franktsidie@gmail.com">
          Kontakt <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Offen für passende neue Herausforderungen
          </div>
          <p className="eyebrow">Business Solution Developer · Rhein-Neckar</p>
          <h1>
            Komplexe Prozesse.
            <br />
            <em>Klare digitale Lösungen.</em>
          </h1>
          <p className="hero-lead">
            Ich verbinde Softwareentwicklung, Prozessverständnis und Daten, um
            Fachanwendungen und Workflows zuverlässig in den Betrieb zu bringen.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:franktsidie@gmail.com">
              Gespräch starten <ArrowUpRight />
            </a>
            <a className="button button-secondary" href="#erfahrung">
              Werdegang ansehen
            </a>
          </div>
          <div className="hero-proof" aria-label="Kurzfakten">
            <div>
              <strong>Seit 2020</strong>
              <span>in IT & Digitalisierung</span>
            </div>
            <div>
              <strong>M.Sc.</strong>
              <span>Wirtschaftsinformatik</span>
            </div>
            <div>
              <strong>3 Sprachen</strong>
              <span>DE · EN · FR</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-node node-a">
            <span>01</span>
            INPUT
          </div>
          <div className="visual-node node-b">
            <span>02</span>
            LOGIK
          </div>
          <div className="visual-node node-c">
            <span>03</span>
            OUTPUT
          </div>
          <div className="visual-core">
            <span>BUSINESS</span>
            <strong>+</strong>
            <span>TECH</span>
          </div>
          <div className="visual-caption">WORKFLOW · AUTOMATION · DATA</div>
        </div>
      </section>

      <section className="profile section" id="profil">
        <div className="section-label">
          <span>01</span>
          Profil
        </div>
        <div className="profile-content">
          <h2>
            Technik ist dann wertvoll, wenn sie{" "}
            <em>Menschen und Prozesse wirklich weiterbringt.</em>
          </h2>
          <div className="profile-copy">
            <p>
              Als Business Solution Developer arbeite ich an der Schnittstelle
              von Fachbereich und IT. Mein Schwerpunkt liegt auf
              dokumentenbasierten Workflows, Prozessautomatisierung,
              datenbankgestützten Fachanwendungen und strukturierter
              Fehleranalyse.
            </p>
            <p>
              Dabei denke ich nicht nur in Code, sondern in stabilen Abläufen:
              Anforderungen verstehen, Lösungen pragmatisch umsetzen,
              Schnittstellen sauber gestalten und den Betrieb verlässlich
              unterstützen.
            </p>
          </div>
        </div>
      </section>

      <section className="skills section" id="kompetenzen">
        <div className="section-label light">
          <span>02</span>
          Kompetenzprofil
        </div>
        <div className="section-heading light-heading">
          <p className="kicker">Werkzeugkasten</p>
          <h2>Breit genug für das Ganze. Tief genug für die Umsetzung.</h2>
        </div>
        <div className="skill-grid">
          {competencies.map((item) => (
            <article className="skill-card" key={item.title}>
              <div className="skill-card-top">
                <span className="skill-icon">{item.icon}</span>
                <span className="skill-number">{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="tech-line" aria-label="Weitere Technologien">
          <span>Weitere Praxis:</span>
          <p>WordPress · HTML/CSS · MS Office · Git · Python · Java</p>
        </div>
      </section>

      <section className="focus section">
        <div className="section-label">
          <span>03</span>
          Was ich einbringe
        </div>
        <div className="section-heading">
          <p className="kicker">Ausgewählte Arbeitsfelder</p>
          <h2>Vom Problemverständnis bis zur tragfähigen Lösung.</h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area, index) => (
            <article className="focus-card" key={area.title}>
              <div className="focus-index">0{index + 1}</div>
              <div className="focus-main">
                <p className="focus-label">{area.label}</p>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
              <div className="tag-list">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="erfahrung">
        <div className="section-label">
          <span>04</span>
          Erfahrung
        </div>
        <div className="experience-layout">
          <div className="experience-intro">
            <p className="kicker">Werdegang</p>
            <h2>Praxis zwischen Entwicklung, Digitalisierung und Wissenstransfer.</h2>
            <p>
              Stationen in Versicherung, Energie, Hochschule und Telemedizin
              haben meinen Blick für unterschiedliche Fachwelten geschärft.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker" />
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education section">
        <div className="section-label light">
          <span>05</span>
          Ausbildung & Sprachen
        </div>
        <div className="education-grid">
          <div className="education-copy">
            <p className="kicker">Fundament</p>
            <h2>Wirtschaft, Technologie und Daten zusammen denken.</h2>
          </div>
          <div className="degree-list">
            <article>
              <span>2022 – 2025</span>
              <h3>Master of Science · Wirtschaftsinformatik</h3>
              <p>Data Science & Consulting · Hochschule Ludwigshafen</p>
              <strong>Abschluss mit sehr gutem Erfolg</strong>
            </article>
            <article>
              <span>2019 – 2022</span>
              <h3>Bachelor of Science · Wirtschaftsinformatik</h3>
              <p>Hochschule Ludwigshafen</p>
              <strong>Abschluss mit gutem Erfolg</strong>
            </article>
          </div>
          <div className="languages">
            <div>
              <strong>Französisch</strong>
              <span>Muttersprache</span>
            </div>
            <div>
              <strong>Deutsch</strong>
              <span>Verhandlungssicher</span>
            </div>
            <div>
              <strong>Englisch</strong>
              <span>Fortgeschritten</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="contact-orbit" aria-hidden="true" />
        <p className="kicker">Lassen Sie uns sprechen</p>
        <h2>Sie suchen jemanden, der Fachlichkeit und Technik verbindet?</h2>
        <p className="contact-lead">
          Ich freue mich auf Rollen rund um Business Solutions,
          Prozessautomatisierung, Fachanwendungen und digitale Transformation.
        </p>
        <div className="contact-actions">
          <a className="contact-link" href="mailto:franktsidie@gmail.com">
            <span className="contact-icon">
              <MailIcon />
            </span>
            <span>
              <small>E-Mail</small>
              franktsidie@gmail.com
            </span>
            <ArrowUpRight />
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/frank-thierry-tsidie-b366b01a9/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <LinkedInIcon />
            </span>
            <span>
              <small>LinkedIn</small>
              Profil ansehen
            </span>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <footer>
        <div>
          <span className="brand-mark footer-mark">FT</span>
          <p>Frank Thierry Tsidie Kengni</p>
        </div>
        <p>Business Solution Developer · Rhein-Neckar</p>
        <p>© 2026 · Kein Tracking, keine Cookies.</p>
      </footer>
    </main>
  );
}
