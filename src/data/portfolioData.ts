import { PersonalInfo, ExperienceItem, EducationItem, ProjectItem, SkillCategory, SocialLinks } from '../types/portfolio';

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION - PABLO VILLANUEVA
 * ============================================================================
 * 
 * Edit this file to update any content on your personal website:
 * - Personal information, titles, and social links
 * - Professional experience and education
 * - Projects, technologies, and repositories
 * - Technical skills and categories
 * 
 * All text supports both English ('en') and Spanish ('es').
 */

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/villanuevapablo',
  linkedin: 'https://www.linkedin.com/in/pablovillanuevapicazo/',
  // [PLACEHOLDER]: Replace with your official professional email
  email: 'pablo.villanueva.dev@example.com',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Pablo Villanueva',
  initials: 'PV',
  title: {
    en: 'Software Engineer | Full Stack Developer | AI & Data Enthusiast',
    es: 'Ingeniero de Software | Desarrollador Full Stack | Entusiasta de IA y Datos',
  },
  heroHeading: {
    en: 'Building software.\nExploring intelligence.\nCreating impact.',
    es: 'Construyendo software.\nExplorando inteligencia.\nCreando impacto.',
  },
  heroSubheading: {
    en: 'Software Engineer passionate about building digital products and exploring the possibilities of Artificial Intelligence.',
    es: 'Ingeniero de Software apasionado por construir productos digitales y explorar el potencial de la Inteligencia Artificial.',
  },
  heroIntro: {
    en: 'Graduate with practical experience in full-stack architecture, RESTful services, and applied machine learning. Focused on clean engineering, measurable results, and continuous technical growth.',
    es: 'Graduado con experiencia práctica en arquitectura full-stack, servicios REST y machine learning aplicado. Enfocado en código limpio, resultados medibles y aprendizaje continuo.',
  },
  location: {
    en: 'Spain (Available for Remote / Hybrid / On-site roles)',
    es: 'España (Disponible para remoto / híbrido / presencial)',
  },
  statusBadge: {
    en: 'Open to software engineering & tech opportunities',
    es: 'Abierto a oportunidades de ingeniería y tecnología',
  },
  // [PLACEHOLDER]: Put your CV file in public/cv-pablo-villanueva.pdf when ready
  cvFilename: 'cv-pablo-villanueva.pdf',
  aboutText: {
    en: [
      "I'm a Software Engineering professional with a strong interest in building practical software solutions and exploring emerging technologies.",
      "My background combines application development, backend engineering, database management and an increasing interest in Artificial Intelligence and Machine Learning.",
      "I enjoy solving problems, learning new technologies and turning ideas into functional applications. I'm particularly interested in opportunities where I can contribute to real projects, collaborate with experienced teams and continue developing my technical skills."
    ],
    es: [
      "Soy un profesional en Ingeniería de Software con un gran interés en construir soluciones prácticas de software y explorar tecnologías emergentes.",
      "Mi trayectoria combina desarrollo de aplicaciones, ingeniería de backend, gestión de bases de datos y un creciente interés en Inteligencia Artificial y Machine Learning.",
      "Disfruto resolviendo problemas, aprendiendo nuevas tecnologías y transformando ideas en aplicaciones funcionales. Me interesan especialmente oportunidades donde pueda contribuir a proyectos reales, colaborar con equipos experimentados y continuar desarrollando mis habilidades técnicas."
    ]
  },
  quickHighlights: {
    en: [
      {
        label: 'Degree Focus',
        value: 'BSc (Hons) Software Eng.',
        description: 'York St John University'
      },
      {
        label: 'Practical Background',
        value: 'DAM Vocational + University',
        description: 'Multiplatform app development & enterprise foundation'
      },
      {
        label: 'Core Focus',
        value: 'Full Stack & AI/Data',
        description: 'Bridging robust web architecture with intelligent models'
      },
      {
        label: 'Languages',
        value: 'Spanish (Native) • English (Prof.)',
        description: 'Bilingual international engineering communication'
      }
    ],
    es: [
      {
        label: 'Enfoque Académico',
        value: 'BSc (Hons) Software Eng.',
        description: 'York St John University'
      },
      {
        label: 'Formación Práctica',
        value: 'DAM FP Superior + Grado',
        description: 'Desarrollo de aplicaciones multiplataforma y bases empresariales'
      },
      {
        label: 'Áreas de Interés',
        value: 'Full Stack & IA / Datos',
        description: 'Uniendo arquitecturas web robustas con modelos inteligentes'
      },
      {
        label: 'Idiomas',
        value: 'Español (Nativo) • Inglés (Prof.)',
        description: 'Comunicación técnica en entornos internacionales'
      }
    ]
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nebrija-technician',
    role: {
      en: 'Software Development Technician',
      es: 'Técnico de Desarrollo de Software',
    },
    company: 'Universidad Nebrija',
    period: {
      en: 'April 2025 – June 2025',
      es: 'Abril 2025 – Junio 2025',
    },
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    type: {
      en: 'Professional Experience',
      es: 'Experiencia Profesional',
    },
    summary: {
      en: 'Contributed to software development activities involving full-stack development, REST API creation, testing, debugging and database interaction.',
      es: 'Contribución en actividades de desarrollo de software que abarcaron desarrollo full-stack, creación de APIs REST, testing, depuración e interacción con bases de datos.',
    },
    responsibilities: {
      en: [
        'Full-stack software development and feature implementation.',
        'REST API development, integration, and endpoint structuring.',
        'Software testing, QA validation, and systematic debugging.',
        'Database interaction, query formulation, and application state persistence.'
      ],
      es: [
        'Desarrollo de software full-stack e implementación de funcionalidades.',
        'Desarrollo de APIs REST, integración y estructuración de endpoints.',
        'Testing de software, validación de calidad y depuración sistemática.',
        'Interacción con bases de datos, formulación de consultas y persistencia de datos.'
      ]
    },
    technologies: ['Full Stack', 'REST APIs', 'Software Testing', 'Debugging', 'Database Interaction', 'SQL']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'york-st-john',
    degree: {
      en: 'Software Engineering – BSc (Hons)',
      es: 'Grado en Ingeniería de Software – BSc (Hons)',
    },
    institution: 'York St John University',
    period: 'September 2025 – June 2026',
    location: {
      en: 'United Kingdom / York',
      es: 'Reino Unido / York',
    },
    level: {
      en: 'Undergraduate Degree',
      es: 'Grado Universitario',
    },
    description: {
      en: 'Focused on advanced software engineering principles, system architecture, research methodology, time-series forecasting, and machine learning pipelines.',
      es: 'Especialización en principios avanzados de ingeniería de software, arquitectura de sistemas, metodología de investigación y modelos de machine learning.',
    },
    highlights: {
      en: [
        'Advanced Software Architecture & Clean Design Patterns',
        'Academic Dissertation: Bitcoin price forecasting & sentiment analysis systems',
        'Rigorous methodology, validation techniques, and time-series cross-validation'
      ],
      es: [
        'Arquitectura avanzada de software y patrones de diseño limpios',
        'Disertación académica: Sistemas de predicción de precio de Bitcoin y análisis de sentimiento',
        'Metodología rigurosa, técnicas de validación y cross-validation temporal'
      ]
    },
    statusBadge: {
      en: 'Academic Programme',
      es: 'Programa Académico',
    }
  },
  {
    id: 'dam-spain',
    degree: {
      en: 'Higher Vocational Training in Multiplatform Application Development (DAM)',
      es: 'Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    },
    institution: 'Spain',
    period: 'Completed',
    location: {
      en: 'Spain',
      es: 'España',
    },
    level: {
      en: 'Higher Vocational Degree (EQF Level 5)',
      es: 'Formación Profesional de Grado Superior (Nivel 5 MECES/EQF)',
    },
    description: {
      en: 'Comprehensive technical grounding in cross-platform development, object-oriented programming (Java), relational databases, mobile engineering, and enterprise application lifecycle.',
      es: 'Sólida base técnica en desarrollo multiplataforma, programación orientada a objetos (Java), bases de datos relacionales, desarrollo móvil y ciclo de vida de aplicaciones empresariales.',
    },
    highlights: {
      en: [
        'Object-Oriented Programming (Java, Kotlin) & Data Structures',
        'Relational Database Modeling (MySQL, PostgreSQL, JDBC)',
        'Native Mobile & Multiplatform Development (Android Studio, Room)',
        'Enterprise Backend Services, Servlets, and RESTful architectures'
      ],
      es: [
        'Programación Orientada a Objetos (Java, Kotlin) y estructuras de datos',
        'Modelado de bases de datos relacionales (MySQL, PostgreSQL, JDBC)',
        'Desarrollo nativo y multiplataforma (Android Studio, Room)',
        'Servicios backend empresariales, Servlets y arquitecturas RESTful'
      ]
    },
    statusBadge: {
      en: 'Graduated',
      es: 'Completado',
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bitcoin-price-prediction',
    title: 'Bitcoin Price Prediction & Sentiment Analysis',
    category: 'ai-ml',
    categoryLabel: {
      en: 'AI & Machine Learning',
      es: 'IA y Machine Learning',
    },
    shortDescription: {
      en: 'An academic Machine Learning project focused on analysing Bitcoin market data and exploring how social media sentiment can contribute to cryptocurrency price prediction.',
      es: 'Proyecto académico de Machine Learning centrado en analizar datos de mercado de Bitcoin y explorar cómo el sentimiento de redes sociales puede contribuir a la predicción de precios.',
    },
    longDescription: {
      en: 'Academic research exploring price dynamics, technical indicators (SMA, rolling volatility, lags), and sentiment signals. Employs chronological time-series cross-validation to prevent lookahead bias and evaluate predictive utility.',
      es: 'Investigación académica que explora dinámicas de precios, indicadores técnicos (SMA, volatilidad móvil, retardos) y señales de sentimiento. Utiliza cross-validation temporal cronológica para evitar sesgo de anticipación.',
    },
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'NLP', 'Data Analysis', 'APIs'],
    visualType: 'btc-forecast',
    // [PLACEHOLDER]: Set actual repo URL once published or leave as null for modal preview
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: true,
    status: {
      en: 'Academic Research & ML Pipeline',
      es: 'Investigación Académica & Pipeline ML',
    },
    academicContext: {
      en: 'York St John University — Undergraduate Research',
      es: 'York St John University — Investigación Académica',
    },
    features: {
      en: [
        'Historical Bitcoin price ingestion & data preprocessing pipeline',
        'Technical indicators engineering (SMA 7/30, 14-day rolling volatility, lag returns)',
        'Predictive modeling comparisons using Linear Regression & Random Forest baselines',
        'Chronological time-series cross-validation to maintain temporal validity',
        'Visual sentiment analysis correlation framework (Placeholder for live sentiment data)'
      ],
      es: [
        'Pipeline de ingesta y preprocesamiento de datos históricos de Bitcoin',
        'Ingeniería de indicadores técnicos (SMA 7/30, volatilidad móvil 14d, retardos)',
        'Comparativa de modelos predictivos usando Regresión Lineal y Random Forest',
        'Validación cruzada temporal cronológica para garantizar rigurosidad',
        'Marco visual de correlación de análisis de sentimiento (Marcador para datos de sentimiento)'
      ]
    }
  },
  {
    id: 'full-stack-application',
    title: 'Full Stack Enterprise Application',
    category: 'fullstack',
    categoryLabel: {
      en: 'Full Stack Development',
      es: 'Desarrollo Full Stack',
    },
    shortDescription: {
      en: 'A full-stack application demonstrating software architecture, frontend development, backend functionality, database management and REST API integration.',
      es: 'Aplicación full-stack que demuestra arquitectura de software, desarrollo frontend, funcionalidad backend, gestión de bases de datos e integración de APIs REST.',
    },
    longDescription: {
      en: 'End-to-end multi-tier system built with a decoupled architecture. Features secure authentication, clean RESTful endpoints, relational data persistence, and a responsive client interface.',
      es: 'Sistema multicapa de extremo a extremo construido con arquitectura desacoplada. Incorpora autenticación segura, endpoints REST limpios, persistencia relacional e interfaz de cliente responsiva.',
    },
    technologies: ['JavaScript', 'Node.js', 'React', 'REST APIs', 'SQL', 'Clean Architecture'],
    visualType: 'fullstack-arch',
    // [PLACEHOLDER]: Set actual repo URL once published
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: true,
    status: {
      en: 'Architecture & Prototype',
      es: 'Arquitectura y Prototipo',
    },
    features: {
      en: [
        'Structured RESTful API endpoints with validation and error handling',
        'Relational schema design with normalized tables and relational constraints',
        'State management and dynamic UI rendering with React',
        'Component reusability and modular separation of concerns',
        'Comprehensive manual and automated testing routines'
      ],
      es: [
        'Endpoints de API REST estructurados con validación y manejo de errores',
        'Diseño de esquema relacional con tablas normalizadas y restricciones',
        'Gestión de estado y renderizado dinámico de interfaz con React',
        'Reutilización de componentes y separación modular de responsabilidades',
        'Rutinas de testing sistemático y aseguramiento de calidad'
      ]
    }
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Data Analytics & Insights Dashboard',
    category: 'data',
    categoryLabel: {
      en: 'Data Analytics',
      es: 'Analítica de Datos',
    },
    shortDescription: {
      en: 'A data analysis project focused on transforming raw data into useful insights through data processing, visualisation and reporting.',
      es: 'Proyecto de análisis de datos enfocado en transformar datos brutos en información útil mediante procesamiento de datos, visualización y generación de informes.',
    },
    longDescription: {
      en: 'Data-driven pipeline that automates cleaning, aggregations, trend exploration, and KPI visual summaries to facilitate clear technical and decision-making communication.',
      es: 'Pipeline analítico que automatiza la limpieza, agregación, exploración de tendencias y resúmenes visuales de KPIs para facilitar la toma de decisiones informadas.',
    },
    technologies: ['Python', 'Pandas', 'SQL', 'Power BI', 'Data Visualisation', 'NumPy'],
    visualType: 'data-analytics',
    // [PLACEHOLDER]: Set actual repo URL once published
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: true,
    status: {
      en: 'Data Pipeline & Dashboard',
      es: 'Pipeline de Datos y Dashboard',
    },
    features: {
      en: [
        'Automated ETL pipelines: data extraction, cleaning, and null handling with Pandas',
        'Complex SQL queries for dimensional aggregations and trend extraction',
        'Interactive KPI visualisations and summary metrics distribution',
        'Exportable analytical reports and descriptive statistical summaries'
      ],
      es: [
        'Pipelines ETL automatizados: extracción, limpieza y tratamiento de nulos con Pandas',
        'Consultas SQL complejas para agregaciones dimensionales y detección de tendencias',
        'Visualizaciones interactivas de KPIs y distribución de métricas clave',
        'Informes analíticos exportables y resúmenes estadísticos descriptivos'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: {
      en: 'Programming Languages',
      es: 'Lenguajes de Programación',
    },
    icon: 'Code2',
    skills: [
      { name: 'Java', levelHint: { en: 'Core OOP & Enterprise', es: 'POO & Entornos empresariales' }, featured: true },
      { name: 'Python', levelHint: { en: 'ML, Scripting & Data', es: 'ML, Scripting y Datos' }, featured: true },
      { name: 'JavaScript', levelHint: { en: 'Modern ES6+ & Full Stack', es: 'ES6+ moderno y Full Stack' }, featured: true },
      { name: 'Kotlin', levelHint: { en: 'Android & Modern JVM', es: 'Android y JVM moderna' } },
      { name: 'SQL', levelHint: { en: 'Relational Queries & Schemas', es: 'Consultas y esquemas relacionales' }, featured: true },
      { name: 'HTML5', levelHint: { en: 'Semantic Markup & A11y', es: 'Estructura semántica y accesibilidad' } },
      { name: 'CSS3', levelHint: { en: 'Responsive Layouts & Flex/Grid', es: 'Diseño responsivo y Flex/Grid' } },
    ]
  },
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      es: 'Desarrollo Frontend',
    },
    icon: 'Layout',
    skills: [
      { name: 'React', levelHint: { en: 'Components, Hooks & State', es: 'Componentes, Hooks y Estado' }, featured: true },
      { name: 'Tailwind CSS', levelHint: { en: 'Utility-first Modern UI', es: 'UI moderna utility-first' }, featured: true },
      { name: 'Svelte', levelHint: { en: 'Reactive UI Framework', es: 'Framework UI reactivo' } },
      { name: 'Jetpack Compose', levelHint: { en: 'Declarative Android UI', es: 'UI declarativa en Android' } },
    ]
  },
  {
    id: 'backend',
    title: {
      en: 'Backend & APIs',
      es: 'Backend y APIs',
    },
    icon: 'Server',
    skills: [
      { name: 'Node.js', levelHint: { en: 'Event-driven Runtime', es: 'Entorno de ejecución asíncrono' }, featured: true },
      { name: 'Express', levelHint: { en: 'Web APIs & Middleware', es: 'APIs web y middlewares' }, featured: true },
      { name: 'REST APIs', levelHint: { en: 'Design, Integration & CRUD', es: 'Diseño, integración y CRUD' }, featured: true },
      { name: 'Java Servlets', levelHint: { en: 'Java Enterprise Foundation', es: 'Bases de Java empresarial' } },
      { name: 'JDBC', levelHint: { en: 'Java Database Connectivity', es: 'Conectividad a bases de datos' } },
    ]
  },
  {
    id: 'databases',
    title: {
      en: 'Databases & Storage',
      es: 'Bases de Datos y Almacenamiento',
    },
    icon: 'Database',
    skills: [
      { name: 'MySQL', levelHint: { en: 'Relational DBMS', es: 'SGBD Relacional' }, featured: true },
      { name: 'PostgreSQL', levelHint: { en: 'Advanced Relational DBMS', es: 'SGBD Relacional avanzado' }, featured: true },
      { name: 'Firebase', levelHint: { en: 'Cloud NoSQL & Auth', es: 'NoSQL en la nube y Auth' } },
      { name: 'Room', levelHint: { en: 'Android SQLite ORM', es: 'ORM SQLite para Android' } },
    ]
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & Workflow',
      es: 'Herramientas y Flujo de Trabajo',
    },
    icon: 'Wrench',
    skills: [
      { name: 'Git', levelHint: { en: 'Version Control', es: 'Control de versiones' }, featured: true },
      { name: 'GitHub', levelHint: { en: 'Collaboration & Repos', es: 'Repositorios y colaboración' }, featured: true },
      { name: 'Visual Studio Code', levelHint: { en: 'Primary Editor', es: 'Editor principal' }, featured: true },
      { name: 'Postman', levelHint: { en: 'API Testing & Debugging', es: 'Pruebas y depuración de APIs' }, featured: true },
      { name: 'Android Studio', levelHint: { en: 'Mobile Development IDE', es: 'IDE de desarrollo móvil' } },
      { name: 'Eclipse', levelHint: { en: 'Java IDE', es: 'IDE para Java' } },
    ]
  },
  {
    id: 'ai-data',
    title: {
      en: 'AI & Data Analytics',
      es: 'IA y Analítica de Datos',
    },
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning', levelHint: { en: 'Supervised Learning & Pipelines', es: 'Modelos supervisados y pipelines' }, featured: true },
      { name: 'Data Analysis', levelHint: { en: 'EDA & Descriptive Stats', es: 'Análisis exploratorio y estadísticas' }, featured: true },
      { name: 'Pandas', levelHint: { en: 'DataFrames & Data Wrangling', es: 'DataFrames y manipulación de datos' }, featured: true },
      { name: 'NumPy', levelHint: { en: 'Numerical & Array Operations', es: 'Operaciones numéricas matriciales' }, featured: true },
      { name: 'Scikit-learn', levelHint: { en: 'Regressors, Splits & Metrics', es: 'Regresión, particiones y métricas' }, featured: true },
      { name: 'Sentiment Analysis', levelHint: { en: 'Text Processing & Polarity', es: 'Procesamiento de texto y polaridad' } },
    ]
  }
];

export const UI_TRANSLATIONS = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    experience: { en: 'Experience', es: 'Experiencia' },
    education: { en: 'Education', es: 'Educación' },
    projects: { en: 'Projects', es: 'Proyectos' },
    skills: { en: 'Skills', es: 'Habilidades' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    viewProjects: { en: 'View my projects', es: 'Ver mis proyectos' },
    getInTouch: { en: 'Get in touch', es: 'Contactar' },
    githubProfile: { en: 'GitHub Profile', es: 'Perfil de GitHub' },
    terminalTag: { en: 'Software Engineering • AI & Data', es: 'Ingeniería de Software • IA y Datos' },
  },
  about: {
    title: { en: 'About Me', es: 'Sobre Mí' },
    subtitle: { en: 'Background, mindset and technical trajectory', es: 'Trayectoria, mentalidad y enfoque técnico' },
    downloadCv: { en: 'Download CV', es: 'Descargar CV' },
    cvNotice: { en: 'CV placeholder preview available', es: 'Vista previa de CV disponible' },
    academicFoundation: { en: 'Academic Foundation', es: 'Base Académica' },
    coreInterests: { en: 'Areas of Interest', es: 'Áreas de Interés' },
  },
  experience: {
    title: { en: 'Professional Experience', es: 'Experiencia Profesional' },
    subtitle: { en: 'Hands-on roles and software engineering activities', es: 'Roles prácticos y actividades de ingeniería' },
    responsibilitiesTitle: { en: 'Key Responsibilities & Scope', es: 'Responsabilidades Clave y Alcance' },
  },
  education: {
    title: { en: 'Education & Qualifications', es: 'Educación y Titulaciones' },
    subtitle: { en: 'Academic degrees and certified vocational training', es: 'Titulaciones académicas y formación técnica' },
    keyCompetencies: { en: 'Key Coursework & Competencies', es: 'Materias Clave y Competencias' },
  },
  projects: {
    title: { en: 'Featured Projects', es: 'Proyectos Destacados' },
    subtitle: { en: 'Practical applications across software engineering, machine learning and data', es: 'Aplicaciones prácticas en ingeniería de software, machine learning y analítica' },
    filterAll: { en: 'All Projects', es: 'Todos los Proyectos' },
    filterAi: { en: 'AI & ML', es: 'IA y ML' },
    filterFullstack: { en: 'Full Stack', es: 'Full Stack' },
    filterData: { en: 'Data Analytics', es: 'Analítica de Datos' },
    viewDetails: { en: 'Inspect Architecture', es: 'Ver Detalles' },
    codeRepository: { en: 'View Repository', es: 'Ver Repositorio' },
    liveDemo: { en: 'Live Demo', es: 'Demostración' },
    placeholderNotice: { en: 'Project details and repository links are configurable placeholders ready for initial release.', es: 'Los detalles del proyecto y enlaces de repositorio son marcadores configurables listos para su publicación.' },
    placeholderBadge: { en: 'Configurable Initial Project', es: 'Proyecto Inicial Configurable' },
  },
  skills: {
    title: { en: 'Technologies & Skills', es: 'Tecnologías y Habilidades' },
    subtitle: { en: 'Verified competencies across development, architecture, data and tools', es: 'Competencias comprobadas en desarrollo, arquitectura, datos y herramientas' },
    allTab: { en: 'All Technologies', es: 'Todas las Tecnologías' },
    clarificationNote: { en: 'Note: Representing verified skills and practical training foundations. No arbitrary percentage bars.', es: 'Nota: Representa habilidades verificadas y bases prácticas de formación. Sin porcentajes arbitrarios.' },
  },
  contact: {
    title: { en: "Let's build something together.", es: 'Construyamos algo juntos.' },
    subtitle: { en: "I'm always interested in connecting with people, exploring new opportunities and working on interesting technology projects.", es: 'Siempre estoy interesado en conectar con personas, explorar nuevas oportunidades y colaborar en proyectos tecnológicos interesantes.' },
    nameLabel: { en: 'Your Name', es: 'Tu Nombre' },
    namePlaceholder: { en: 'e.g. Alex Smith', es: 'ej. Alejandro Gómez' },
    emailLabel: { en: 'Email Address', es: 'Correo Electrónico' },
    emailPlaceholder: { en: 'e.g. alex@company.com', es: 'ej. alex@empresa.com' },
    subjectLabel: { en: 'Subject', es: 'Asunto' },
    subjectPlaceholder: { en: 'e.g. Software Engineering Opportunity / Collaboration', es: 'ej. Oportunidad laboral / Colaboración técnica' },
    messageLabel: { en: 'Message', es: 'Mensaje' },
    messagePlaceholder: { en: 'Tell me about your team, project, or what you would like to discuss...', es: 'Cuéntame sobre tu equipo, proyecto o qué te gustaría comentar...' },
    submitButton: { en: 'Send Message', es: 'Enviar Mensaje' },
    prototypeNotice: { en: 'Frontend Prototype Mode: Form includes client-side validation. To receive live emails, connect Formspree, EmailJS, or a backend webhook in portfolioData.ts.', es: 'Modo Prototipo Frontend: Incluye validación de cliente. Para recibir emails reales, conecta Formspree, EmailJS o un webhook en portfolioData.ts.' },
    successMessage: { en: 'Thank you! Your message was validated successfully. (Demo mode feedback)', es: '¡Gracias! Tu mensaje fue validado correctamente. (Confirmación de modo demo)' },
    directEmail: { en: 'Direct Email', es: 'Correo Directo' },
    locationText: { en: 'Location', es: 'Ubicación' },
    socialText: { en: 'Professional Networks', es: 'Redes Profesionales' },
  },
  footer: {
    rightsReserved: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
    backToTop: { en: 'Back to top', es: 'Volver arriba' },
    craftedWith: { en: 'Engineered with React, TypeScript & Tailwind CSS', es: 'Diseñado con React, TypeScript y Tailwind CSS' },
  }
};
